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
    tipo: "detalle",
    descripcion: "La Experimentación, Lenguajes y Estética como campo de investigación cultural se ocupa del estudio del arte en sí mismo: sus técnicas, procesos creativos, lenguajes formales y fundamentos estéticos a través de todas las disciplinas artísticas. No investiga el arte en función de sus efectos sociales o políticos, sino que indaga en la naturaleza del hacer, el percibir y el interpretar la obra como formas legítimas de producción de conocimiento. Articula tres aproximaciones metodológicas: la práctica y el proceso creativo como método de investigación, la experiencia estética como objeto de análisis fenomenológicos en cualquier disciplina artística, y la hermenéutica como vía para comprender obras, lenguajes y trayectorias de autor.",
    fin: "Producir conocimiento sobre las técnicas, estéticas, lenguajes y teorías del arte a través de la investigación en y desde la práctica creativa, la experiencia estética y la interpretación crítica de obras y trayectorias artísticas en cualquier disciplina.",
    metodologiasSombrilla: [
      {
        num: 1,
        nombre: "Investigación Basada en la Práctica e Investigación + Creación",
        desc: "estudios en taller, experimentación material, prototipado artístico, creación como método de conocimiento, residencias, iteración técnica.",
      },
      {
        num: 2,
        nombre: "Fenomenología y Estudios de la Experiencia Estética",
        desc: "experiencia perceptiva en cualquier disciplina artística, estudios situados, recepción estética, arte relacional, investigación somática, análisis sensorial de obra.",
      },
      {
        num: 3,
        nombre: "Hermenéutica y Estudios de Autor, Obra y Trayectoria",
        desc: "análisis de obra, estudios biográficos y de trayectoria artística, crítica genética, análisis de lenguajes y estilos, autoetnografía artística, estudio de poéticas personales.",
      },
    ],
    resultados: [
      "Obras, dispositivos artísticos y prototipos creativos con memoria investigativa.",
      "Bitácoras de proceso, catálogos razonados y publicaciones académico-artísticas derivadas de la práctica.",
      "Estudios fenomenológicos y análisis de experiencia estética en artes visuales, sonoras, literarias, digitales y escénicas.",
      "Monografías, estudios de obra y análisis de trayectorias y poéticas de autor.",
      "Marcos teóricos y conceptuales sobre lenguajes artísticos contemporáneos en el contexto colombiano, otros.",
    ],
  },
  {
    id: 2,
    nombre: "Transformación social y agencia cultural",
    color: "#063020",
    tint:  "#E6F8F0",
    accent:"#1F7A45",
    tipo: "detalle",
    descripcion: "Transformación Social y Agencia Cultural es el campo que investiga el papel de la cultura y las artes como fuerzas activas de cambio en el tejido social colombiano. Su objeto de estudio son los procesos mediante los cuales comunidades, organizaciones y territorios se transforman a través de prácticas culturales participativas, creación colectiva y pedagogías críticas. A diferencia de otros campos, no separa la investigación de la intervención: aquí el conocimiento se produce en el hacer conjunto con las comunidades. Se articula sobre tres ejes metodológicos: la investigación-acción participativa como marco de co-producción de saber, la Investigación + Creación como apuesta artístico-comunitaria que reconoce el arte como motor de transformación social, y las pedagogías culturales como vía para formar agentes de cambio en los territorios.",
    fin: "Generar conocimiento situado sobre los procesos culturales que modifican dinámicas de convivencia, cohesión social y agenciamiento ciudadano en territorios específicos, a través de metodologías participativas, creación colectiva y pedagogías críticas que involucran activamente a las comunidades como sujetos de investigación y transformación.",
    metodologiasSombrilla: [
      {
        num: 1,
        nombre: "Investigación-Acción Participativa (IAP)",
        desc: "procesos investigativos liderados con y desde comunidades; diagnósticos participativos, cartografías sociales, sistematización de experiencias comunitarias, investigación en territorios de conflicto y posconflicto, organizaciones culturales de base.",
      },
      {
        num: 2,
        nombre: "Investigación + Creación (I+C)",
        desc: "procesos artísticos como método de transformación social, creación colectiva en territorios, arte comunitario, muralismo y arte público participativo, teatro del oprimido, música y danza como herramientas de cohesión social, residencias artísticas con impacto territorial.",
      },
      {
        num: 3,
        nombre: "Pedagogías Culturales y Educación Popular",
        desc: "mediación cultural comunitaria, educación no formal desde las artes, metodologías de educación popular (Freire), formación de agentes culturales locales, dispositivos pedagógicos para la convivencia, cultura de paz y reconciliación.",
      },
    ],
    resultados: [
      "Sistematizaciones de experiencias y cartografías sociales derivadas de procesos de investigación-acción con comunidades.",
      "Cajas de herramientas (toolkits) culturales, dispositivos pedagógicos y guías metodológicas para la transformación social desde las artes.",
      "Obras, prototipos y procesos de creación colectiva con memoria investigativa e impacto territorial documentado.",
      "Publicaciones académicas, ensayos críticos e informes de impacto sobre cultura, convivencia y cohesión social en contextos colombianos, otros.",
    ],
  },
  {
    id: 3,
    nombre: "Memorias, Identidades y Crítica",
    color: "#380A18",
    tint:  "#FEE8EF",
    accent:"#A0204A",
    tipo: "detalle",
    descripcion: "Memorias, Identidades y Crítica es el campo que investiga los procesos mediante los cuales comunidades, grupos poblacionales y territorios construyen, disputan y transmiten sus relatos culturales. Su objeto de estudio son las narrativas excluidas, los archivos de memoria, las identidades en tensión y los sistemas de significación propios de grupos históricamente marginados. Parte de una postura epistemológica comprometida: no investiga sobre las comunidades sino con ellas, reconociendo sus saberes como fuentes legítimas de conocimiento. Articula la recuperación de archivos y memorias, la crítica decolonial e intercultural, y el análisis de representaciones e identidades como vías para sustentar procesos de reparación simbólica y soberanía cultural en Colombia.",
    fin: "Investigar y visibilizar las narrativas, memorias e identidades de grupos poblacionales excluidos o silenciados, generando conocimiento crítico que sustente procesos de reparación simbólica, reconocimiento cultural y soberanía epistémica en el contexto colombiano.",
    metodologiasSombrilla: [
      {
        num: 1,
        nombre: "Arqueología de la Memoria y Estudios del Archivo",
        desc: "memoria oral y escrita, archivos comunitarios, recuperación de narrativas silenciadas, historia cultural desde abajo, archivos digitales, patrimonio documental de grupos excluidos.",
      },
      {
        num: 2,
        nombre: "Epistemologías del Sur, Decoloniales e Interculturales",
        desc: "pensamiento decolonial, soberanía cultural, saberes propios de comunidades étnicas y rurales, crítica a la colonialidad del saber, interculturalidad crítica.",
      },
      {
        num: 3,
        nombre: "Crítica Cultural y Estudios de Identidad",
        desc: "análisis crítico de representaciones, estudios de género, raza y territorio como categorías culturales, identidades en disputa, etnografía crítica, estudios culturales aplicados a grupos poblacionales.",
      },
    ],
    resultados: [
      "Archivos de memoria oral y escrita, guiones museológicos y dispositivos de preservación documental comunitaria.",
      "Monografías etnográficas críticas, ensayos y marcos teóricos desde perspectivas decoloniales e interculturales.",
      "Análisis de representaciones culturales, estudios de identidades en disputa y cartografías simbólicas de grupos poblacionales.",
      "Series documentales, publicaciones académicas y dispositivos artísticos que materialicen procesos de reparación y soberanía cultural, otros.",
    ],
  },
  {
    id: 4,
    nombre: "Gestión masiva de la información",
    color: "#0A1A35",
    tint:  "#EEF3FC",
    accent:"#1A4A8A",
    tipo: "detalle",
    descripcion: "Gestión Masiva de la Información es el campo que investiga, sistematiza y analiza datos cualitativos y cuantitativos sobre el sector cultural colombiano con el propósito de fortalecer la toma de decisiones basada en evidencia. Su apuesta central es construir una infraestructura de conocimiento sobre la cultura que sea robusta, territorializada y participativa: no solo producida desde instituciones técnicas, sino co-construida con ciudadanos, organizaciones y comunidades como productores activos de datos. Articula tres aproximaciones metodológicas: la analítica de datos y minería como motor de procesamiento e interpretación de grandes volúmenes de información cultural, la cartografía social y los SIG como herramientas para comprender las desigualdades y dinámicas territoriales del sector, y la ciencia ciudadana como mecanismo para descentralizar y democratizar la producción del dato cultural en Colombia.",
    fin: "Consolidar una infraestructura de datos culturales robusta, territorializada y participativa que permita la planeación del sector basada en evidencia técnica y ciudadana, reduciendo las brechas de información entre territorios e instituciones.",
    metodologiasSombrilla: [
      {
        num: 1,
        nombre: "Analítica de Datos y Minería",
        desc: "procesamiento de grandes volúmenes de datos culturales, minería de texto y redes, visualización de datos, inteligencia artificial aplicada al sector cultural, modelos predictivos para planeación cultural, dashboards e indicadores del sector.",
      },
      {
        num: 2,
        nombre: "Cartografía Social y Sistemas de Información Geográfica (SIG)",
        desc: "mapeo territorial de infraestructura y consumo cultural, distribución geográfica de recursos y agentes culturales, análisis espacial de brechas culturales, georeferenciación de patrimonios y prácticas, atlas culturales territoriales.",
      },
      {
        num: 3,
        nombre: "Ciencia Ciudadana",
        desc: "producción distribuida de datos culturales por comunidades y organizaciones, observatorios ciudadanos de cultura, verificación colectiva de información cultural, plataformas de reporte y monitoreo participativo, datos abiertos co-producidos, encuestas y censos culturales participativos.",
      },
    ],
    resultados: [
      "Bases de datos estructuradas, diccionarios de variables y modelos analíticos para la medición y seguimiento del sector cultural colombiano.",
      "Tableros de control (dashboards), diagnósticos estadísticos territoriales e informes de tendencias para la toma de decisiones en política cultural.",
      "Mapas georeferenciados, atlas culturales territoriales y análisis espaciales de brechas en infraestructura, consumo y agentes culturales.",
      "Plataformas y protocolos de ciencia ciudadana para la co-producción de datos culturales, observatorios ciudadanos y reportes participativos desde los territorios, otros.",
    ],
  },
  {
    id: 5,
    nombre: "Públicos, experiencias y relaciones culturales",
    color: "#0A2A2A",
    tint:  "#E8F8F8",
    accent:"#1A7070",
    tipo: "detalle",
    descripcion: "Este campo reúne enfoques de investigación orientadas a comprender de manera integral quiénes son los públicos de la cultura, cómo participan, qué sentidos construyen en su relación con las prácticas y contenidos culturales, y de qué manera se articulan con otros actores, comunidades y ecosistemas de circulación. Se articula en tres bloques metodológicos complementarios: el primero tiene finalidad descriptiva, que permite identificar perfiles, hábitos, motivaciones y barreras; el segundo es interpretativo para profundizar en los significados, usos y formas de relación simbólica con la cultura; y el tercero se enfoca en la dimensión relacional que examina las conexiones, flujos e interacciones que sostienen la vida cultural en distintos territorios y entornos, tanto presenciales como digitales.",
    fin: "Generar conocimiento sistemático sobre los públicos, audiencias y no-públicos de la oferta cultural colombiana, comprendiendo sus barreras de acceso y formas de apropiación, con el propósito de orientar estrategias de circulación, acceso democrático y desarrollo de públicos basadas en evidencia y no en decisiones unilaterales.",
    metodologiasSombrilla: [
      {
        num: 1,
        nombre: "Caracterización y segmentación de públicos (descriptivo)",
        desc: "Investigación estructurada de quiénes son los públicos, cómo son su vida cotidiana, con qué frecuencia lo hacen, qué barreras enfrentan y qué diferencias existen entre estas poblaciones según variables sociodemográficas, territoriales, motivacionales y de hábitos.",
      },
      {
        num: 2,
        nombre: "Estudios de experiencia y apropiación cultural (interpretativo)",
        desc: "Analiza cómo los públicos interpretan, experimentan, resignifican y se apropian de los contenidos, prácticas y bienes culturales, tanto en escenarios presenciales como en entornos digitales, para comprender procesos de construcción de sentido, pertenencia e interacción cultural.",
      },
      {
        num: 3,
        nombre: "Análisis de redes, vínculos y relaciones ecosistémicas",
        desc: "Estudia el sistema de relaciones entre audiencias, públicos, agentes, organizaciones y Estado del ecosistema cultural, identificando conexiones, flujos, nodos estratégicos y patrones de circulación para comprender cómo se configura la vida cultural, participación y colaboración en distintos territorios y escalas.",
      },
    ],
    resultados: [
      "Estudios de recepción y apropiación cultural en diferentes territorios, grupos poblacionales y contextos de diversidad étnica y social.",
      "Perfiles, caracterizaciones y segmentaciones de audiencias de equipamientos y espacios culturales: teatros, bibliotecas, festivales y plataformas digitales.",
      "Estudios de no-públicos que identifiquen barreras simbólicas, económicas y geográficas de acceso a la oferta cultural.",
      "Reportes y análisis de audiencias, dashboards de participación cultural y planes estratégicos de circulación basados en datos.",
      "Protocolos, guías metodológicas y programas evaluados de formación, mediación y desarrollo de nuevos públicos en territorios con baja oferta cultural.",
    ],
  },
  {
    id: 6,
    nombre: "Innovación Pública y Prospectiva",
    color: "#301500",
    tint:  "#FFF4E5",
    accent:"#C05820",
    tipo: "detalle",
    descripcion: "La Innovación Pública y Prospectiva como campo de investigación cultural examina las transformaciones en los modos de diseñar, implementar y evaluar política cultural en Colombia. Parte del reconocimiento de que el Estado no puede ser el único actor en la construcción de respuestas culturales a los desafíos contemporáneos, por lo que propone metodologías que integran el diseño especulativo y la prospectiva, el análisis riguroso de políticas públicas y los principios de gobierno abierto. Su apuesta es generar conocimiento accionable: modelos replicables, prototipos evaluables y marcos participativos que conecten la investigación con la transformación real de la gestión cultural pública.",
    fin: "Impulsar una gobernanza cultural innovadora, participativa y basada en evidencia, capaz de anticipar futuros posibles, diseñar políticas públicas más pertinentes y transparentes, y fortalecer la colaboración entre Estado, ciudadanía y ecosistema cultural para garantizar el desarrollo sostenible de la cultura como bien común.",
    metodologiasSombrilla: [
      {
        num: 1,
        nombre: "Diseño Especulativo y de Futuros",
        desc: "construcción de escenarios culturales futuros, prospectiva estratégica, pensamiento de futuros en políticas culturales, pensamiento sistémico, anticipación de tendencias, laboratorios de innovación pública, ficción de diseño aplicada a la gestión cultural.",
      },
      {
        num: 2,
        nombre: "Análisis de Políticas Públicas",
        desc: "diagnóstico, formulación y evaluación de política cultural, análisis comparado de modelos de gestión, mapeo de actores e instituciones, estudios de implementación, marcos normativos y regulatorios del sector cultural, economía de la cultura.",
      },
      {
        num: 3,
        nombre: "Gobierno Abierto",
        desc: "participación ciudadana en la co-creación de política cultural, transparencia y rendición de cuentas en gestión cultural, datos abiertos aplicados al sector cultural, plataformas de participación Estado-ciudadanía, laboratorios ciudadanos, gobernanza cultural participativa.",
      },
    ],
    resultados: [
      "Documentos de política (Policy Briefs) y hojas de ruta estratégicas alineadas con marcos de futuros.",
      "Modelos de gestión cultural replicables y prototipos de servicios culturales desarrollados desde metodologías de diseño especulativo.",
      "Plataformas, protocolos y guías de participación ciudadana para la co-creación de política cultural en clave de Gobierno Abierto.",
      "Marcos de indicadores y marcos de evaluación para el análisis técnico de políticas públicas culturales, otros.",
    ],
  }
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

      {/* ═══ TAB: CARACTERIZACIÓN DE ACTORES ═══ */}
      {tabActiva === "actores" && (
        <div style={{ padding:"28px 36px 48px" }}>
          <div style={{ marginBottom:16 }}>
            <div style={{ fontSize:11, fontWeight:700, color:P.soft, textTransform:"uppercase", letterSpacing:"1px", marginBottom:5 }}>Próximamente</div>
            <h2 style={{ margin:0, fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:"clamp(18px,2vw,28px)", color:P.ink, textTransform:"uppercase", lineHeight:1 }}>Caracterización de actores</h2>
            <p style={{ margin:"10px 0 0", fontSize:13, color:P.soft, lineHeight:1.65 }}>Esta sección contendrá la caracterización de los actores del sector cultural: artistas, gestores, investigadores, comunidades, instituciones y redes. En construcción.</p>
          </div>
        </div>
      )}

      {/* ═══ TAB: NIVELES DE VINCULACIÓN ═══ */}
      {tabActiva === "vinculacion" && (
        <div style={{ padding:"28px 36px 48px" }}>
          <div style={{ marginBottom:16 }}>
            <div style={{ fontSize:11, fontWeight:700, color:P.soft, textTransform:"uppercase", letterSpacing:"1px", marginBottom:5 }}>Próximamente</div>
            <h2 style={{ margin:0, fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:"clamp(18px,2vw,28px)", color:P.ink, textTransform:"uppercase", lineHeight:1 }}>Niveles de vinculación</h2>
            <p style={{ margin:"10px 0 0", fontSize:13, color:P.soft, lineHeight:1.65 }}>Esta sección definirá los niveles y modalidades de vinculación entre el MinCulturas y los actores del sector cultural en procesos de investigación. En construcción.</p>
          </div>
        </div>
      )}
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

