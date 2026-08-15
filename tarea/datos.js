// Reglamento de Construcciones y Normas Técnicas para el Municipio de Chihuahua.
// Cada bloque es un artículo: lleva su resumen y abajo sus requisitos concretos,
// uno por fila.
module.exports = [
  {
    art: "Artículo 2",
    resumen:
      "Definiciones que se usan para medir. Antes de dimensionar la casa, el Reglamento aclara desde dónde se toma la altura y con qué factores se calcula lo que se puede desplantar y construir dentro del lote.",
    filas: [
      ["Altura de la construcción", "Es la dimensión vertical de la construcción, tomada a partir del nivel medio longitudinal de la guarnición hacia arriba."],
      ["Altura máxima permitida", "Es la medida en metros que fijan los planes o programas, contada desde el nivel medio longitudinal de la guarnición hasta la parte más alta de la construcción."],
      ["Coeficiente de Ocupación del Suelo (COS)", "Es el factor por el que se multiplica el área total del predio para sacar la superficie máxima de desplante a nivel de terreno natural."],
      ["Coeficiente de Utilización del Suelo (CUS)", "Es el factor por el que se multiplica el área total del predio para sacar la superficie máxima de construcción, contando todas las áreas techadas."],
      ["Intensidad máxima de construcción", "Son los metros cuadrados techados máximos que se pueden construir en el predio; equivale al CUS."],
      ["Lote mínimo", "Es la superficie mínima sobre la que se puede ubicar una vivienda, según la Ley y los planes de desarrollo urbano."],
      ["Restricción", "Es la franja de terreno dentro de la propiedad privada que se conserva libre de obstáculos o construcciones a cualquier altura de su proyección vertical."],
      ["Paramento de la edificación", "Son los planos verticales que marcan los límites o el inicio de las construcciones dentro del predio."],
      ["Autoconstrucción", "Es la casa que levanta directamente el propietario en zona habitacional de alta densidad y cuya superficie total no rebasa 60 m² de construcción."],
    ],
  },
  {
    art: "Artículo 13",
    resumen:
      "Clasificación de las construcciones. Según cuántas viviendas tenga el proyecto, cambia el nombre del género y con eso cambian varias medidas que se le piden más adelante.",
    filas: [
      ["Vivienda unifamiliar", "Es la vivienda mínima, una sola vivienda."],
      ["Vivienda plurifamiliar", "De dos a 60 viviendas."],
      ["Vivienda multifamiliar", "De más de 60 viviendas."],
    ],
  },
  {
    art: "Artículo 53",
    resumen:
      "La vivienda mínima. Marca los locales que la casa debe poder alojar aunque se construya por partes, y por eso el diseño se hace pensando en cómo va a crecer.",
    filas: [
      ["Programa de la vivienda mínima", "El diseño arquitectónico y estructural debe permitir que la casa crezca hasta integrar tres recámaras, dos baños, sala, comedor y cocina."],
    ],
  },
  {
    art: "Artículo 54",
    resumen:
      "Tabla de dimensiones mínimas de los locales. Es el artículo base de la tarea: da el área, el lado y la altura libre que le toca a cada espacio de la casa.",
    filas: [
      ["Recámara (área)", "Mínimo 7.00 m²."],
      ["Recámara (lado)", "El lado libre no baja de 2.70 m."],
      ["Recámara (altura)", "Altura libre mínima de 2.50 m."],
      ["Alcoba (área)", "Mínimo 6.00 m²."],
      ["Alcoba (lado)", "Lado mínimo de 2.00 m."],
      ["Alcoba (altura)", "Altura mínima de 2.50 m."],
      ["Estancia o sala (área)", "Mínimo 7.30 m²."],
      ["Estancia (lado)", "Lado mínimo de 2.70 m."],
      ["Estancia (altura)", "Altura mínima de 2.50 m."],
      ["Comedor (área)", "Mínimo 6.30 m²."],
      ["Comedor (lado)", "Lado mínimo de 2.70 m."],
      ["Comedor (altura)", "Altura mínima de 2.50 m."],
      ["Estancia-comedor integral (área)", "Cuando los dos espacios van integrados, el área mínima es de 13.60 m²."],
      ["Estancia-comedor integral (lado)", "Lado mínimo de 2.70 m."],
      ["Estancia-comedor integral (altura)", "Altura mínima de 2.50 m."],
      ["Cocina (área)", "Mínimo 3.00 m²."],
      ["Cocina (lado)", "Lado mínimo de 1.50 m. La observación “a” de la tabla aclara que esa dimensión de lado se refiere a la longitud de la cocina."],
      ["Cocina (altura)", "Altura mínima de 2.50 m."],
      ["Cocineta integrada (lado)", "Si la cocineta va integrada a la estancia-comedor, el lado mínimo es de 2.00 m."],
      ["Cocineta integrada (altura)", "Altura mínima de 2.50 m."],
      ["Cuarto de lavado (área)", "Mínimo 1.68 m²."],
      ["Cuarto de lavado (lado)", "Lado mínimo de 1.40 m."],
      ["Cuarto de lavado (altura)", "Altura mínima de 2.30 m."],
      ["Cuarto de aseo y despensa", "La tabla sólo les fija altura mínima de 2.30 m; no marca área ni lado."],
      ["Baños y sanitarios (altura)", "La tabla sólo les fija altura mínima de 2.30 m; tampoco marca área ni lado."],
      ["Muebles del baño", "La observación “b” remite las dimensiones libres mínimas de los muebles sanitarios al Título Cuarto del Reglamento."],
    ],
  },
  {
    art: "Artículo 55",
    resumen:
      "Área libre del predio. Fija qué porcentaje del terreno se queda sin construir según el tamaño del lote, y qué se hace con esa superficie.",
    filas: [
      ["Área libre, predio menor de 500 m²", "Se deja sin construir el 20 por ciento."],
      ["Área libre, de 500 a 2,000 m²", "Se deja sin construir el 22.5 por ciento."],
      ["Área libre, de 2,000 a 3,500 m²", "Se deja sin construir el 25 por ciento."],
      ["Área libre, de 3,500 a 5,500 m²", "Se deja sin construir el 27.5 por ciento."],
      ["Área libre, más de 5,500 m²", "Se deja sin construir el 30 por ciento."],
      ["Pavimento del área libre", "Sólo se puede pavimentar con materiales que permitan la filtración del agua."],
      ["Arborización", "El área libre se arboriza conforme a la tabla de vegetación, con plantas de 1.5 m de altura mínima. En zonificación H4 corresponden 2 árboles por lote y hasta 30 por ciento del área libre pavimentada."],
      ["Ubicación de los árboles", "Van al frente del lote sobre la vía pública, sin obstruir el espacio peatonal."],
    ],
  },
  {
    art: "Artículo 56",
    resumen:
      "Altura máxima amarrada al ancho de la calle. Entre más angosta la calle, más baja se queda la construcción.",
    filas: [
      ["Altura máxima del edificio", "Ningún punto puede estar más alto que dos veces su distancia mínima al plano vertical sobre el alineamiento de la acera opuesta."],
    ],
  },
  {
    art: "Artículo 57",
    resumen:
      "Desde dónde se mide la altura. Aclara el punto de partida para que el dato del artículo anterior se saque siempre igual.",
    filas: [
      ["Medición de la altura", "Se mide a partir de la cota media de la guarnición de la acera en el frente del predio."],
    ],
  },
  {
    art: "Artículo 58",
    resumen: "Altura cuando el predio está en esquina y las dos calles tienen anchos distintos.",
    filas: [
      ["Predio en esquina", "Sobre la calle angosta se puede usar la altura que corresponde a la calle ancha, hasta una distancia de dos veces el ancho de la calle angosta medida desde la esquina."],
    ],
  },
  {
    art: "Artículo 59",
    resumen: "Restricción hacia la colindancia norte, para no tapar el asoleamiento del vecino.",
    filas: [
      ["Restricción hacia el norte", "Si el límite es orientación norte y colinda con predios habitacionales, se deja una restricción del 15 por ciento de la altura máxima."],
    ],
  },
  {
    art: "Artículo 60",
    resumen: "Separación con los predios vecinos. Manda a revisar el dato con las separaciones mínimas de diseño por sismo.",
    filas: [
      ["Separación por sismo", "Hay que verificar la separación con predios y edificaciones colindantes según el artículo de separaciones mínimas de diseño por sismo."],
    ],
  },
  {
    art: "Artículo 61",
    resumen: "Separación entre edificios de vivienda cuando el conjunto es chico.",
    filas: [
      ["Separación entre edificios plurifamiliares", "Hasta 50 viviendas, la separación es cuando menos la dimensión mínima que se pide para patios de iluminación y ventilación, según el tipo de local y la altura promedio de los paramentos."],
    ],
  },
  {
    art: "Artículo 62",
    resumen: "Separación entre edificios cuando el conjunto es grande. Aquí el dato ya se da en porcentaje de la altura y cambia según la orientación.",
    filas: [
      ["Separación norte-sur", "En más de 50 viviendas, la separación en dirección norte-sur es por lo menos del 60 por ciento de la altura promedio de los edificios."],
      ["Separación este-oeste", "En esa misma dirección la separación es por lo menos del 100 por ciento de la altura promedio de los edificios."],
    ],
  },
  {
    art: "Artículo 63",
    resumen: "Barda que delimita el predio y qué se hace cuando ya hay construcción pegada al lindero.",
    filas: [
      ["Barda del predio", "En cualquier edificación se construye una barda que delimite el predio, con altura mínima de un metro."],
      ["Tapajuntas", "Si ya existe construcción colindante se coloca tapajuntas y se resuelve la infiltración del agua."],
    ],
  },
  {
    art: "Artículo 64",
    resumen: "Cuántos cajones de estacionamiento le tocan a la casa. El número sale del tamaño de la vivienda.",
    filas: [
      ["Cajones, casa hasta 120 m²", "Un cajón por cada vivienda."],
      ["Cajones, casa de más de 120 hasta 250 m²", "Dos cajones por cada vivienda."],
      ["Cajones, casa de más de 300 m²", "Tres cajones por cada vivienda."],
      ["Cajones, plurifamiliar hasta 60 m²", "Un cajón por cada vivienda."],
      ["Cajones, plurifamiliar de 60 a 120 m²", "1.25 cajones por cada vivienda."],
      ["Cajones para empleados", "Al resultado de la tabla se le suma un incremento del 10 por ciento."],
    ],
  },
  {
    art: "Artículo 65",
    resumen: "Medidas del cajón y de los pasillos por donde entra y sale el coche. Aquí está la cochera dibujada en números.",
    filas: [
      ["Medida del cajón", "5.50 por 2.70 metros."],
      ["Cajón en cordón", "7.00 por 2.40 metros, sin contar las áreas de circulación."],
      ["Cajón para personas con discapacidad", "Uno por cada 50 cajones o fracción, de 5.50 por 3.80 metros, ubicado lo más cerca posible de la entrada."],
      ["Señalización del cajón accesible", "Lleva franja de circulación señalizada, señales en poste y en piso, y tope para vehículos."],
      ["Circulación con cajones a 90 grados", "Ancho mínimo de 7.20 metros lineales."],
      ["Circulación a 30 y 45 grados", "En un sentido, mínimo 3.50 metros lineales."],
      ["Circulación a 60 grados", "Mínimo 4.50 metros lineales."],
      ["Circulación en dos sentidos", "Para acomodo a 30, 45 y 60 grados, mínimo 7.00 metros lineales."],
    ],
  },
  {
    art: "Artículo 68",
    resumen: "El espacio donde se guarda la basura antes de que pase el camión.",
    filas: [
      ["Depósito de basura", "Se asigna un espacio ventilado y a prueba de roedores, colocado de forma que facilite el acceso del servicio de recolección."],
    ],
  },
  {
    art: "Artículo 69",
    resumen: "Con qué índice se calcula el tamaño de ese depósito.",
    filas: [
      ["Índice del depósito de basura", "En habitacional plurifamiliar se calculan 0.005 metros cúbicos por cada metro cuadrado construido."],
    ],
  },
  {
    art: "Artículo 70",
    resumen: "Pasillos de la vivienda. Da ancho y altura libre, y cambia el dato según si el pasillo sirve a una sola casa o a varias.",
    filas: [
      ["Pasillo interior de la vivienda (ancho)", "Ancho mínimo de 0.90 m."],
      ["Pasillo interior de la vivienda (altura)", "Altura mínima de 2.30 m."],
      ["Pasillo común a dos o más viviendas (ancho)", "Ancho mínimo de 1.20 m."],
      ["Pasillo común a dos o más viviendas (altura)", "Altura mínima de 2.30 m."],
      ["Longitud del pasillo", "Estas medidas aplican cuando la circulación no excede de 6.00 m de longitud."],
    ],
  },
  {
    art: "Artículo 71",
    resumen: "Qué tan lejos puede quedar el punto más apartado de la casa respecto de una salida.",
    filas: [
      ["Distancia a una salida", "Desde cualquier punto interior hasta una puerta, circulación horizontal, escalera o rampa, máximo 30 metros medidos sobre la línea de recorrido."],
    ],
  },
  {
    art: "Artículo 72",
    resumen: "El único caso en que esa distancia se puede estirar.",
    filas: [
      ["Aumento de la distancia a la salida", "Esa distancia se puede incrementar hasta un 50 por ciento si la edificación cuenta con sistema de extinción de fuego."],
    ],
  },
  {
    art: "Artículo 74",
    resumen: "Escaleras. Es el artículo más largo del tema y de él salen el ancho, la huella, el peralte, los descansos, los pasamanos y la altura libre.",
    filas: [
      ["Escalera o rampa", "Toda edificación comunica sus niveles con escaleras o rampas peatonales, aunque tenga elevador o montacargas."],
      ["Escalera privada con muro de un solo lado", "Ancho mínimo de 1.00 metro."],
      ["Escalera privada entre dos muros", "Ancho mínimo de 1.20 metros."],
      ["Escalera común a dos o más viviendas", "Ancho mínimo de 1.20 metros."],
      ["Ancho por número de usuarios", "El ancho se incrementa 0.60 m por cada 75 usuarios o fracción."],
      ["Peraltes entre descansos", "Máximo 16 peraltes en vivienda y 13 en edificios públicos."],
      ["Descanso", "Su ancho es cuando menos igual al ancho reglamentario de la escalera, y su longitud de 90 cm cuando la escalera es de una sola rampa."],
      ["Huella", "Ancho mínimo de 30 centímetros, medida entre las proyecciones verticales de los peraltes inmediatos."],
      ["Peralte", "Máximo 18 centímetros y mínimo 14 centímetros."],
      ["Peralte en escalera de servicio", "En escaleras de servicio de uso limitado el peralte puede llegar hasta 20 centímetros."],
      ["Relación huella-peralte", "Dos peraltes más una huella deben sumar cuando menos 61 centímetros y no más de 65."],
      ["Uniformidad del tramo", "Dentro de un mismo tramo la huella y el peralte conservan siempre las mismas dimensiones."],
      ["Escalera de caracol", "Diámetro mínimo de 1.20 metros."],
      ["Escalera compensada", "Huella mínima de 30 cm medida a 40 cm del barandal del lado interior, ancho máximo de 150 cm, y prohibida en edificaciones de más de cinco niveles."],
      ["Superficie del escalón", "Los escalones deben ser firmes y con superficie antiderrapante."],
      ["Nariz del escalón", "No se permiten aristas vivas ni narices sobresalientes; la arista va redondeada."],
      ["Pasamanos", "Se colocan a 75 y 90 centímetros de altura, volados 10 centímetros en los extremos."],
      ["Barandal", "En edificios públicos va cuando menos en uno de los lados, a 90 cm medidos desde la nariz del escalón y diseñado para que no pasen niños entre él."],
      ["Altura libre bajo la escalera", "En las circulaciones bajo la escalera se coloca una barrera a partir de donde la altura libre baja de 1.90 metros."],
      ["Área de aproximación", "Se marca un área de 75 centímetros como mínimo, con cambio de textura en el piso."],
      ["Puerta en cubo cerrado", "Las escaleras en cubo cerrado de cinco niveles o más llevan puertas hacia los vestíbulos en cada nivel."],
    ],
  },
  {
    art: "Artículo 75",
    resumen: "Rampas peatonales. Toma el ancho de la escalera y le agrega la pendiente.",
    filas: [
      ["Rampa peatonal", "Pendiente máxima de 8 por ciento, pavimento antiderrapante y barandal cuando menos en uno de sus lados."],
      ["Ancho de la rampa", "Se aplican los mismos anchos mínimos que se establecen para las escaleras."],
    ],
  },
  {
    art: "Artículo 76",
    resumen: "Rampas para personas con discapacidad. Aquí sí se acota cada cuánto va un descanso y qué medida lleva.",
    filas: [
      ["Descansos de rampa accesible", "La longitud máxima entre descansos es de 4.50 m, y el descanso mide cuando menos lo que la rampa, nunca menos de 1.20 m."],
      ["Bordes y pasamanos de rampa accesible", "Pendiente máxima de 8 por ciento, superficie antiderrapante, borde de protección de 5 por 5 centímetros y pasamanos a 75 y 90 cm, volados 30 cm en los extremos."],
      ["Altura libre bajo la rampa", "Se coloca una barrera a partir de donde queden menos de 1.90 metros de altura libre."],
    ],
  },
  {
    art: "Artículo 77",
    resumen: "Puertas. Una sola altura para todas y luego un ancho distinto según el local al que sirven.",
    filas: [
      ["Altura de las puertas", "Las puertas de acceso, intercomunicación y salida llevan 2.03 metros de altura cuando menos."],
      ["Puerta de acceso principal", "Ancho mínimo de 0.90 metros."],
      ["Puerta de locales habitables", "Ancho mínimo de 0.75 m."],
      ["Puerta de cocina", "Ancho mínimo de 0.75 m."],
      ["Puerta de locales complementarios", "Ancho mínimo de 0.60 m."],
      ["Puerta hacia la vía pública", "Su anchura total es por lo menos 1.25 veces la suma de las anchuras reglamentarias de las puertas entre vestíbulo y salas."],
    ],
  },
  {
    art: "Artículo 78",
    resumen: "Salidas de emergencia y cómo debe abrir la puerta por la que se sale.",
    filas: [
      ["Salida de emergencia", "Debe permitir desalojar cada nivel sin atravesar locales de servicio como cocinas y bodegas."],
      ["Puerta que da a la escalera", "Abre sobre un descanso cuya longitud de ancho no será menor que el ancho de la puerta."],
      ["Apertura de la puerta de salida", "Lleva un mecanismo que permita abrirla desde dentro con un simple empuje, y la fuerza para abrirla por completo no debe exceder de 20 kilogramos."],
    ],
  },
  {
    art: "Artículo 79",
    resumen: "Cómo se mide la distancia a la salida, para que los 30 metros del artículo 71 se saquen bien.",
    filas: [
      ["Trayecto de la medición", "Se mide sobre la superficie transitable, a lo largo del centro del trayecto usual y desde el punto de ocupación más lejano."],
      ["Medición sobre la escalera", "Cuando en el recorrido entran escaleras, la distancia se toma en el plano de la nariz de los escalones."],
    ],
  },
  {
    art: "Artículo 83",
    resumen: "De dónde tiene que venir la luz natural de los locales de la casa.",
    filas: [
      ["Iluminación natural", "Los locales habitables y la cocina doméstica se iluminan con ventanas que den directamente a la vía pública, terrazas, azoteas, superficies descubiertas o patios."],
      ["Ventanas hacia la colindancia", "Por ningún motivo se permiten, salvo lo que autoriza el artículo 86."],
    ],
  },
  {
    art: "Artículo 84",
    resumen: "Tamaño de la ventana. El dato se da en porcentaje del piso del local, no en medida fija.",
    filas: [
      ["Área de ventana", "No será inferior al 10 por ciento de la superficie del local."],
      ["Ventanas con distintas orientaciones", "Se divide la superficie del local entre el número de ventanas y a ese resultado se le aplica el porcentaje mínimo."],
      ["Ventana bajo marquesina o volado", "Se considera iluminada naturalmente si queda remetida como máximo el equivalente a la altura de piso a techo del local."],
    ],
  },
  {
    art: "Artículo 85",
    resumen: "Domos y tragaluces, para los locales donde no alcanza a llegar una ventana.",
    filas: [
      ["Domos y tragaluces", "Se permiten para iluminar baños, cocinas no domésticas, locales de trabajo, almacenamiento, circulaciones y servicios."],
      ["Medida del domo o tragaluz", "Se toma el 25 por ciento de la superficie de la ventana requerida, pero nunca menos de 45 por 45 centímetros."],
    ],
  },
  {
    art: "Artículo 86",
    resumen: "La excepción para iluminar por el muro de colindancia, y a partir de qué altura se permite.",
    filas: [
      ["Bloque de vidrio en colindancia", "Se permite iluminar con bloques de vidrio prismático traslúcido a partir de 7.20 metros sobre el nivel de banqueta, sin que sustituya las ventanas y domos mínimos."],
    ],
  },
  {
    art: "Artículo 87",
    resumen: "Patios de iluminación y ventilación. La medida del patio no es fija: sale de la altura de los muros que lo rodean y del tipo de local que se asome a él.",
    filas: [
      ["Patio de iluminación y ventilación", "Su dimensión nunca será menor de 2.50 metros."],
      ["Patio para locales habitables", "La dimensión mínima es un tercio de la altura de los paramentos del patio."],
      ["Patio para locales complementarios", "La dimensión mínima es un cuarto de la altura de los paramentos."],
      ["Patio para cualquier otro local", "La dimensión mínima es un quinto de la altura de los paramentos."],
      ["Paramentos de distinta altura", "Cuando las alturas son variables se toma el promedio de las dos más altas."],
      ["Tolerancia del patio", "Se puede reducir hasta una quinta parte una de las dimensiones mínimas, siempre que la opuesta tenga una quinta parte más de lo que le corresponde."],
      ["Patio abierto a la vía pública", "Se reduce hasta la mitad la dimensión mínima en los lados perpendiculares a la vía pública."],
      ["Descuento de altura en el patio", "Del total de los paramentos se descuentan la planta baja y los niveles inmediatos superiores que sirvan de vestíbulo, estacionamiento o locales de servicio."],
      ["Forma del patio", "Lo que dice el artículo aplica a patios de base cuadrada o rectangular."],
      ["Iluminación artificial", "Todos los locales habitables llevan iluminación nocturna artificial conforme al capítulo de instalaciones eléctricas."],
    ],
  },
  {
    art: "Artículo 88",
    resumen: "Ventilación natural. También se resuelve en porcentaje del área del local.",
    filas: [
      ["Ventilación natural", "El área de abertura de ventilación no será inferior al 5 por ciento del área del local."],
    ],
  },
  {
    art: "Artículo 89",
    resumen: "Cuando el local se ventila con aparatos en lugar de ventana, el dato se vuelve cambios de aire por hora.",
    filas: [
      ["Sanitario doméstico", "Si se ventila con medios artificiales, 6 cambios de aire por hora."],
      ["Cocina doméstica", "Si se ventila con medios artificiales, 10 cambios de aire por hora."],
      ["Corredores y pasillos", "Un cambio de aire por hora, y puede ser a través de otros locales."],
    ],
  },
  {
    art: "Artículo 92",
    resumen: "Los vidrios que van de piso a techo, que en una casa se usan mucho en sala y jardín.",
    filas: [
      ["Vidrios de piso a techo", "Llevan señales visuales que informen que están ahí y protección para evitar que la gente choque contra ellos."],
    ],
  },
  {
    art: "Artículo 94",
    resumen: "Alberca. Lo que pide el Reglamento en las orillas y en el acceso al agua.",
    filas: [
      ["Alberca, andadores", "Llevan superficie áspera o de material antiderrapante en las orillas, construidos de manera que no se hagan encharcamientos."],
      ["Alberca, escaleras", "Donde la profundidad sea mayor de 90 centímetros se pone una escalera por cada 25 metros lineales de perímetro."],
    ],
  },
  {
    art: "Artículo 96",
    resumen: "Fachadas dentro de zonas de patrimonio, donde las medidas y los acabados los marca otra autoridad.",
    filas: [
      ["Fachada en zona de patrimonio", "En zonas de patrimonio histórico, artístico o arqueológico se respetan las restricciones de altura, materiales, acabados, colores y aberturas que señalen el INAH, el INBAL y el Municipio."],
    ],
  },
  {
    art: "Artículo 97",
    resumen: "El estudio de imagen urbana, que sirve para ver cómo se ve la fachada nueva junto a las que ya están.",
    filas: [
      ["Estudio de imagen urbana", "Se acompaña el levantamiento de las fachadas de la manzana y de las construcciones vecinas, el reporte fotográfico y la justificación de cómo se integra el proyecto al entorno."],
    ],
  },
  {
    art: "Artículo 98",
    resumen: "A partir de qué altura la fachada obliga a estudiar la sombra que va a echar sobre los vecinos.",
    filas: [
      ["Proyección de sombras", "Las edificaciones de diez metros o más sobre el nivel de banqueta presentan el estudio de las sombras que provocarían sobre los predios vecinos a lo largo del día y del año."],
    ],
  },
  {
    art: "Artículo 99",
    resumen: "Cuándo se puede usar vidrio reflejante en la fachada.",
    filas: [
      ["Vidrio reflejante en fachada", "Se permite siempre que se demuestre con estudios de asoleamiento y reflexión espectral que no provoca deslumbramientos ni aumenta la carga térmica de las edificaciones vecinas."],
    ],
  },
  {
    art: "Artículo 100",
    resumen: "Acabado de la fachada que da a la colindancia y al patio del vecino.",
    filas: [
      ["Fachada de colindancia", "Las de cinco niveles o más que formen parte de los paramentos de patios de iluminación y ventilación vecinos llevan acabados de colores claros."],
    ],
  },
  {
    art: "Artículo 132",
    resumen: "Cargas vivas de diseño. Es el peso de la gente y de las cosas que se mueven dentro de la casa.",
    filas: [
      ["Carga viva de diseño", "Debe ser la máxima carga probable por el uso y la ocupación, pero nunca menor a las cargas uniformemente distribuidas que indica la Tabla 11."],
    ],
  },
  {
    art: "Artículo 133",
    resumen: "Carga concentrada, que es la que cae en un solo punto del entrepiso.",
    filas: [
      ["Área de reparto", "La carga concentrada se supone repartida en un área de 0.50 m² y se coloca donde produzca las condiciones más desfavorables."],
      ["Valor de la carga concentrada", "Para ocupaciones distintas al comercio, la industria, las bodegas y los estacionamientos públicos, la carga concentrada es de 100 kilogramos."],
    ],
  },
  {
    art: "Artículo 136",
    resumen: "Cuándo se puede diseñar con una carga viva más baja que la de la tabla.",
    filas: [
      ["Carga viva reducida", "Los elementos con área de influencia mayor a 36 m² se pueden diseñar con carga viva reducida según la ecuación del artículo."],
    ],
  },
  {
    art: "Artículo 137",
    resumen: "Hasta dónde se puede bajar esa reducción.",
    filas: [
      ["Límite de la reducción", "La carga viva reducida no baja del 50 por ciento cuando el miembro soporta un piso, ni del 40 por ciento en los demás casos."],
    ],
  },
  {
    art: "Artículo 138",
    resumen: "Carga viva del techo, que se calcula aparte de la de los entrepisos.",
    filas: [
      ["Carga viva en techo", "Se calcula con la fórmula Vt = 100 R1R2 y nunca resulta menor de 60 kg/m²."],
    ],
  },
  {
    art: "Artículo 139",
    resumen: "Cuando la azotea se usa, deja de ser techo y se calcula como piso.",
    filas: [
      ["Techo de paso peatonal", "Si el techo se usa como paso peatonal se diseña para 300 kg/m²."],
      ["Techo de jardín o reunión", "Si se usa como jardín o área de reunión se diseña para 500 kg/m²."],
    ],
  },
  {
    art: "Artículo 142",
    resumen: "Tabla 11, valores nominales mínimos de cargas vivas. Aquí sale el número que le toca a una casa y a los espacios que la acompañan.",
    filas: [
      ["Carga en casa habitación", "Carga uniforme de 200 kg/m²."],
      ["Balcones exteriores", "Carga uniforme de 500 kg/m²."],
      ["Balcón de casa residencial sin exceder 10 m²", "Carga uniforme de 300 kg/m²."],
      ["Escaleras de emergencia", "Carga uniforme de 500 kg/m²."],
      ["Estacionamiento de carros de pasajeros", "Carga uniforme de 250 kg/m²."],
      ["Responsabilidad del propietario", "El propietario debe garantizar que la carga viva que se aplique al edificio no exceda las cargas de diseño."],
    ],
  },
  {
    art: "Artículo 147",
    resumen: "Piso mínimo de la carga de viento, para que el cálculo no quede por debajo de un valor de seguridad.",
    filas: [
      ["Carga neta mínima de viento", "No debe ser menor de 50 kg/m², tanto para la estructura principal como para sus componentes y recubrimientos."],
    ],
  },
  {
    art: "Artículo 148",
    resumen: "Definiciones del capítulo de viento. De aquí sale a qué altura se mide el viento y desde qué medida un edificio se considera bajo.",
    filas: [
      ["Velocidad básica de viento", "Es la velocidad de diseño asociada a ráfagas de tres segundos, medida a diez metros sobre el nivel del terreno."],
      ["Edificio de baja altura", "Es aquel cuya altura media del techo es igual o menor a 18 metros y además es menor que la menor dimensión horizontal de la edificación."],
      ["Edificio abierto", "Es el que tiene por lo menos el 80 por ciento de aberturas en cada muro."],
    ],
  },
  {
    art: "Artículo 150",
    resumen: "El dato de viento propio de Chihuahua, que es con el que se calcula cualquier casa del municipio.",
    filas: [
      ["Velocidad básica en Chihuahua", "Es de 145 km/h, y se supone que el viento puede actuar en cualquier dirección."],
    ],
  },
  {
    art: "Artículo 165",
    resumen: "Presión de viento sobre muros, techo y ventanas en edificios bajos, que es el caso de una casa.",
    filas: [
      ["Altura del edificio", "La ecuación de este artículo se aplica a componentes y recubrimientos de edificios con alturas menores a 18 metros."],
      ["Componentes de gran superficie", "Los componentes y recubrimientos con áreas mayores a 65 m² se pueden diseñar con los requerimientos de la estructura principal."],
    ],
  },
  {
    art: "Artículo 169",
    resumen: "Por qué en Chihuahua se diseña contra sismo aunque no sea zona de temblores fuertes.",
    filas: [
      ["Zona sísmica", "Chihuahua y sus zonas circunvecinas se consideran áreas con actividad sísmica posible, así que la construcción lleva un sistema capaz de resistir cargas laterales."],
    ],
  },
  {
    art: "Artículo 171",
    resumen: "Qué es el coeficiente sísmico, que es el número base del cálculo.",
    filas: [
      ["Coeficiente sísmico", "Es el cociente entre la fuerza cortante horizontal en la base de la estructura y el peso de la misma."],
    ],
  },
  {
    art: "Artículo 172",
    resumen: "Aceleración espectral de diseño. Trae los valores que se usan concretamente para la ciudad de Chihuahua.",
    filas: [
      ["Aceleración espectral máxima", "Para la ciudad de Chihuahua se considera igual a 0.064."],
      ["Factores de sitio", "Fa y Fv se determinan con la Tabla 18 según el tipo de suelo."],
    ],
  },
  {
    art: "Artículo 173",
    resumen: "Período fundamental del edificio. Se saca con las dimensiones de la construcción.",
    filas: [
      ["Datos de la ecuación", "Se calcula con la altura del edificio en metros y con la dimensión de la estructura en la dirección paralela a la fuerza."],
    ],
  },
  {
    art: "Artículo 174",
    resumen: "Cómo se reparte la fuerza del sismo entre los niveles de la casa.",
    filas: [
      ["Distribución por nivel", "La fuerza cortante total en la base se distribuye verticalmente usando el peso y la altura de cada nivel."],
    ],
  },
  {
    art: "Artículo 175",
    resumen: "Cuánto se puede mover la casa de lado durante un sismo.",
    filas: [
      ["Desplazamiento lateral", "No debe exceder de 0.006 veces la diferencia de elevaciones entre entrepisos."],
      ["Desplazamiento con elementos resistentes", "Puede subir a 0.012 veces cuando los elementos aguanten esas deformaciones sin daños importantes."],
    ],
  },
  {
    art: "Artículo 177",
    resumen: "Muros de sótano, que trabajan con la tierra empujando de lado.",
    filas: [
      ["Muro de sótano", "Se diseña considerando la presión lateral del suelo adyacente y el aumento de presión por sobrecargas fijas o móviles."],
    ],
  },
  {
    art: "Artículo 178",
    resumen: "Pisos y losas construidas por debajo del nivel del terreno.",
    filas: [
      ["Losa bajo el nivel del terreno", "Se toma en cuenta la subpresión del agua, midiendo la carga hidrostática desde el desplante de la losa hasta el nivel freático."],
    ],
  },
  {
    art: "Artículo 179",
    resumen: "Carga de nieve. Aunque no lo parezca, en Chihuahua sí se pide por el clima.",
    filas: [
      ["Carga de nieve", "Por el clima de Chihuahua se recomienda una carga de nieve no menor a 40 kg/m²."],
      ["Nieve acumulada", "Donde el techo o alguna obstrucción provoque acumulación, la carga mínima sube a 60 kg/m²."],
    ],
  },
  {
    art: "Artículo 180",
    resumen: "Drenaje del techo y el peso del agua que se puede quedar arriba.",
    filas: [
      ["Drenaje de techos", "Además del drenaje primario se instala uno secundario a mayor elevación, y el techo se diseña para soportar esa lámina de agua más una carga de 25 kg/m²."],
    ],
  },
  {
    art: "Artículo 181",
    resumen: "El encharcamiento, que es cuando el agua se junta y el techo se va venciendo.",
    filas: [
      ["Encharcamiento", "Los techos se diseñan para no fallar por acumulación progresiva de agua."],
    ],
  },
  {
    art: "Artículo 183",
    resumen: "Sobre qué se puede apoyar la casa.",
    filas: [
      ["Cimentación", "Toda construcción se apoya en una cimentación apropiada, y nunca se desplanta sobre tierra vegetal ni sobre lechos sueltos."],
    ],
  },
  {
    art: "Artículo 184",
    resumen: "Qué pasa cuando el terreno es de relleno.",
    filas: [
      ["Cimentar sobre relleno", "Sólo se acepta sobre rellenos artificiales cuando se demuestre que cumplen la capacidad de carga y estabilidad del diseño."],
    ],
  },
  {
    art: "Artículo 185",
    resumen: "A partir de cuántos niveles se vuelve obligatorio el estudio de mecánica de suelos.",
    filas: [
      ["Estudio de mecánica de suelos", "Se necesita en todas las edificaciones de cuatro niveles o más, y cuando la Dirección lo juzgue necesario por la importancia de la estructura."],
    ],
  },
  {
    art: "Artículo 186",
    resumen: "Lo que hay que revisar de las casas vecinas antes de cimentar.",
    filas: [
      ["Revisión de colindancias", "Hay que investigar cimentación, estabilidad, asentamiento, agrietamiento y desplome de las construcciones vecinas."],
    ],
  },
  {
    art: "Artículo 187",
    resumen: "A qué profundidad se desplanta la cimentación.",
    filas: [
      ["Profundidad de desplante", "La subestructura se desplanta a una profundidad donde sea mínimo el deterioro del suelo por erosión o intemperismo."],
    ],
  },
  {
    art: "Artículo 189",
    resumen: "Instalaciones hidráulicas y sanitarias. El Reglamento no da aquí los diámetros de tubería, los manda a otro ordenamiento.",
    filas: [
      ["Instalaciones hidráulicas y sanitarias", "Se rigen por el Reglamento de la Junta Municipal de Agua y Saneamiento de Chihuahua."],
    ],
  },
  {
    art: "Artículo 190",
    resumen: "Instalaciones especiales y confort. Aquí están las temperaturas y la renovación de aire que se buscan dentro de la casa.",
    filas: [
      ["Temperatura interior", "Se recomienda que la casa se diseñe o equipe para mantener entre 18 y 27 °C cuando afuera haya entre 0 y 36 °C."],
      ["Renovación de aire", "Al menos un volumen habitable de aire por hora, de forma natural o mecánica."],
      ["Pérdida de energía", "En casa habitación unifamiliar o multifamiliar se procura no pasar de 2 W/m³K."],
      ["Instalación de gas", "Las instalaciones de gas LP y gas natural cumplen con las normas oficiales mexicanas."],
    ],
  },
  {
    art: "Artículo 191",
    resumen: "A partir de qué superficie construida se dejan preparaciones de teléfono y datos.",
    filas: [
      ["Registros de teléfono y datos", "Se dejan registros, ductos y preparaciones en cualquier edificación con más de 100 m² construidos."],
    ],
  },
  {
    art: "Artículo 193",
    resumen: "Cuándo se exige elevador. Vale la pena anotarlo porque la casa unifamiliar queda exceptuada.",
    filas: [
      ["Cuándo se pide elevador", "En edificaciones de más de cuatro niveles además de la planta baja, o con altura o profundidad mayor de 12 metros desde el nivel de acceso."],
      ["Excepción", "Las edificaciones para habitación unifamiliar quedan exceptuadas."],
      ["Espera del elevador", "El intervalo máximo de espera será de 80 segundos."],
    ],
  },
  {
    art: "Artículo 197",
    resumen: "Densidad de población. Con este dato se calcula cuánta gente se supone que vive en la casa.",
    filas: [
      ["Densidad de población", "En edificios para habitación se considera 1.85 personas por recámara."],
    ],
  },
  {
    art: "Artículo 203",
    resumen: "Red electrónica. Da los diámetros de la tubería y a qué altura y cada cuánto van los registros.",
    filas: [
      ["Tubería de enlace", "Fibrocemento de 10 centímetros de diámetro mínimo, o plástico de 50 milímetros mínimo para 20 a 50 pares."],
      ["Registros de paso", "Se colocan cuando el ducto de enlace pasa de 20 metros de longitud o cuando cambia a más de 90 grados."],
      ["Separación entre registros", "Se dispone de un registro de distribución a cada 20 metros de tubería cuando más."],
      ["Cajas de registro", "Se colocan a 0.60 metros del nivel del suelo y en lugares accesibles."],
      ["Registros por nivel", "En edificaciones para habitación puede haber un registro de distribución por cada dos niveles."],
    ],
  },
  {
    art: "Artículo 204",
    resumen: "Las líneas horizontales de esa misma red, ya dentro de la casa.",
    filas: [
      ["Líneas de distribución horizontal", "Van en tubería de fierro o plástico de 13 milímetros."],
      ["Caja de registro horizontal", "Para tres o cuatro líneas se ponen cajas de 10 por 5 por 3 centímetros, a cada 20 metros de tubería como máximo y a 0.60 metros sobre el nivel del piso."],
    ],
  },
  {
    art: "Artículo 206",
    resumen: "Lo mismo, pero cuando la casa está dentro de un conjunto habitacional.",
    filas: [
      ["Registro de paso", "Se coloca cuando la longitud de la tubería de enlace es mayor de 20 metros o cuando hay cambios a menos de 90 grados."],
      ["Altura de las cajas", "Las cajas de registro de distribución y de alimentación van a 0.60 metros del nivel del suelo, con cuando menos un registro por cada nivel."],
      ["Diámetro de las líneas", "Las líneas de distribución horizontales van en tubería de fierro o plástico de 13 milímetros como mínimo."],
    ],
  },
  {
    art: "Artículo 208",
    resumen: "Clasificación por riesgo de incendio. Sirve para saber en qué grupo cae la casa, y todo está dado en medidas.",
    filas: [
      ["Riesgo menor", "Edificaciones de hasta 25.00 metros de altura, hasta 250 ocupantes y hasta 3,000 m²."],
      ["Riesgo mayor", "Edificaciones de más de 25.00 metros de altura, más de 250 ocupantes y más de 3,000 m²."],
    ],
  },
  {
    art: "Artículo 214",
    resumen: "Separación entre los ductos calientes y la madera de la construcción.",
    filas: [
      ["Ductos de alta temperatura", "Los tiros de chimenea, campanas de extracción o ductos que conduzcan gases a más de 80 °C se separan mínimo 60 cm de los elementos estructurales de madera."],
    ],
  },
  {
    art: "Artículo 215",
    resumen: "Qué se hace con el hueco que queda en esa separación.",
    filas: [
      ["Espacio de la separación", "En el espacio que queda en esa separación debe permitirse la circulación del aire."],
    ],
  },
  {
    art: "Artículo 216",
    resumen: "Extintores y la distancia máxima para alcanzarlos. La vivienda de hasta cinco niveles está exceptuada.",
    filas: [
      ["Distancia al extintor", "Desde cualquier punto del edificio el acceso al extintor no debe quedar a más de 30 metros."],
      ["Excepción", "Los edificios destinados a habitación de hasta cinco niveles quedan exceptuados de esta obligación."],
    ],
  },
  {
    art: "Artículo 220",
    resumen: "Hasta dónde suben los ductos de instalaciones.",
    filas: [
      ["Ductos de instalaciones", "Se prolongan y ventilan sobre la azotea más alta a la que tengan acceso."],
    ],
  },
  {
    art: "Artículo 221",
    resumen: "Tiros y tolvas por donde bajan la ropa o la basura.",
    filas: [
      ["Tiros o tolvas de basura", "Se prolongan por arriba de las azoteas, y sus compuertas evitan el paso de fuego o humo de un piso a otro."],
    ],
  },
  {
    art: "Artículo 224",
    resumen: "Chimenea. Da la altura a la que sale el tiro y la separación con lo que se puede quemar.",
    filas: [
      ["Salida del tiro", "El tiro conduce humos y gases al exterior por la parte superior, con la salida a 1.50 metros sobre el nivel de la azotea y diseñada para poder deshollinarse."],
      ["Materiales junto a la chimenea", "Los materiales inflamables y los elementos decorativos quedan a no menos de 60 centímetros."],
    ],
  },
  {
    art: "Artículo 229",
    resumen: "Hasta dónde llegan los muros interiores que dividen la casa de las circulaciones.",
    filas: [
      ["Altura del muro interior", "Los muros cubren todo el espacio vertical comprendido entre los elementos estructurales de los pisos contiguos, sin interrumpirse en los plafones."],
    ],
  },
  {
    art: "Artículo 237",
    resumen: "Cómo se resuelve la junta que queda entre la casa y la construcción del vecino.",
    filas: [
      ["Protección de la colindancia", "Las separaciones se protegen con tapajuntas o botaguas que impidan la entrada de agua y basura, y se garantiza el aislamiento acústico entre edificaciones."],
    ],
  },
];
