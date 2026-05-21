'use client';

const PRINCIPIOS = [
  {
    id: 1,
    nombre: "Cuidado y protección de la diversidad de la vida",
    descripcion: "Las investigaciones reconocen y protegen la diversidad biocultural como fundamento de la vida colectiva. Cada proceso incorpora una mirada de respeto hacia las formas de existencia humana y no humana, los territorios y las cosmovisiones de las comunidades.",
    bg: "#1A3D2B", tint: "#F0FAF4", frontAccent: "#2D7A4A",
  },
  {
    id: 2,
    nombre: "Dignidad y ética territorial",
    descripcion: "Toda investigación se desarrolla con pleno reconocimiento de la dignidad de las personas y comunidades participantes. El territorio es lugar de memoria, identidad y derechos, lo que orienta todas las decisiones metodológicas y relacionales.",
    bg: "#1A2D4A", tint: "#EEF5FC", frontAccent: "#2D5B8A",
  },
  {
    id: 3,
    nombre: "Sentido social, justicia y transformación",
    descripcion: "Las investigaciones tienen propósito transformador: aportan conocimiento que contribuye a la equidad, la justicia cultural y el reconocimiento de las desigualdades. Los hallazgos se traducen en acciones concretas para comunidades y territorios.",
    bg: "#3D2800", tint: "#FFF8EE", frontAccent: "#A06010",
  },
  {
    id: 4,
    nombre: "Diálogo de saberes",
    descripcion: "Se reconoce la pluralidad epistémica: saberes académicos, comunitarios, ancestrales y populares tienen igual valor y pueden articularse en procesos de co-creación. El diálogo de saberes es condición para la legitimidad y pertinencia del conocimiento.",
    bg: "#2D1658", tint: "#F5F2FF", frontAccent: "#4A2E8A",
  },
  {
    id: 5,
    nombre: "Rigor y calidad técnica",
    descripcion: "Las investigaciones aplican estándares metodológicos rigurosos, garantizando trazabilidad, replicabilidad y validez de los procesos y resultados. La calidad técnica y la sensibilidad cultural son condiciones igualmente necesarias.",
    bg: "#1A0A3D", tint: "#EEEDFE", frontAccent: "#3730A3",
  },
  {
    id: 6,
    nombre: "Transparencia, accesibilidad y soberanía de la información",
    descripcion: "Los datos y resultados son patrimonio público. Las investigaciones garantizan que la información producida sea accesible, comprensible y útil para las comunidades y la ciudadanía, con especial atención a lenguajes cercanos y no académicos.",
    bg: "#1A3D3D", tint: "#EEF9F9", frontAccent: "#2A7A7A",
  },
  {
    id: 7,
    nombre: "Gobernanza de datos culturales y responsabilidad digital",
    descripcion: "El manejo de datos culturales implica responsabilidades específicas: protección de identidades, consentimiento informado, propiedad colectiva de la información y prevención de usos discriminatorios. Las plataformas operan con marcos de gobernanza participativos.",
    bg: "#2D1A58", tint: "#F5F0FF", frontAccent: "#6B4BB0",
  },
  {
    id: 8,
    nombre: "Uso responsable de IA y ética algorítmica",
    descripcion: "Las herramientas de IA deben auditarse frente a sesgos culturales, étnico-raciales y de género. El uso de algoritmos es transparente, su lógica explicable, y sus resultados están siempre sujetos a revisión humana y comunitaria.",
    bg: "#3D1A2A", tint: "#FFF0F4", frontAccent: "#B5305B",
  },
  {
    id: 9,
    nombre: "Pluralismo metodológico",
    descripcion: "No existe un único método válido para investigar la cultura. El Ministerio promueve la articulación de enfoques cuantitativos, cualitativos, participativos y experimentales, adaptados a cada contexto, comunidad y pregunta de investigación.",
    bg: "#2D1A00", tint: "#FFF8EE", frontAccent: "#C86820",
  },
  {
    id: 10,
    nombre: "Sostenibilidad y memoria",
    descripcion: "La investigación cultural construye memoria institucional y colectiva. Sus resultados deben preservarse, actualizarse y ponerse en diálogo con procesos pasados y futuros, contribuyendo a la sostenibilidad del conocimiento como bien común intergeneracional.",
    bg: "#0A2D28", tint: "#EEF9F5", frontAccent: "#2D7A6A",
  },
];

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
            fontSize: 'clamp(13px, 1.1vw, 17px)',
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

        {/* Reverso: solo la descripción, con scroll */}
        <div
          className="v1-flip__back principio-back"
          style={{ background: p.bg, padding: '18px 16px', gap: 0 }}
        >
          <p style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.65,
            margin: 0,
          }}>
            {p.descripcion}
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
