'use client';
import { useState } from "react";

const P = {
  ink:    "#1A0A3D",
  deep:   "#2D1658",
  mid:    "#4A2E8A",
  soft:   "#9080B8",
  tint:   "#EDE6FA",
  bg:     "#F4F2FC",
  accent: "#E8A020",
  white:  "#FFF",
};

/* ══════════════════════════════════════════════════════════
   DATOS COMPLETOS — 6 ÁREAS DE INVESTIGACIÓN GEDII
   Fuente: PNC 2024-2038 · Lineamientos GEDII
   ══════════════════════════════════════════════════════════ */
const AREAS = [
  {
    id: 1,
    nombre: "Política, Lenguajes y Símbolos",
    color: "#2D1658",
    tint:  "#EDE6FA",
    accent:"#7B68AE",
    campos: [
      "Políticas culturales: normatividad, regulación e institucionalidad del sector",
      "Lenguajes artísticos, sistemas simbólicos y semiótica cultural",
      "Economía creativa y cultural: industrias, mercados y empleo",
      "Diplomacia cultural y cooperación internacional",
      "Cultura y comunicación: medios, narrativas públicas y opinión",
      "Educación artística y cultural: enfoques, calidad e impacto",
      "Propiedad intelectual, derechos de autor y conocimiento colectivo",
      "Infraestructura cultural: espacios, equipamientos y redes",
    ],
    prioridades: [
      "Análisis crítico de implementación del PNC 2024-2038 en territorios",
      "Evaluación de efectividad de políticas culturales departamentales y municipales",
      "Industrias culturales y creativas: empleo, formalización y encadenamientos",
      "Marcos normativos del sector: brechas, vacíos y propuestas",
      "Economía naranja: medición de impacto económico y social",
      "Presupuesto público en cultura: análisis comparado y tendencias",
    ],
    enfos: [
      "Análisis de políticas públicas (policy analysis)",
      "Enfoque territorial y diferencial",
      "Intersectorial (cultura-economía-educación)",
      "Economía de la cultura y las artes",
      "Comunicación intercultural",
      "Evaluación basada en derechos culturales",
    ],
    metodologias: [
      { nombre:"Análisis documental y de políticas", desc:"Revisión sistemática de normatividad, planes, programas y presupuestos" },
      { nombre:"Investigación cuantitativa", desc:"Estadísticas del sector, indicadores, medición de cobertura e impacto" },
      { nombre:"Evaluación de impacto", desc:"Estudios cuasi-experimentales, antes-después, grupos de comparación" },
      { nombre:"Estudios comparados internacionales", desc:"Análisis de políticas culturales en América Latina y OCDE" },
      { nombre:"Revisión sistemática de literatura", desc:"Meta-análisis, síntesis de evidencia sobre efectividad de políticas" },
      { nombre:"Investigación mixta", desc:"Combinación de encuestas, entrevistas y análisis documental" },
    ],
    resultados: [
      "Informes de diagnóstico y política cultural sectorial y territorial",
      "Indicadores de gestión, cobertura y calidad de la política cultural",
      "Mapas normativos del sector cultural colombiano",
      "Recomendaciones de política pública basadas en evidencia",
      "Análisis comparados de economía creativa e industrias culturales",
      "Boletines estadísticos del sector cultural",
      "Evaluaciones de planes, programas y proyectos culturales",
    ],
  },
  {
    id: 2,
    nombre: "Transformación social y expresión cultural",
    color: "#063020",
    tint:  "#E6F8F0",
    accent:"#1F7A45",
    campos: [
      "Culturas para la paz, la reconciliación y la convivencia",
      "Arte, género y diversidades sexuales e identidades de género",
      "Cultura y educación popular: pedagogías críticas y comunitarias",
      "Expresiones culturales de comunidades negras, afrocolombianas, raizales y palenqueras",
      "Expresiones culturales de pueblos indígenas y sus cosmogonías",
      "Cultura urbana, culturas juveniles y subculturas",
      "Arte-terapia, cultura y salud mental comunitaria",
      "Cultura y discapacidad: accesibilidad y participación plena",
      "Festivales, carnavales y manifestaciones populares",
    ],
    prioridades: [
      "Cultura y construcción de paz territorial en zonas de posconflicto",
      "Expresiones culturales LGBTQ+ y diversidades en el espacio público",
      "Cultura como herramienta de transformación social y reducción de violencias",
      "Fortalecimiento de expresiones culturales étnicas en contextos urbanos",
      "Culturas juveniles y participación ciudadana",
      "Arte y memoria del conflicto armado colombiano",
    ],
    enfos: [
      "Género e interseccionalidad",
      "Diferencial étnico (indígena, afrocolombiano, ROM, raizal, palenquero)",
      "Territorial y biocultural",
      "Educación popular y pedagogías críticas (Freire, Fals Borda)",
      "Paz y no violencia",
      "Enfoque de derechos culturales",
    ],
    metodologias: [
      { nombre:"Investigación Acción Participativa (IAP)", desc:"Co-construcción de conocimiento con comunidades como sujetos activos de investigación" },
      { nombre:"Etnografía y etnografía visual", desc:"Trabajo de campo prolongado, observación participante, fotografía y video etnográfico" },
      { nombre:"Sistematización de experiencias", desc:"Método Oscar Jara para recuperar aprendizajes de procesos organizativos y artísticos" },
      { nombre:"Investigación artística basada en las artes", desc:"La creación artística como proceso metodológico de producción de conocimiento" },
      { nombre:"Grupos focales y talleres comunitarios", desc:"Espacios de reflexión colectiva con actores del territorio cultural" },
      { nombre:"Narrativas y testimonios de vida", desc:"Historias de vida, relatos testimoniales, biografías culturales" },
    ],
    resultados: [
      "Sistematizaciones de procesos artísticos y culturales transformadores",
      "Documentales, piezas audiovisuales y radiales comunitarias",
      "Memorias de experiencias de cultura y paz en territorios",
      "Protocolos de trabajo artístico-comunitario con enfoque diferencial",
      "Guías pedagógicas para educación artística con enfoque de paz",
      "Análisis de expresiones culturales en contextos de transición",
      "Mapas de actores y organizaciones culturales transformadoras",
    ],
  },
  {
    id: 3,
    nombre: "Memorias, Identidades y Crítica",
    color: "#380A18",
    tint:  "#FEE8EF",
    accent:"#A0204A",
    campos: [
      "Patrimonio cultural material: bienes inmuebles, muebles y arqueológicos (BIC)",
      "Patrimonio cultural inmaterial: tradiciones, saberes, rituales y fiestas",
      "Patrimonio natural y diversidad biológica vinculada a la cultura",
      "Memoria histórica: conflicto armado, verdad, reparación y no repetición",
      "Identidades culturales regionales, locales y diaspóricas",
      "Historia del arte y la cultura colombiana: siglos XIX-XXI",
      "Crítica cultural, estudios culturales y teoría estética",
      "Lenguas nativas, diversidad lingüística y políticas de lenguas",
      "Archivos, colecciones y museos: gestión y democratización del acceso",
    ],
    prioridades: [
      "Salvaguardia del patrimonio cultural inmaterial en riesgo",
      "Investigación sobre memoria del conflicto armado con perspectiva comunitaria",
      "Identidades indígenas, afrocolombianas y ROM: reconocimiento y visibilización",
      "Archivos históricos en riesgo y digitalización del patrimonio documental",
      "Lenguas en peligro de extinción: revitalización y transmisión intergeneracional",
      "Patrimonio arqueológico: investigación, protección y difusión",
    ],
    enfos: [
      "Étnico diferencial (pueblos indígenas, NARP, ROM)",
      "Territorial (patrimonios locales, regionales y nacionales)",
      "Decolonial y epistemologías del sur",
      "Perspectiva de género y memoria de las mujeres",
      "Historia oral y memorias subalternas",
      "Biocultural (relación entre patrimonio natural y cultural)",
    ],
    metodologias: [
      { nombre:"Investigación documental y archivística", desc:"Análisis de fuentes primarias, archivos históricos, prensa, fotografía histórica y documentos oficiales" },
      { nombre:"Historia oral y etnobiografía", desc:"Entrevistas a profundidad, relatos de vida, recuperación de memorias en riesgo" },
      { nombre:"Etnografía del patrimonio", desc:"Observación de prácticas rituales, fiestas, tradiciones artesanales y saberes" },
      { nombre:"Análisis semiótico y de discurso", desc:"Lectura crítica de textos, imágenes, objetos y narrativas culturales" },
      { nombre:"Estudios de caso patrimonial", desc:"Análisis en profundidad de manifestaciones, bienes o sitios específicos" },
      { nombre:"Cartografía cultural y patrimonial", desc:"Mapeo participativo de lugares, bienes y prácticas de valor patrimonial" },
    ],
    resultados: [
      "Inventarios y registros del patrimonio cultural material e inmaterial",
      "Archivos digitales de memorias, testimonios y fuentes históricas",
      "Monografías, etnografías y estudios de caso patrimonial",
      "Documentales, piezas radiales y material audiovisual de memoria",
      "Protocolos de salvaguardia del patrimonio inmaterial",
      "Planes especiales de salvaguardia (PES) con comunidades",
      "Publicaciones académicas de historia del arte y cultura",
      "Guías de manejo del patrimonio arqueológico y arquitectónico",
    ],
  },
  {
    id: 4,
    nombre: "Gestión masiva de la Información",
    color: "#0A1A35",
    tint:  "#EEF3FC",
    accent:"#1A4A8A",
    campos: [
      "Estadísticas culturales nacionales, regionales y locales",
      "Sistemas de información cultural: SIPA, SINIC, SIARTES, SoyCultura",
      "Gobernanza de datos culturales: ciclo de vida, calidad y trazabilidad",
      "Interoperabilidad y estándares de datos del sector cultural",
      "Análisis de Big Data aplicado a la cultura y las artes",
      "Inteligencia artificial ética aplicada a la investigación cultural",
      "Bibliometría, cienciometría y mapas de conocimiento cultural",
      "Infraestructura tecnológica y capacidades digitales del MinCulturas",
    ],
    prioridades: [
      "Fortalecimiento del rol del MinCulturas en el Sistema Estadístico Nacional (SEN) — Ley 2335/2023",
      "Gobernanza de datos culturales: protección datos personales — Ley 1581/2012",
      "Interoperabilidad de sistemas SIPA, SINIC, SIARTES, SoyCultura y SIFO",
      "Indicadores culturales armonizados con estándares OCDE y UNESCO",
      "Datos abiertos del sector cultural: apertura, reutilización y visualización",
      "Madurez digital del MinCulturas: diagnóstico y hoja de ruta",
    ],
    enfos: [
      "Datos abiertos y principios FAIR (Findable, Accessible, Interoperable, Reusable)",
      "Protección de datos personales y privacidad",
      "IA ética y algoritmos responsables (UNESCO 2021, OCDE 2023)",
      "Estándares internacionales de estadísticas culturales",
      "Gobernanza participativa de la información",
      "Accesibilidad digital y lenguajes claros",
    ],
    metodologias: [
      { nombre:"Investigación cuantitativa y estadística", desc:"Diseño de encuestas, marcos muestrales, indicadores y series de tiempo" },
      { nombre:"Análisis de Big Data cultural", desc:"Procesamiento de grandes volúmenes de datos de plataformas digitales y sistemas del MinCulturas" },
      { nombre:"Minería de texto y PLN", desc:"Análisis computacional de textos, noticias, redes sociales y documentos institucionales" },
      { nombre:"Diseño y evaluación de sistemas de información", desc:"Arquitectura de datos, auditorías de calidad, evaluación de usabilidad" },
      { nombre:"Análisis de redes y grafos culturales", desc:"Mapeo de relaciones entre actores, instituciones y manifestaciones culturales" },
      { nombre:"Auditorías algorítmicas", desc:"Evaluación de sesgos, equidad y transparencia en modelos de IA aplicados a cultura" },
    ],
    resultados: [
      "Tableros de indicadores culturales (dashboards interactivos)",
      "Bases de datos estructuradas y documentadas con metadatos",
      "Reportes estadísticos del sector cultural colombiano",
      "Estándares de metadatos e interoperabilidad para sistemas del MinCulturas",
      "Protocolos de gobernanza de datos culturales",
      "Herramientas de visualización e inteligencia de datos culturales",
      "Evaluaciones de calidad y cobertura de sistemas de información",
    ],
  },
  {
    id: 5,
    nombre: "Prácticas, experiencias y relaciones culturales",
    color: "#0A2A2A",
    tint:  "#E8F8F8",
    accent:"#1A7070",
    campos: [
      "Consumo cultural: hábitos, preferencias y brechas de acceso",
      "Participación cultural: formas, motivaciones y barreras",
      "Públicos y audiencias de las artes y la cultura",
      "Relaciones interculturales, multiculturalismo y diálogo entre culturas",
      "Cultura y bienestar subjetivo, salud mental y calidad de vida",
      "Comunidades de práctica artística y redes culturales",
      "Ecología cultural, sostenibilidad y relaciones con el ambiente",
      "Mediación cultural y accesibilidad a las artes",
      "Voluntariado, emprendimiento y trabajo cultural comunitario",
    ],
    prioridades: [
      "Encuesta nacional de consumo y participación cultural (periodicidad regular)",
      "Participación cultural de grupos históricamente excluidos y territorios rurales",
      "Cultura y bienestar colectivo: medición de impactos en calidad de vida",
      "Sostenibilidad de prácticas culturales comunitarias ante presiones económicas",
      "Accesibilidad a las artes: personas con discapacidad, adultos mayores, primera infancia",
      "Redes y ecosistemas culturales locales: cartografía y fortalecimiento",
    ],
    enfos: [
      "Biocultural (cultura-naturaleza-territorio)",
      "Territorial (diversidad regional de prácticas)",
      "Diferencial (género, etnia, ciclo vital, discapacidad)",
      "Intersectorial (cultura-salud, cultura-educación, cultura-deporte)",
      "Perspectiva de derechos culturales",
      "Enfoque de capacidades (Amartya Sen, Martha Nussbaum)",
    ],
    metodologias: [
      { nombre:"Encuestas y estudios de consumo cultural", desc:"Diseño muestral representativo, cuestionarios estandarizados, comparabilidad temporal" },
      { nombre:"Etnografía de la experiencia cultural", desc:"Observación participante de eventos, festivales, talleres y espacios culturales" },
      { nombre:"Métodos mixtos", desc:"Triangulación de encuestas con grupos focales, entrevistas y observación" },
      { nombre:"Análisis de redes socioculturales", desc:"Mapeo de vínculos entre actores, organizaciones y manifestaciones culturales" },
      { nombre:"Observatorios de prácticas culturales", desc:"Monitoreo continuo de indicadores, tendencias y transformaciones en el sector" },
      { nombre:"Estudios de audiencias y públicos", desc:"Análisis de asistencia, motivaciones, satisfacción y barreras de acceso a la cultura" },
    ],
    resultados: [
      "Informes de participación y consumo cultural por territorios y poblaciones",
      "Mapas de prácticas culturales y ecosistemas culturales locales",
      "Análisis de públicos de artes escénicas, musicales, plásticas y patrimoniales",
      "Guías metodológicas para trabajo cultural comunitario",
      "Índices de bienestar cultural y calidad de vida",
      "Diagnósticos de accesibilidad cultural en municipios y territorios",
      "Recomendaciones para políticas de fomento a la participación cultural",
    ],
  },
  {
    id: 6,
    nombre: "Innovación Pública y Prospectiva",
    color: "#301500",
    tint:  "#FFF4E5",
    accent:"#C05820",
    campos: [
      "Tendencias globales en cultura, artes y gestión cultural pública",
      "Innovación en gestión cultural: nuevos modelos, herramientas y procesos",
      "Humanidades digitales y cultura digital: expresiones, plataformas y economías",
      "Prospectiva cultural: escenarios, futuros posibles y desafíos emergentes",
      "Laboratorios de innovación cultural: co-creación y experimentación",
      "Transferencia tecnológica y apropiación tecnológica en el sector cultural",
      "Cultura e inteligencia artificial: impactos, oportunidades y riesgos",
      "Agenda de investigación futura del MinCulturas 2025-2030",
    ],
    prioridades: [
      "Agenda digital cultural del MinCulturas: hojas de ruta y capacidades",
      "Laboratorio de innovación GEDII: diseño, metodología y primeras experiencias",
      "Prospectiva del PNC 2024-2038: escenarios a 2030 y 2038",
      "Cultura en la era de la inteligencia artificial: regulación, oportunidades y riesgos",
      "Humanidades digitales: nuevas formas de investigar la cultura con tecnología",
      "Transferencia de conocimiento: de la investigación a la política pública cultural",
    ],
    enfos: [
      "Prospectivo y de futuros (futures literacy)",
      "Innovación pública (gobierno abierto, co-diseño, experimentación)",
      "Tecnológico y digital (humanidades digitales, IA)",
      "Ecosistemas de conocimiento y redes de innovación",
      "Intersectorial (cultura-ciencia-tecnología-educación)",
      "Aprendizaje institucional y gestión del conocimiento",
    ],
    metodologias: [
      { nombre:"Foresight y prospectiva estratégica", desc:"Análisis de tendencias, escenarios, visión de futuros con expertos y comunidades" },
      { nombre:"Design thinking y co-diseño", desc:"Proceso centrado en usuarios para innovar en servicios y políticas culturales" },
      { nombre:"Living labs y laboratorios ciudadanos", desc:"Espacios de experimentación abierta y co-creación con actores culturales" },
      { nombre:"Investigación-acción en innovación pública", desc:"Ciclos de prototipado, prueba y mejora de intervenciones culturales" },
      { nombre:"Análisis de tendencias (trend analysis)", desc:"Monitoreo y análisis sistemático de cambios en el entorno cultural global" },
      { nombre:"Evaluación de impacto de innovaciones", desc:"Medición de resultados e impactos de nuevos modelos de gestión cultural" },
    ],
    resultados: [
      "Escenarios prospectivos para el sector cultural colombiano 2030-2038",
      "Prototipos y modelos de innovación en servicios y políticas culturales",
      "Guías de innovación pública aplicada a la gestión cultural",
      "Agendas de investigación e innovación del MinCulturas",
      "Publicaciones de divulgación digital y transmedia",
      "Informes de tendencias globales en cultura y artes",
      "Hoja de ruta para el laboratorio de innovación GEDII",
    ],
  },
];

