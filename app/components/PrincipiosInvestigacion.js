'use client';

// 10 paletas oscuras con estilo GEDII — asignadas en orden mezclado
const PALETAS = [
  { bg: "#0F3320", tint: "#EDFAF2", frontAccent: "#1F7A45" }, // 0 verde bosque
  { bg: "#2D0A3D", tint: "#F7EFFE", frontAccent: "#7A1A9A" }, // 1 violeta oscuro
  { bg: "#3A1A00", tint: "#FFF5E8", frontAccent: "#B05010" }, // 2 ámbar quemado
  { bg: "#0A1A35", tint: "#EEF3FC", frontAccent: "#1A4A8A" }, // 3 azul medianoche
  { bg: "#380A18", tint: "#FEE8EF", frontAccent: "#A0204A" }, // 4 carmesí
  { bg: "#1E1040", tint: "#F0EEFE", frontAccent: "#5840B0" }, // 5 índigo pizarra
  { bg: "#063020", tint: "#E6F8F0", frontAccent: "#0F6840" }, // 6 esmeralda
  { bg: "#301500", tint: "#FFF4E5", frontAccent: "#C05820" }, // 7 siena
  { bg: "#0A2A2A", tint: "#E8F8F8", frontAccent: "#1A7070" }, // 8 teal profundo
  { bg: "#200A40", tint: "#F3EEFE", frontAccent: "#5C2D9A" }, // 9 púrpura real
];
// Orden mezclado: cada posición i toma PALETAS[MEZCLA[i]]
const MEZCLA = [3, 6, 0, 9, 4, 7, 1, 5, 2, 8];

const PRINCIPIOS = [
  {
    id: 1,
    nombre: "Cuidado y protección de la diversidad de la vida",
    descripcion: "Acogiendo los enfoques del PNC 2024-2038 se propone que la investigación cultural contribuya al cuidado y protección de la diversidad de la vida en todas sus dimensiones (biológica, cultural y lingüística), y reconoce la interdependencia entre comunidades, territorios y ecosistemas. Toda decisión metodológica y ética se orienta a evitar daños sobre los entornos bioculturales y a fortalecer las capacidades de las comunidades y territorios para su preservación.",
    cita: "MinCulturas, 2024, pp. 48–49",
  },
  {
    id: 2,
    nombre: "Dignidad y ética territorial",
    descripcion: "Toda investigación debe garantizar el respeto a la vida, la dignidad y las formas propias de organización y decisión de las comunidades, asegurando procesos basados en el consentimiento previo, libre e informado y en relaciones de confianza. Este principio orienta la actuación institucional para evitar prácticas extractivas de conocimiento y proteger los saberes, las memorias y los derechos culturales de los actores involucrados, en coherencia con el enfoque territorial y diferencial del PNC.",
    cita: "MinCulturas, 2024, pp. 48–49, 55–56",
  },
  {
    id: 3,
    nombre: "Sentido social, justicia y transformación",
    descripcion: "El conocimiento producido responde a necesidades reales del sector cultural y aporta evidencia útil para orientar decisiones territoriales, sociales y de política pública que contribuyan a la justicia social, económica y ambiental. Su finalidad es aportar al mejoramiento de las condiciones de vida de artistas, gestores, comunidades y pueblos, al fortalecer sus capacidades y contribuir a la construcción de paz y a la transformación de las desigualdades históricas.",
    cita: "MinCulturas, 2024, pp. 49–50, 80–84",
  },
  {
    id: 4,
    nombre: "Diálogo de saberes",
    descripcion: "La investigación reconoce y articula distintos sistemas de conocimiento, al valorar por igual los aportes de sabedores, artistas, comunidades, pueblos étnicos, academia, sector privado y otros agentes culturales. Este principio garantiza que las decisiones investigativas integren perspectivas diversas y se construyan resultados basados en participación efectiva, reconocimiento mutuo y diálogo intercultural.",
    cita: "MinCulturas, 2024, pp. 62–64, 76–80",
  },
  {
    id: 5,
    nombre: "Rigor y calidad técnica",
    descripcion: "Todos los procesos de investigación se fundamentan en criterios verificables que aseguran la precisión, la coherencia interna y la trazabilidad de la información. La producción de datos, relatos y análisis cumple con los estándares técnicos institucionales para garantizar su confiabilidad, comparabilidad y utilidad en la formulación, seguimiento y evaluación de las políticas culturales. La producción de conocimiento se articulará con el Sistema Estadístico Nacional (SEN), conforme a la Ley 2335 de 2023, y con los protocolos de gobernanza de la información y protección de datos personales establecidos en la Ley 1581 de 2012.",
    cita: "MinCulturas, 2024, pp. 43–44, 141–142; Congreso de la República de Colombia, 2023",
  },
  {
    id: 6,
    nombre: "Transparencia, accesibilidad y soberanía de la información",
    descripcion: "La información y los saberes generados con recursos públicos constituyen un bien público y de interés colectivo. El MinCulturas garantiza su circulación responsable e incorpora la dimensión de accesibilidad comunicativa: lenguajes claros, mediaciones pedagógicas, formatos accesibles y adaptaciones pertinentes según contextos territoriales, tecnológicos y poblacionales. Al mismo tiempo, se reconoce la soberanía de la información: los datos y saberes producidos o recopilados en procesos investigativos pertenecen al sector público y a las comunidades que los originan, y su uso se orienta a la garantía de derechos culturales y la gobernanza cultural.",
    cita: "MinCulturas, 2024, pp. 15–16, 148–150; 49–50, 141",
  },
  {
    id: 7,
    nombre: "Gobernanza de datos culturales y responsabilidad digital",
    descripcion: "La investigación cultural reconoce los datos como un activo estratégico para la gestión del conocimiento y la formulación de políticas públicas. Se adoptan prácticas de gobernanza de datos que aseguren su integridad, trazabilidad, interoperabilidad y uso responsable durante todo su ciclo de vida, fortaleciendo los sistemas de información cultural y garantizando que la información producida contribuya al análisis, la memoria institucional y la toma de decisiones basada en evidencia.",
    cita: "OECD, 2019; UNESCO, 2021",
  },
  {
    id: 8,
    nombre: "Uso responsable de IA y ética algorítmica",
    descripcion: "El uso de inteligencia artificial, agentes automatizados y herramientas de análisis de datos debe fortalecer la capacidad analítica institucional sin sustituir el juicio crítico ni los saberes territoriales. Reconociendo el nivel de madurez tecnológica actual del MinCulturas, su adopción deberá estar precedida por el desarrollo de capacidades internas que garanticen un uso informado, crítico y sostenible de estas herramientas, incluyendo procesos de formación del talento humano, definición de protocolos institucionales y apropiación progresiva de las tecnologías. Su implementación debe garantizar transparencia, supervisión humana y prevención de sesgos. La IA podrá aplicarse en: (i) análisis de texto y codificación de información cualitativa; (ii) identificación de patrones en grandes volúmenes de datos; y (iii) visualización de resultados. Todo uso deberá respetar la propiedad intelectual colectiva (Decisión Andina 351) y cumplir con la Ley 1581 de 2012 en materia de protección de datos personales.",
    cita: "UNESCO, 2021; OECD, 2023; Comunidad Andina, 1993; Congreso de la República, 2012",
  },
  {
    id: 9,
    nombre: "Pluralismo metodológico",
    descripcion: "El MinCulturas reconoce la diversidad de enfoques de investigación (artísticos, sociales, patrimoniales, digitales, comunitarios y otros) y permite su selección según la naturaleza del estudio y las características del territorio. La elección metodológica evita la imposición de modelos únicos y garantiza la calidad técnica, la pertinencia biocultural y la coherencia con los enfoques transversales del PNC: biocultural, territorial, diferencial, de género e intersectorial.",
    cita: "MinCulturas, 2024, pp. 52–58, 92–94",
  },
  {
    id: 10,
    nombre: "Sostenibilidad y memoria",
    descripcion: "Las investigaciones se diseñan con criterios de preservación y sostenibilidad para asegurar que los datos, relatos y archivos se resguarden adecuadamente y permanezcan disponibles para consultas futuras. Este principio comprende no solo la preservación técnica, sino también la generación de productos de divulgación, consulta y apropiación que permitan la reutilización institucional, social y territorial, fortaleciendo la memoria institucional y su articulación con la gestión integral de los patrimonios y las memorias en el campo del PNC.",
    cita: "MinCulturas, 2024, pp. 92–95, 103–105",
  },
].map((p, i) => ({ ...p, ...PALETAS[MEZCLA[i]] }));

