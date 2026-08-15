const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, PageBreak, BorderStyle, ShadingType, VerticalAlign,
  VerticalMergeType,
} = require("docx");

const datos = require("./datos");

const FONT = "Arial";

// --- helpers ---
const p = (text, opts = {}) =>
  new Paragraph({
    alignment: opts.align || AlignmentType.LEFT,
    spacing: { after: opts.after === undefined ? 0 : opts.after, line: opts.line || 276 },
    indent: opts.indent,
    children: [
      new TextRun({
        text,
        font: FONT,
        size: opts.size || 24, // half-points -> 12pt
        bold: !!opts.bold,
      }),
    ],
  });

const blank = (n = 1) => Array.from({ length: n }, () => p(""));

// --- table cells ---
const COLS = [2340, 1620, 5040]; // DXA, sums to 9000 (6.25")
const ANCHO_TABLA = COLS.reduce((a, b) => a + b, 0);

const cell = (text, width, opts = {}) =>
  new TableCell({
    width: { size: width, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    verticalMerge: opts.merge,
    shading: opts.shaded
      ? { type: ShadingType.CLEAR, fill: opts.shaded, color: "auto" }
      : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [
      new Paragraph({
        alignment: opts.align,
        spacing: { after: 0, line: 252 },
        children: [
          new TextRun({ text, font: FONT, size: 22, bold: !!opts.bold }),
        ],
      }),
    ],
  });

const headerRow = new TableRow({
  tableHeader: true,
  children: [
    cell("ESPACIO / ELEMENTO", COLS[0], { bold: true, shaded: "D9D9D9" }),
    cell("ARTÍCULO", COLS[1], { bold: true, shaded: "D9D9D9" }),
    cell("DESCRIPCIÓN", COLS[2], { bold: true, shaded: "D9D9D9" }),
  ],
});

// Cada artículo abre con una fila que cruza toda la tabla y explica de qué trata.
const filaResumen = (art, resumen) =>
  new TableRow({
    cantSplit: true,
    children: [
      new TableCell({
        columnSpan: 3,
        width: { size: ANCHO_TABLA, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: "F2F2F2", color: "auto" },
        margins: { top: 90, bottom: 90, left: 100, right: 100 },
        children: [
          new Paragraph({
            spacing: { after: 0, line: 252 },
            children: [
              new TextRun({ text: `${art}. `, font: FONT, size: 22, bold: true }),
              new TextRun({ text: resumen, font: FONT, size: 22 }),
            ],
          }),
        ],
      }),
    ],
  });

// Debajo del resumen van los requisitos, uno por fila. La celda del artículo se
// escribe una sola vez (RESTART) y se continúa vacía en las demás (CONTINUE).
const cuerpo = [];
for (const { art, resumen, filas } of datos) {
  cuerpo.push(filaResumen(art, resumen));
  filas.forEach(([espacio, desc], i) => {
    cuerpo.push(
      new TableRow({
        children: [
          cell(espacio, COLS[0], { bold: true }),
          cell(i === 0 ? art : "", COLS[1], {
            merge: i === 0 ? VerticalMergeType.RESTART : VerticalMergeType.CONTINUE,
            bold: true,
            align: AlignmentType.CENTER,
          }),
          cell(desc, COLS[2]),
        ],
      })
    );
  });
}

const thin = { style: BorderStyle.SINGLE, size: 4, color: "808080" };

const table = new Table({
  columnWidths: COLS,
  width: { size: ANCHO_TABLA, type: WidthType.DXA },
  borders: {
    top: thin, bottom: thin, left: thin, right: thin,
    insideHorizontal: thin, insideVertical: thin,
  },
  rows: [headerRow, ...cuerpo],
});

// --- cover page ---
const cover = [
  ...blank(9),
  p("UNIVERSIDAD LA SALLE CHIHUAHUA", { align: AlignmentType.CENTER }),
  p("Arquitectura y Urbanismo", { align: AlignmentType.CENTER }),
  p("3er Semestre", { align: AlignmentType.CENTER }),
  p("Análisis de Proyectos", { align: AlignmentType.CENTER }),
  p("Arq. Ricardo Sáenz", { align: AlignmentType.CENTER }),
  ...blank(1),
  p("[Nombre del alumno]", { align: AlignmentType.CENTER }),
  p("[Matrícula]", { align: AlignmentType.CENTER }),
  new Paragraph({ children: [new PageBreak()] }),
];

// --- content page ---
const intro = [
  p("TAREA: Buscar en artículos las medidas básicas de una casa.", { after: 160 }),
  p("- ¿Qué espacio es?"),
  p("- ¿Qué artículo lo contiene?"),
  p("- Describir en palabras propias el artículo.", { after: 160 }),
  p(
    "Reglamento consultado: Reglamento de Construcciones y Normas Técnicas para el Municipio de Chihuahua.",
    { after: 240 }
  ),
];

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: FONT, size: 24 } },
    },
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 }, // US Letter
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [...cover, ...intro, table],
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("Medidas_basicas_de_una_casa.docx", buf);
  const filas = datos.reduce((a, b) => a + b.filas.length, 0);
  console.log(`OK - artículos: ${datos.length}, filas: ${filas}`);
});
