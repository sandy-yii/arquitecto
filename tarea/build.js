const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, PageBreak, BorderStyle, ShadingType, VerticalAlign,
} = require("docx");

const rows = require("./rows");

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

const cell = (text, width, opts = {}) =>
  new TableCell({
    width: { size: width, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    shading: opts.shaded
      ? { type: ShadingType.CLEAR, fill: "D9D9D9", color: "auto" }
      : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [
      new Paragraph({
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
    cell("ESPACIO / ELEMENTO", COLS[0], { bold: true, shaded: true }),
    cell("ARTÍCULO", COLS[1], { bold: true, shaded: true }),
    cell("DESCRIPCIÓN", COLS[2], { bold: true, shaded: true }),
  ],
});

const bodyRows = rows.map(
  ([espacio, articulo, desc]) =>
    new TableRow({
      children: [
        cell(espacio, COLS[0], { bold: true }),
        cell(articulo, COLS[1]),
        cell(desc, COLS[2]),
      ],
    })
);

const thin = { style: BorderStyle.SINGLE, size: 4, color: "808080" };

const table = new Table({
  columnWidths: COLS,
  width: { size: COLS.reduce((a, b) => a + b, 0), type: WidthType.DXA },
  borders: {
    top: thin, bottom: thin, left: thin, right: thin,
    insideHorizontal: thin, insideVertical: thin,
  },
  rows: [headerRow, ...bodyRows],
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
  console.log("OK - filas:", rows.length);
});