function PrincipioCard({ p }) {
  return (
    <div
      className="v1-flip principio-card"
      style={{ '--v1-tint': p.tint, '--v1-accent': p.frontAccent }}
    >
      <div className="v1-flip__inner">

        {/* Frente: solo el título */}
        <div className="v1-flip__front" style={{ padding: '20px 18px 14px', justifyContent: 'space-between' }}>
          <p style={{
            margin: 0,
            fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(18px, 1.5vw, 22px)',
            color: '#2E2666',
            lineHeight: 1.3,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
            {p.nombre}
          </p>
          <span style={{ fontSize: 10, color: '#C0B8D8', display: 'block', textAlign: 'right' }}>leer →</span>
        </div>

        {/* Reverso: descripción + cita en cursiva */}
        <div
          className="v1-flip__back principio-back"
          style={{ background: p.bg, padding: '18px 16px', gap: 0, justifyContent: 'space-between' }}
        >
          <p style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.65,
            margin: '0 0 10px 0',
            flex: 1,
          }}>
            {p.descripcion}
          </p>
          <p style={{
            fontSize: 10.5,
            color: 'rgba(255,255,255,0.5)',
            fontStyle: 'italic',
            margin: 0,
            lineHeight: 1.4,
            flexShrink: 0,
          }}>
            ({p.cita})
          </p>
        </div>

      </div>
    </div>
  );
}

export default function PrincipiosInvestigacion() {
  return (
    <div style={{ background: '#FFF', borderTop: '1px solid #E4DFF4', padding: '32px 36px 40px' }}>
      <style>{`
        .principio-card { height: auto !important; aspect-ratio: 4 / 5; }
        .principio-back { overflow-y: auto !important; overflow-x: hidden !important; }
        .principio-back::-webkit-scrollbar { width: 2px; }
        .principio-back::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 1px; }
      `}</style>

      {/* Encabezado */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#9080B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 6 }}>
          Marco de valores · GEDII
        </div>
        <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',Impact,sans-serif", fontWeight: 900, fontSize: 'clamp(22px,2.2vw,34px)', color: '#1A0A3D', letterSpacing: '-0.5px', textTransform: 'uppercase', lineHeight: 1 }}>
          Principios de Investigación
        </h2>
      </div>

      {/* Grid 5 × 2 */}
      <div className="portal-v1__grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
        {PRINCIPIOS.map(p => <PrincipioCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}