/* PRIORIDADES TRANSVERSALES */
const TRANSVERSALES = [
  { nombre:"Enfoque de género e interseccionalidad", desc:"Toda investigación debe incorporar análisis de género, orientación sexual, identidad de género y sus intersecciones con etnia, clase, territorio y ciclo vital." },
  { nombre:"Enfoque diferencial étnico", desc:"Reconocimiento y valoración de los sistemas de conocimiento, lenguas, cosmovisiones y derechos específicos de pueblos indígenas, NARP, ROM y comunidades raizales y palenqueras." },
  { nombre:"Enfoque territorial", desc:"Las investigaciones deben leer los contextos geográficos, históricos, ecológicos y sociopolíticos del territorio como condición para producir conocimiento pertinente y útil." },
  { nombre:"Enfoque biocultural", desc:"Reconocimiento de la interdependencia entre diversidad biológica, cultural y lingüística, y su importancia para la sostenibilidad de la vida." },
  { nombre:"Derechos culturales", desc:"La investigación parte del reconocimiento de los derechos culturales como derechos humanos fundamentales, incluyendo el derecho a participar en la vida cultural, el acceso al patrimonio y la libertad de expresión." },
  { nombre:"Paz y reconciliación", desc:"Toda investigación debe contribuir a la construcción de paz, la no repetición de las violencias y la reparación simbólica de comunidades afectadas por el conflicto armado." },
  { nombre:"Diálogo de saberes", desc:"Las investigaciones articulan saberes académicos, comunitarios, artísticos y ancestrales en condiciones de reconocimiento mutuo y horizontalidad." },
  { nombre:"Ética de la investigación", desc:"Cumplimiento de protocolos de consentimiento previo libre e informado, protección de datos (Ley 1581/2012) y soberanía de la información de comunidades y territorios." },
];