/* ─── Panel detallado (tipo: "detalle") ─── */
function AreaDetallePanel({ area }) {
  return (
    <div style={{ animation:"fadeUp 0.3s ease both" }}>
      {/* Header */}
      <div style={{ background:area.color, borderRadius:"14px 14px 0 0", padding:"24px 36px 22px" }}>
        <div style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.45)", textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:6 }}>
          Área {area.id} de 6
        </div>
        <h2 style={{ margin:0, fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:"clamp(22px,2.5vw,36px)", color:P.white, textTransform:"uppercase", lineHeight:1 }}>
          {area.nombre}
        </h2>
      </div>

      {/* Descripción intro — full width */}
      <div style={{ background:P.white, padding:"28px 36px 24px", borderLeft:`1px solid ${area.color}22`, borderRight:`1px solid ${area.color}22` }}>
        <p style={{ margin:0, fontSize:14, color:P.ink, lineHeight:1.75, maxWidth:900 }}>
          {area.descripcion}
        </p>
      </div>

      {/* 3 columnas: El fin | Metodologías sombrilla | Resultados esperados */}
      <div style={{
        display:"grid", gridTemplateColumns:"280px 1fr 320px", gap:0,
        background:P.white, border:`1px solid ${area.color}22`,
        borderTop:`1px solid ${P.tint}`, borderRadius:"0 0 14px 14px", overflow:"hidden",
      }} className="detalle-grid">

        {/* Col 1 — El fin */}
        <div style={{ padding:"28px 24px 28px 36px", borderRight:`1px solid ${P.tint}` }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
            <span style={{ fontSize:18, color:P.accent }}>★</span>
            <span style={{ fontSize:12, fontWeight:700, color:P.ink, textTransform:"uppercase", letterSpacing:"0.8px" }}>El fin</span>
          </div>
          <p style={{ margin:0, fontSize:13, color:P.ink, lineHeight:1.75 }}>
            {area.fin}
          </p>
        </div>

        {/* Col 2 — Metodologías sombrilla */}
        <div style={{ padding:"28px 28px", borderRight:`1px solid ${P.tint}` }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
            <span style={{ fontSize:18, color:P.accent }}>★</span>
            <span style={{ fontSize:12, fontWeight:700, color:P.ink, textTransform:"uppercase", letterSpacing:"0.8px" }}>Metodologías sombrilla</span>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {area.metodologiasSombrilla.map((m) => (
              <div key={m.num} style={{ display:"flex", gap:14 }}>
                <div style={{
                  width:28, height:28, borderRadius:"50%", flexShrink:0,
                  background:area.color, color:P.white,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:14,
                  marginTop:2,
                }}>{m.num}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:700, color:P.ink, marginBottom:4, lineHeight:1.3 }}>
                    {m.nombre}
                  </div>
                  <div style={{ fontSize:12.5, color:P.soft, lineHeight:1.65 }}>
                    {m.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3 — Resultados esperados */}
        <div style={{ padding:"28px 36px 28px 28px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
            <span style={{ fontSize:18, color:P.accent }}>★</span>
            <span style={{ fontSize:12, fontWeight:700, color:P.ink, textTransform:"uppercase", letterSpacing:"0.8px" }}>Resultados esperados</span>
          </div>
          <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:10 }}>
            {area.resultados.map((r,i) => (
              <li key={i} style={{ fontSize:13, color:P.ink, lineHeight:1.65, paddingLeft:16, position:"relative" }}>
                <span style={{ position:"absolute", left:0, color:area.accent, fontWeight:700 }}>→</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* Panel expandido de un Área */
function AreaPanel({ area }) {
  if (area.tipo === "detalle") return <AreaDetallePanel area={area} />;
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
  const [tabActiva,   setTabActiva]   = useState("campos");
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
        .detalle-grid { grid-template-columns: 280px 1fr 320px; }
        @media (max-width: 1100px) { .detalle-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 700px)  { .detalle-grid { grid-template-columns: 1fr !important; } }
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
          { key:"campos",      label:"Campos de investigación" },
          { key:"dimensiones", label:"Dimensiones de impacto" },
          { key:"actores",     label:"Caracterización de actores" },
          { key:"vinculacion", label:"Niveles de vinculación" },
          { key:"marco",       label:"Marco I+D" },
          { key:"innovacion",  label:"Innovación" },
        ].map(t => (
          <button key={t.key} className="arq-tab"
            onClick={() => setTabActiva(t.key)}
            style={{ padding:"15px 22px", fontSize:13, fontWeight:tabActiva===t.key?700:500, color:tabActiva===t.key?P.ink:P.soft, background:"none", borderBottom:`3px solid ${tabActiva===t.key?P.accent:"transparent"}`, whiteSpace:"nowrap" }}
          >{t.label}</button>
        ))}
      </div>

      {/* ═══ TAB 1: ÁREAS DE INVESTIGACIÓN ═══ */}
      {tabActiva === "campos" && (
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
                <div style={{ fontSize:10, color: areaActiva===a.id ? "rgba(255,255,255,0.5)" : P.soft, marginTop:4 }}>
                  {a.tipo === "detalle" ? `${a.metodologiasSombrilla.length} metodologías` : `${a.campos.length} campos`}
                </div>
              </button>
            ))}
          </div>

          {/* Panel del área seleccionada */}
          {area && <AreaPanel key={area.id} area={area} />}
        </div>
      )}

      {/* ═══ TAB 2: LÍNEAS TRANSVERSALES ═══ */}
      {tabActiva === "dimensiones" && (
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
      {tabActiva === "marco" && (
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
      {tabActiva === "innovacion" && (
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