/* LÍNEAS TRANSVERSALES (columna izquierda del diagrama) */
const LINEAS = [
  { id:"A", nombre:"Contexto y entorno cultural", desc:"Análisis de los marcos históricos, políticos, económicos y sociales que configuran el campo cultural en cada territorio." },
  { id:"B", nombre:"Actores, comunidades y sujetos", desc:"Identificación y caracterización de los actores del sector cultural: artistas, gestores, pueblos, comunidades, instituciones y redes." },
  { id:"C", nombre:"Procesos y transformaciones", desc:"Estudio de los procesos de creación, circulación, consumo, apropiación y transformación de las prácticas y bienes culturales." },
  { id:"D", nombre:"Resultados, impactos y aprendizajes", desc:"Evaluación de los cambios generados por las políticas, programas e intervenciones culturales en territorios y comunidades." },
  { id:"E", nombre:"Prospectiva e innovación", desc:"Exploración de tendencias emergentes, escenarios futuros y oportunidades de innovación en la gestión cultural pública." },
];

/* FASES DEL CICLO (se mantiene como segunda sección) */
const FASES = [
  {
    id:1, nombre:"Diseño y planificación", icono:"◈", color:"#2D1658", tint:"#EDE6FA",
    pregunta:"¿Qué investigamos y cómo?",
    descripcion:"Se define el problema de investigación, los objetivos, el enfoque metodológico y el plan de trabajo. Implica la revisión del estado del arte, la formulación de preguntas y la construcción del marco conceptual coherente con los principios del PNC y los enfoques diferenciales.",
    actividades:["Delimitación del problema y preguntas de investigación","Revisión de antecedentes y estado del arte","Selección del enfoque y diseño metodológico","Identificación de actores y territorios","Construcción del plan de trabajo y cronograma","Protocolo de consentimiento previo, libre e informado"],
    herramientas:["Árbol de problemas","Mapa de actores","Matriz metodológica","Protocolo de CPLI"],
    salidas:["Proyecto de investigación aprobado","Plan de trabajo","Protocolo ético firmado"],
  },
  {
    id:2, nombre:"Apropiación territorial", icono:"◉", color:"#063020", tint:"#E6F8F0",
    pregunta:"¿Con quiénes y desde dónde?",
    descripcion:"Proceso de acercamiento, diálogo y concertación con comunidades, pueblos, territorios y actores del sector cultural. Se construyen los acuerdos de trabajo conjunto, se reconoce el contexto biocultural y se articulan los saberes locales con la propuesta investigativa.",
    actividades:["Talleres de presentación y socialización con comunidades","Mapeo participativo del territorio cultural","Acuerdos de participación y co-investigación","Reconocimiento de autoridades y sabedores","Identificación de lugares sagrados y restricciones culturales"],
    herramientas:["Talleres comunitarios","Cartografía social","Recorridos territoriales","Entrevistas con líderes"],
    salidas:["Acuerdos de participación","Mapa biocultural","Agenda de trabajo concertada"],
  },
  {
    id:3, nombre:"Recolección de información", icono:"◎", color:"#0A1A35", tint:"#EEF3FC",
    pregunta:"¿Cómo levantamos los datos?",
    descripcion:"Aplicación de los instrumentos y técnicas seleccionadas para recopilar datos, testimonios, imágenes, sonidos, documentos y otras fuentes. Garantiza la coherencia con el enfoque diferencial y la protección de datos según la Ley 1581 de 2012.",
    actividades:["Aplicación de encuestas, entrevistas y grupos focales","Trabajo de campo etnográfico y observación participante","Recolección de fuentes documentales y archivísticas","Registro fotográfico, audiovisual y sonoro","Validación de instrumentos con actores clave"],
    herramientas:["Fichas de campo","Grabadora / cámara","Formularios digitales","Guías de entrevista"],
    salidas:["Bases de datos primarias","Archivos multimedia","Diarios de campo","Transcripciones"],
  },
  {
    id:4, nombre:"Análisis e interpretación", icono:"◍", color:"#200A40", tint:"#F3EEFE",
    pregunta:"¿Qué nos dicen los datos?",
    descripcion:"Procesamiento, codificación, análisis e interpretación de la información recolectada. Integra perspectivas cuantitativas y cualitativas en diálogo con los marcos teóricos y los saberes de las comunidades, produciendo hallazgos rigurosos y pertinentes.",
    actividades:["Organización y depuración de bases de datos","Codificación temática y análisis de contenido","Análisis estadístico descriptivo e inferencial","Triangulación metodológica de fuentes","Construcción de categorías analíticas con actores","Uso responsable de IA para análisis de texto (Principio 8 GEDII)"],
    herramientas:["Atlas.ti / NVivo","R / Python / SPSS","Matrices de análisis","Nube de palabras"],
    salidas:["Matrices de análisis","Tablas estadísticas","Memos analíticos","Hallazgos preliminares"],
  },
  {
    id:5, nombre:"Validación y diálogo", icono:"◐", color:"#380A18", tint:"#FEE8EF",
    pregunta:"¿Reconocemos lo que encontramos?",
    descripcion:"Los hallazgos preliminares son devueltos a las comunidades, actores y territorios para su validación, retroalimentación y enriquecimiento. Este proceso garantiza que los resultados respondan a realidades concretas y fortalece la legitimidad del conocimiento producido.",
    actividades:["Talleres de devolución con comunidades","Ajuste de hallazgos según retroalimentación","Validación con expertos y pares académicos","Integración de saberes y perspectivas no recogidas","Revisión final del rigor técnico y pertinencia ética"],
    herramientas:["Talleres de validación","Panel de expertos","Matrices de verificación","Revisión de pares"],
    salidas:["Hallazgos validados","Informe de retroalimentación","Ajustes metodológicos documentados"],
  },
  {
    id:6, nombre:"Comunicación y memoria", icono:"◑", color:"#3A1A00", tint:"#FFF5E8",
    pregunta:"¿Cómo circulamos y preservamos?",
    descripcion:"Producción de los resultados finales y su circulación responsable a través de formatos accesibles y pertinentes para distintos públicos y territorios. Incluye la gestión del archivo y la gobernanza de los datos para preservar la memoria institucional y comunitaria.",
    actividades:["Redacción de informe final con estándares técnicos","Producción de materiales de divulgación (fichas, videos, piezas gráficas)","Publicación abierta y gestión de datos FAIR","Depósito en repositorio institucional GEDII","Devolución de archivos a comunidades de origen","Registro en el Sistema Estadístico Nacional"],
    herramientas:["Repositorio GEDII","Plantillas institucionales","Guía de lenguaje claro","Plataformas de datos abiertos"],
    salidas:["Informe final","Materiales de divulgación","Dataset abierto","Ficha de metadatos"],
  },
];

/* ──────────────────────────────────────────────
   SUBCOMPONENTES
   ────────────────────────────────────────────── */

function Tag({ children, color }) {
  return (
    <span style={{
      display:"inline-block", background:`${color}22`, color, border:`1px solid ${color}44`,
      borderRadius:20, padding:"2px 10px", fontSize:10.5, fontWeight:600,
      letterSpacing:"0.3px", marginRight:4, marginBottom:4, whiteSpace:"nowrap",
    }}>{children}</span>
  );
}

function SecLabel({ children }) {
  return (
    <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.45)", textTransform:"uppercase", letterSpacing:"1px", marginBottom:8, marginTop:16 }}>
      {children}
    </div>
  );
}

function SecLabelDark({ children }) {
  return (
    <div style={{ fontSize:10, fontWeight:700, color:P.soft, textTransform:"uppercase", letterSpacing:"1px", marginBottom:8 }}>
      {children}
    </div>
  );
}

/* Panel expandido de un Área */
function AreaPanel({ area }) {
  return (
    <div style={{ animation:"fadeUp 0.3s ease both" }}>
      {/* Header */}
      <div style={{
        background: area.color, borderRadius:"14px 14px 0 0",
        padding:"24px 32px 20px",
        display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:16,
      }}>
        <div>
          <div style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.45)", textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:6 }}>
            Área {area.id} de 6
          </div>
          <h2 style={{
            margin:0, fontFamily:"'Barlow Condensed',Impact,sans-serif",
            fontWeight:900, fontSize:"clamp(22px,2.5vw,34px)", color:P.white,
            textTransform:"uppercase", lineHeight:1,
          }}>{area.nombre}</h2>
        </div>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          <div style={{ background:"rgba(255,255,255,0.1)", borderRadius:8, padding:"8px 16px", textAlign:"center" }}>
            <div style={{ fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:22, color:P.accent, lineHeight:1 }}>{area.campos.length}</div>
            <div style={{ fontSize:10, color:"rgba(255,255,255,0.6)", marginTop:2 }}>Campos</div>
          </div>
          <div style={{ background:"rgba(255,255,255,0.1)", borderRadius:8, padding:"8px 16px", textAlign:"center" }}>
            <div style={{ fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:22, color:P.accent, lineHeight:1 }}>{area.metodologias.length}</div>
            <div style={{ fontSize:10, color:"rgba(255,255,255,0.6)", marginTop:2 }}>Metodologías</div>
          </div>
        </div>
      </div>

      {/* Cuerpo 4 columnas */}
      <div style={{
        display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0,
        background:P.white, border:`1px solid ${area.color}33`, borderTop:"none",
        borderRadius:"0 0 14px 14px", overflow:"hidden",
      }} className="area-grid-4">

        {/* Campos de investigación */}
        <div style={{ padding:"20px 18px", borderRight:`1px solid ${P.tint}` }}>
          <SecLabelDark>Campos de investigación</SecLabelDark>
          <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:7 }}>
            {area.campos.map((c,i) => (
              <li key={i} style={{ fontSize:12, color:P.ink, lineHeight:1.5, paddingLeft:14, position:"relative" }}>
                <span style={{ position:"absolute", left:0, color:area.accent, fontWeight:700, fontSize:11 }}>→</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Prioridades + Enfoques */}
        <div style={{ padding:"20px 18px", borderRight:`1px solid ${P.tint}` }}>
          <SecLabelDark>Prioridades de investigación</SecLabelDark>
          <ul style={{ listStyle:"none", padding:0, margin:"0 0 16px 0", display:"flex", flexDirection:"column", gap:6 }}>
            {area.prioridades.map((p,i) => (
              <li key={i} style={{ fontSize:11.5, color:P.ink, lineHeight:1.5, paddingLeft:14, position:"relative" }}>
                <span style={{ position:"absolute", left:0, color:P.accent, fontSize:11 }}>◆</span>
                {p}
              </li>
            ))}
          </ul>
          <SecLabelDark>Enfoques (En-fos)</SecLabelDark>
          <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
            {area.enfos.map((e,i) => <Tag key={i} color={area.accent}>{e}</Tag>)}
          </div>
        </div>

        {/* Metodologías */}
        <div style={{ padding:"20px 18px", borderRight:`1px solid ${P.tint}` }}>
          <SecLabelDark>Metodologías sugeridas</SecLabelDark>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {area.metodologias.map((m,i) => (
              <div key={i} style={{ background:P.bg, borderRadius:8, padding:"10px 12px", borderLeft:`3px solid ${area.accent}` }}>
                <div style={{ fontSize:12, fontWeight:700, color:P.ink, marginBottom:3 }}>{m.nombre}</div>
                <div style={{ fontSize:11, color:P.soft, lineHeight:1.45 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Resultados */}
        <div style={{ padding:"20px 18px" }}>
          <SecLabelDark>Resultados esperados</SecLabelDark>
          <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:7 }}>
            {area.resultados.map((r,i) => (
              <li key={i} style={{
                fontSize:12, color:P.ink, lineHeight:1.5,
                padding:"7px 10px 7px 12px", borderRadius:6,
                background:i%2===0 ? P.bg : "transparent",
              }}>
                <span style={{ color:area.accent, marginRight:6, fontWeight:700 }}>✓</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* Panel de fase del ciclo */
function FasePanel({ fase }) {
  return (
    <div className="fase-panel-grid" style={{
      background: fase.color, borderRadius:14, padding:"24px 28px",
      display:"grid", gridTemplateColumns:"2fr 1.5fr 1fr", gap:20,
      animation:"fadeUp 0.3s ease both",
    }}>
      <div>
        <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.45)", textTransform:"uppercase", letterSpacing:"1px", marginBottom:8 }}>Fase {fase.id} de 6</div>
        <h3 style={{ margin:"0 0 4px", fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:"clamp(18px,1.8vw,26px)", color:P.white, textTransform:"uppercase", lineHeight:1 }}>{fase.nombre}</h3>
        <p style={{ fontSize:12.5, color:"rgba(255,255,255,0.65)", lineHeight:1.3, margin:"0 0 10px", fontStyle:"italic" }}>{fase.pregunta}</p>
        <p style={{ fontSize:12.5, color:"rgba(255,255,255,0.85)", lineHeight:1.65, margin:0 }}>{fase.descripcion}</p>
        <div style={{ marginTop:14 }}>
          <SecLabel>Herramientas sugeridas</SecLabel>
          <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
            {fase.herramientas.map((h,i) => (
              <span key={i} style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:20, padding:"3px 10px", fontSize:11, color:"rgba(255,255,255,0.88)" }}>{h}</span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <SecLabel>Actividades clave</SecLabel>
        <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:6 }}>
          {fase.actividades.map((a,i) => (
            <li key={i} style={{ fontSize:12, color:"rgba(255,255,255,0.82)", lineHeight:1.45, paddingLeft:14, position:"relative" }}>
              <span style={{ position:"absolute", left:0, color:P.accent, fontSize:10 }}>→</span>{a}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SecLabel>Productos / Salidas</SecLabel>
        {fase.salidas.map((s,i) => (
          <div key={i} style={{ display:"flex", gap:8, marginBottom:8 }}>
            <span style={{ color:P.accent, fontSize:14, lineHeight:1, flexShrink:0, marginTop:2 }}>◆</span>
            <span style={{ fontSize:12, color:"rgba(255,255,255,0.85)", lineHeight:1.45 }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   COMPONENTE PRINCIPAL
   ══════════════════════════════════════════════════════════ */
export default function ArquitecturaMetodologica() {
  const [tabActiva,   setTabActiva]   = useState("areas");
  const [areaActiva,  setAreaActiva]  = useState(1);
  const [faseActiva,  setFaseActiva]  = useState(1);
  const [lineaActiva, setLineaActiva] = useState(null);

  const area = AREAS.find(a => a.id === areaActiva);
  const fase = FASES.find(f => f.id === faseActiva);

  return (
    <div style={{ fontFamily:"'Barlow','Segoe UI',system-ui,sans-serif", background:P.bg, minHeight:"100vh" }}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .arq-tab { border:none; cursor:pointer; font-family:inherit; transition:all 0.18s ease; }
        .arq-tab:hover { opacity:0.85; }
        .area-btn { border:none; cursor:pointer; font-family:inherit; transition:all 0.2s ease; }
        .area-btn:hover { filter:brightness(1.05); transform:translateY(-1px); }
        .area-grid-4 { grid-template-columns: repeat(4,1fr); }
        .fase-panel-grid { grid-template-columns: 2fr 1.5fr 1fr; }
        .area-sel-grid { display:grid; grid-template-columns: repeat(6,1fr); gap:8px; }
        .fase-sel-grid { display:grid; grid-template-columns: repeat(6,1fr); gap:8px; }
        @media (max-width: 1200px) {
          .area-sel-grid { grid-template-columns: repeat(3,1fr) !important; }
          .fase-sel-grid  { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 1100px) {
          .area-grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 700px) {
          .area-grid-4 { grid-template-columns: 1fr !important; }
          .fase-panel-grid { grid-template-columns: 1fr !important; }
          .area-sel-grid { grid-template-columns: repeat(2,1fr) !important; }
          .fase-sel-grid  { grid-template-columns: repeat(2,1fr) !important; }
        }
        .trans-card:hover { background: ${P.tint} !important; }
        .arq-matrix-tbl tr:hover td { background: rgba(74,46,138,0.04); }
      `}</style>

      {/* ═══ HERO ═══ */}
      <div style={{
        background:`linear-gradient(135deg, ${P.ink} 0%, ${P.deep} 50%, #3D2880 100%)`,
        padding:"44px 40px 36px", position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", right:-60, top:-60, width:320, height:320, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.06)" }}/>
        <div style={{ position:"absolute", right:40, top:30, width:160, height:160, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.08)" }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <div style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.45)", textTransform:"uppercase", letterSpacing:"2px", marginBottom:10 }}>
            Sistema GEDII · Marco metodológico
          </div>
          <h1 style={{ margin:"0 0 14px", fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:"clamp(28px,4vw,50px)", color:P.white, textTransform:"uppercase", lineHeight:0.95, letterSpacing:"-0.5px" }}>
            Arquitectura<br/><span style={{ color:P.accent }}>Metodológica</span>
          </h1>
          <p style={{ fontSize:"clamp(12px,1.1vw,14px)", color:"rgba(255,255,255,0.7)", lineHeight:1.7, margin:"0 0 24px", maxWidth:660 }}>
            Marco integrado para el diseño, ejecución y comunicación de investigaciones culturales del
            Ministerio de las Culturas, las Artes y los Saberes. Articula el rigor técnico con el diálogo
            de saberes, el enfoque territorial y los principios del Plan Nacional de Cultura 2024–2038.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {[["6","Áreas de investigación"],["8","Enfoques metodológicos"],["5","Líneas transversales"],["8","Principios éticos"],["PNC","2024–2038"]].map(([v,l]) => (
              <div key={v} style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.16)", borderRadius:8, padding:"7px 14px", display:"flex", alignItems:"center", gap:9 }}>
                <span style={{ fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:20, color:P.accent, lineHeight:1 }}>{v}</span>
                <span style={{ fontSize:11, color:"rgba(255,255,255,0.65)", lineHeight:1.3 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ TABS ═══ */}
      <div style={{ background:P.white, borderBottom:`1px solid ${P.tint}`, padding:"0 40px", display:"flex", gap:0, overflowX:"auto" }}>
        {[
          { key:"areas",    label:"Áreas de investigación" },
          { key:"lineas",   label:"Líneas transversales" },
          { key:"ciclo",    label:"Ciclo metodológico" },
          { key:"transv",   label:"Prioridades transversales" },
        ].map(t => (
          <button key={t.key} className="arq-tab"
            onClick={() => setTabActiva(t.key)}
            style={{ padding:"15px 22px", fontSize:13, fontWeight:tabActiva===t.key?700:500, color:tabActiva===t.key?P.ink:P.soft, background:"none", borderBottom:`3px solid ${tabActiva===t.key?P.accent:"transparent"}`, whiteSpace:"nowrap" }}
          >{t.label}</button>
        ))}
      </div>

      {/* ═══ TAB 1: ÁREAS DE INVESTIGACIÓN ═══ */}
      {tabActiva === "areas" && (
        <div style={{ padding:"28px 36px 48px" }}>
          {/* Encabezado */}
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:11, fontWeight:700, color:P.soft, textTransform:"uppercase", letterSpacing:"1px", marginBottom:5 }}>
              Estructura principal · 6 áreas
            </div>
            <h2 style={{ margin:0, fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:"clamp(18px,2vw,28px)", color:P.ink, textTransform:"uppercase", lineHeight:1 }}>
              Áreas y Campos de Investigación Cultural
            </h2>
            <p style={{ margin:"6px 0 0", fontSize:12.5, color:P.soft, lineHeight:1.6 }}>
              Selecciona un área para ver todos sus campos, prioridades, enfoques metodológicos y resultados esperados.
            </p>
          </div>

          {/* Selector de áreas — chips grandes */}
          <div className="area-sel-grid" style={{ marginBottom:20 }}>
            {AREAS.map(a => (
              <button key={a.id} className="area-btn"
                onClick={() => setAreaActiva(a.id)}
                style={{
                  padding:"14px 10px 12px", borderRadius:10, textAlign:"left",
                  background: areaActiva===a.id ? a.color : P.white,
                  border:`2px solid ${areaActiva===a.id ? a.color : P.tint}`,
                  boxShadow: areaActiva===a.id ? `0 4px 16px ${a.color}44` : "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ fontSize:20, marginBottom:6, color: areaActiva===a.id ? "rgba(255,255,255,0.7)" : a.accent }}>{a.id}</div>
                <div style={{ fontSize:11, fontWeight:700, color: areaActiva===a.id ? P.white : P.ink, lineHeight:1.3 }}>{a.nombre}</div>
                <div style={{ fontSize:10, color: areaActiva===a.id ? "rgba(255,255,255,0.5)" : P.soft, marginTop:4 }}>{a.campos.length} campos</div>
              </button>
            ))}
          </div>

          {/* Panel del área seleccionada */}
          {area && <AreaPanel key={area.id} area={area} />}
        </div>
      )}

      {/* ═══ TAB 2: LÍNEAS TRANSVERSALES ═══ */}
      {tabActiva === "lineas" && (
        <div style={{ padding:"28px 36px 48px" }}>
          <div style={{ marginBottom:24 }}>
            <div style={{ fontSize:11, fontWeight:700, color:P.soft, textTransform:"uppercase", letterSpacing:"1px", marginBottom:5 }}>
              Estructura cruzada · 5 líneas
            </div>
            <h2 style={{ margin:0, fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:"clamp(18px,2vw,28px)", color:P.ink, textTransform:"uppercase", lineHeight:1 }}>
              Líneas Transversales de Investigación
            </h2>
            <p style={{ margin:"6px 0 0", fontSize:12.5, color:P.soft, lineHeight:1.6 }}>
              Dimensiones analíticas que articulan horizontalmente las 6 áreas de investigación.
            </p>
          </div>

          {/* Líneas */}
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {LINEAS.map(l => (
              <div key={l.id}
                onClick={() => setLineaActiva(lineaActiva===l.id ? null : l.id)}
                style={{
                  background:P.white, borderRadius:12, padding:"18px 22px",
                  border:`1.5px solid ${lineaActiva===l.id ? P.mid : P.tint}`,
                  cursor:"pointer", transition:"all 0.18s",
                  boxShadow: lineaActiva===l.id ? `0 3px 14px ${P.mid}22` : "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display:"flex", alignItems:"flex-start", gap:14 }}>
                  <div style={{ width:36, height:36, borderRadius:"50%", background: lineaActiva===l.id ? P.mid : P.tint, color: lineaActiva===l.id ? P.white : P.mid, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:18, flexShrink:0 }}>{l.id}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:700, fontSize:14, color: lineaActiva===l.id ? P.ink : P.deep, marginBottom:4 }}>{l.nombre}</div>
                    <div style={{ fontSize:12.5, color:P.soft, lineHeight:1.6 }}>{l.desc}</div>
                  </div>
                  <div style={{ color:P.soft, fontSize:18, flexShrink:0, marginTop:4 }}>{lineaActiva===l.id ? "▲" : "▼"}</div>
                </div>

                {lineaActiva===l.id && (
                  <div style={{ marginTop:18, paddingTop:16, borderTop:`1px solid ${P.tint}`, animation:"fadeUp 0.2s ease both" }}>
                    <div style={{ fontSize:11, fontWeight:700, color:P.soft, textTransform:"uppercase", letterSpacing:"1px", marginBottom:12 }}>
                      Cómo se expresa en cada área de investigación
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:10 }}>
                      {AREAS.map(a => (
                        <div key={a.id} style={{ background:P.bg, borderRadius:8, padding:"10px 14px", borderLeft:`3px solid ${a.accent}` }}>
                          <div style={{ fontSize:11, fontWeight:700, color:P.ink, marginBottom:3 }}>{a.nombre}</div>
                          <div style={{ fontSize:11, color:P.soft, lineHeight:1.45 }}>
                            {l.id==="A" && "Análisis del contexto histórico, político y socioeconómico del campo cultural correspondiente."}
                            {l.id==="B" && "Mapeo y caracterización de actores, comunidades, redes e instituciones propias de cada área."}
                            {l.id==="C" && "Estudio de los procesos de creación, circulación, consumo y apropiación específicos del área."}
                            {l.id==="D" && "Evaluación de cambios generados por políticas e intervenciones en cada campo cultural."}
                            {l.id==="E" && "Identificación de tendencias emergentes y escenarios futuros propios de cada área."}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Diagrama de cruce */}
          <div style={{ marginTop:32, background:P.white, borderRadius:14, padding:"24px 28px", border:`1px solid ${P.tint}` }}>
            <div style={{ fontSize:11, fontWeight:700, color:P.soft, textTransform:"uppercase", letterSpacing:"1px", marginBottom:16 }}>
              Matriz de articulación — Líneas × Áreas
            </div>
            <div style={{ overflowX:"auto" }}>
              <table className="arq-matrix-tbl" style={{ borderCollapse:"collapse", width:"100%" }}>
                <thead>
                  <tr style={{ background:P.ink }}>
                    <th style={{ padding:"10px 14px", textAlign:"left", fontSize:11, fontWeight:600, color:"rgba(255,255,255,0.6)", letterSpacing:"0.5px", minWidth:160 }}>
                      Línea transversal
                    </th>
                    {AREAS.map(a => (
                      <th key={a.id} style={{ padding:"10px 10px", textAlign:"center", fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.75)", minWidth:90 }}>
                        {a.nombre.split(" ").slice(0,2).join(" ")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {LINEAS.map(l => (
                    <tr key={l.id} style={{ borderBottom:`1px solid ${P.tint}` }}>
                      <td style={{ padding:"10px 14px", fontSize:12.5, color:P.ink, fontWeight:600, lineHeight:1.3 }}>{l.id}. {l.nombre}</td>
                      {AREAS.map(a => (
                        <td key={a.id} style={{ padding:"10px", textAlign:"center" }}>
                          <span style={{ width:12, height:12, borderRadius:"50%", background:a.color, display:"inline-block", opacity:0.75 }}/>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ═══ TAB 3: CICLO METODOLÓGICO ═══ */}
      {tabActiva === "ciclo" && (
        <div style={{ padding:"28px 36px 48px" }}>
          <div style={{ marginBottom:22 }}>
            <div style={{ fontSize:11, fontWeight:700, color:P.soft, textTransform:"uppercase", letterSpacing:"1px", marginBottom:5 }}>
              Proceso completo · 6 fases
            </div>
            <h2 style={{ margin:0, fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:"clamp(18px,2vw,28px)", color:P.ink, textTransform:"uppercase", lineHeight:1 }}>
              Ciclo de investigación cultural
            </h2>
          </div>

          {/* Selector fases */}
          <div className="fase-sel-grid" style={{ marginBottom:16 }}>
            {FASES.map(f => (
              <button key={f.id} className="area-btn"
                onClick={() => setFaseActiva(f.id)}
                style={{
                  padding:"12px 8px 10px", borderRadius:10, textAlign:"center",
                  background: faseActiva===f.id ? f.color : P.white,
                  border:`2px solid ${faseActiva===f.id ? f.color : P.tint}`,
                  boxShadow: faseActiva===f.id ? `0 4px 14px ${f.color}44` : "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ fontSize:22, color: faseActiva===f.id ? "rgba(255,255,255,0.8)" : f.color }}>{f.icono}</div>
                <div style={{ fontSize:10, fontWeight:700, color: faseActiva===f.id ? "rgba(255,255,255,0.55)" : P.soft, marginTop:4, textTransform:"uppercase", letterSpacing:"0.4px" }}>Fase {f.id}</div>
                <div style={{ fontSize:11, fontWeight:700, color: faseActiva===f.id ? P.white : P.ink, lineHeight:1.3, marginTop:3 }}>{f.nombre}</div>
              </button>
            ))}
          </div>

          {fase && <FasePanel key={fase.id} fase={fase} />}

          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:14 }}>
            <button onClick={() => setFaseActiva(f => Math.max(1,f-1))} disabled={faseActiva===1}
              style={{ background:"none", border:`1.5px solid ${faseActiva===1?"#E4DFF4":P.mid}`, borderRadius:8, padding:"7px 16px", fontSize:12.5, fontWeight:600, color:faseActiva===1?"#C0B8D8":P.mid, cursor:faseActiva===1?"default":"pointer" }}>
              ← Fase anterior
            </button>
            <div style={{ display:"flex", gap:5 }}>
              {FASES.map(f => (
                <button key={f.id} onClick={() => setFaseActiva(f.id)}
                  style={{ width:9, height:9, borderRadius:"50%", border:"none", background:faseActiva===f.id?P.accent:"#D0C8E8", cursor:"pointer", padding:0, transform:faseActiva===f.id?"scale(1.4)":"scale(1)", transition:"all 0.18s" }}/>
              ))}
            </div>
            <button onClick={() => setFaseActiva(f => Math.min(6,f+1))} disabled={faseActiva===6}
              style={{ background:"none", border:`1.5px solid ${faseActiva===6?"#E4DFF4":P.mid}`, borderRadius:8, padding:"7px 16px", fontSize:12.5, fontWeight:600, color:faseActiva===6?"#C0B8D8":P.mid, cursor:faseActiva===6?"default":"pointer" }}>
              Siguiente fase →
            </button>
          </div>
        </div>
      )}

      {/* ═══ TAB 4: PRIORIDADES TRANSVERSALES ═══ */}
      {tabActiva === "transv" && (
        <div style={{ padding:"28px 36px 48px" }}>
          <div style={{ marginBottom:24 }}>
            <div style={{ fontSize:11, fontWeight:700, color:P.soft, textTransform:"uppercase", letterSpacing:"1px", marginBottom:5 }}>
              Marco ético-político · 8 prioridades
            </div>
            <h2 style={{ margin:0, fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:"clamp(18px,2vw,28px)", color:P.ink, textTransform:"uppercase", lineHeight:1 }}>
              Prioridades Transversales de Investigación
            </h2>
            <p style={{ margin:"6px 0 0", fontSize:12.5, color:P.soft, lineHeight:1.6 }}>
              Condiciones ético-políticas que deben estar presentes en todas las investigaciones del GEDII,
              con independencia del área temática o la metodología seleccionada. Articulan los principios del
              PNC 2024-2038 con los estándares internacionales de derechos humanos y ética de la investigación.
            </p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:14 }}>
            {TRANSVERSALES.map((t,i) => (
              <div key={i} className="trans-card" style={{
                background:P.white, borderRadius:12, padding:"20px 22px",
                border:`1px solid ${P.tint}`,
                borderLeft:`4px solid ${AREAS[i%6].accent}`,
                transition:"background 0.18s",
                display:"flex", gap:14,
              }}>
                <div style={{ width:36, height:36, borderRadius:8, background:P.tint, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:20, color:P.mid, flexShrink:0 }}>
                  {i+1}
                </div>
                <div>
                  <div style={{ fontSize:13.5, fontWeight:700, color:P.ink, marginBottom:6 }}>{t.nombre}</div>
                  <div style={{ fontSize:12.5, color:P.soft, lineHeight:1.65 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Relación con áreas */}
          <div style={{ marginTop:32, background:P.ink, borderRadius:14, padding:"24px 28px" }}>
            <div style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.45)", textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:16 }}>
              ¿Cómo se aplican a las áreas?
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
              {AREAS.map(a => (
                <div key={a.id} style={{ background:"rgba(255,255,255,0.07)", borderRadius:10, padding:"14px 16px", borderLeft:`3px solid ${a.accent}` }}>
                  <div style={{ fontSize:12, fontWeight:700, color:P.white, marginBottom:6 }}>{a.nombre}</div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.6)", lineHeight:1.5 }}>
                    Las {TRANSVERSALES.length} prioridades transversales orientan el diseño, la recolección, el análisis y la divulgación de toda investigación enmarcada en esta área.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
