@AGENTS.md

# Plataforma GEDII — Design System & Agent Guide

> Gestión Estratégica de Datos, Información e Investigaciones  
> Ministerio de las Culturas, las Artes y los Saberes — Colombia  
> Stack: Next.js 16.2.4 · React 19.2.4 · Leaflet 1.9.4 · Turbopack  
> Shell: PowerShell (Windows 11). Usar `Remove-Item -Recurse -Force .next` para limpiar caché de Turbopack.

---

## 1. Identidad visual y paleta

La plataforma usa una paleta institucional de morados profundos con acento ámbar. **Nunca cambiar estos valores sin instrucción explícita.**

```js
// Paleta principal — copiar literal en nuevos componentes
const P = {
  ink:    "#1A0A3D",   // texto principal, fondos oscuros máximos
  deep:   "#2D1658",   // fondos de secciones oscuras, sidebar
  mid:    "#4A2E8A",   // color medio interactivo, bordes activos
  soft:   "#9080B8",   // texto secundario, labels, placeholders
  tint:   "#EDE6FA",   // fondo de tarjetas claras, hover states
  bg:     "#F4F2FC",   // fondo general de la app
  accent: "#E8A020",   // acento dorado-ámbar: KPIs, highlights, bullets activos
  white:  "#FFF",
};
```

**Colores adicionales usados en componentes:**
- GOV.CO bar: `#000` (fondo negro institucional)
- Footer: `#4D3398` (morado institucional), copyright bar `#3D2880`
- Header: `#FFF` con `border-bottom: 1px solid rgba(0,0,0,0.07)`
- Sidebar activo: `background:#EDE6FA`, `border-left: 3px solid #2D1658`

**10 paletas oscuras para tarjetas (PrincipiosInvestigacion / ArquitecturaMetodologica):**
```js
const PALETAS = [
  { bg:"#0F3320", tint:"#EDFAF2", frontAccent:"#1F7A45" }, // verde bosque
  { bg:"#2D0A3D", tint:"#F7EFFE", frontAccent:"#7A1A9A" }, // violeta
  { bg:"#3A1A00", tint:"#FFF5E8", frontAccent:"#B05010" }, // ámbar quemado
  { bg:"#0A1A35", tint:"#EEF3FC", frontAccent:"#1A4A8A" }, // azul medianoche
  { bg:"#380A18", tint:"#FEE8EF", frontAccent:"#A0204A" }, // carmesí
  { bg:"#1E1040", tint:"#F0EEFE", frontAccent:"#5840B0" }, // índigo
  { bg:"#063020", tint:"#E6F8F0", frontAccent:"#0F6840" }, // esmeralda
  { bg:"#301500", tint:"#FFF4E5", frontAccent:"#C05820" }, // siena
  { bg:"#0A2A2A", tint:"#E8F8F8", frontAccent:"#1A7070" }, // teal
  { bg:"#200A40", tint:"#F3EEFE", frontAccent:"#5C2D9A" }, // púrpura real
];
const MEZCLA = [3, 6, 0, 9, 4, 7, 1, 5, 2, 8]; // orden aleatorio visual
// Uso: ITEMS.map((item, i) => ({ ...item, ...PALETAS[MEZCLA[i]] }))
```

---

## 2. Tipografía

```
Títulos principales:  'Barlow Condensed', Impact, 'Arial Narrow', sans-serif
                      fontWeight: 900, textTransform: uppercase, letterSpacing: -0.5px
Cuerpo / UI:          'Barlow', 'Segoe UI', system-ui, sans-serif
                      fontWeight: 400/600/700
Fuente importada via Google Fonts (dentro de <style> en page.js):
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Barlow:wght@400;500;600;700&display=swap');
```

**Escalas de tamaño recurrentes:**
```
Título hero:          clamp(32px, 4vw, 54px)   — fontWeight 900, uppercase
Título sección:       clamp(20px, 2.2vw, 34px) — fontWeight 900, uppercase
Título tarjeta:       clamp(16px, 1.4vw, 22px) — fontWeight 700-900
Label sección:        11px, fontWeight 700, uppercase, letterSpacing 1-2px, color P.soft
Cuerpo texto:         12.5–14px, lineHeight 1.6–1.7
Nota / cita:          10.5px, italic, color rgba(255,255,255,0.5) sobre fondo oscuro
Tag / chip texto:     10–11px
```

---

## 3. Estructura de página (`app/page.js`)

```
<div root>
  <div.g-gov>          ← Barra GOV.CO, fondo negro, siempre full width
  <header.g-hdr>       ← Header blanco con logo + título GEDII
  <div display:flex>   ← Shell del dashboard (flex container)
    <aside.g-sidebar position:fixed>  ← Sidebar flotante (ver sección 5)
    <div flex:1 marginLeft:{sidebarW cuando collapsed}>  ← Contenido principal
      {activeSidebar === "arquitectura" ? <ArquitecturaMetodologica/> : <>
        <DashboardInvestigaciones/>
        <PrincipiosInvestigacion/>
      </>}
  </div>               ← cierra flex container
  <div.tira-footer>    ← Tira de logos institucionales (FUERA del flex)
  <footer ref={footerRef}>  ← Footer morado (FUERA del flex)
</div>
```

**Estados principales en page.js:**
```js
const [activeSidebar, setActiveSidebar] = useState("home");
const [navCollapsed,  setNavCollapsed]  = useState(false);
const [loaded,        setLoaded]        = useState(false);
const [sbTop,         setSbTop]         = useState(0);
const [sbBottom,      setSbBottom]      = useState(0);
const headerRef = useRef(null);  // ref al <header>
const footerRef = useRef(null);  // ref al <footer>
const sidebarW = navCollapsed ? 62 : 252;
```

---

## 4. Navegación: Sidebar items

```js
const SIDEBAR_ITEMS = [
  { key:"home",         label:"HOME",                                   route:"/" },
  { key:"investigar",   label:"Registra tu investigación",              route:"/investigar" },
  { key:"arquitectura", label:"Arquitectura metodológica" },
  { key:"datos",        label:"Modelo de gestión de datos" },
  { key:"divulgacion",  label:"Divulgación, circulación y apropiación" },
  { key:"herramientas", label:"Caja de herramientas" },
  { key:"etica",        label:"Marco ético" },
  { key:"actores",      label:"Caracterización de actores" },
];
```

**Para agregar una nueva sección:** añadir entrada en `SIDEBAR_ITEMS`, crear componente en `app/components/`, importarlo en `page.js` y agregar condición al render del contenido principal.

---

## 5. Sidebar flotante

El sidebar usa `position: fixed` con límites dinámicos calculados por scroll listener:

```js
useEffect(() => {
  function calcBounds() {
    const hdr = headerRef.current;
    const ftr = footerRef.current;
    if (!hdr || !ftr) return;
    setSbTop(Math.max(0, hdr.getBoundingClientRect().bottom));
    setSbBottom(Math.max(0, window.innerHeight - ftr.getBoundingClientRect().top));
  }
  calcBounds();
  window.addEventListener('scroll', calcBounds, { passive: true });
  window.addEventListener('resize', calcBounds);
  return () => { window.removeEventListener('scroll', calcBounds); window.removeEventListener('resize', calcBounds); };
}, []);
```

**Comportamiento:**
- Expandido (252px): flota sobre el contenido, `marginLeft: 0` en main → transparencia con blur
- Colapsado (62px): empuja el contenido, `marginLeft: sidebarW` en main → sin solapamiento
- Glass morphism: `background: rgba(255,255,255,0.55)`, `backdropFilter: blur(14px)`
- Límites: nunca encima del header ni del footer (controlado por `sbTop` y `sbBottom`)

---

## 6. Sistema de tarjetas flip 3D (`.v1-flip`)

Definidas en `app/globals.css`. **No duplicar en componentes.**

```css
/* Estructura HTML requerida */
<div className="v1-flip" style={{'--v1-tint': color, '--v1-accent': accentColor}}>
  <div className="v1-flip__inner">
    <div className="v1-flip__front"> ... </div>
    <div className="v1-flip__back">  ... </div>
  </div>
</div>
```

**Reglas críticas:**
- `globals.css` define `height: 400px` en `.v1-flip` — para override usar `<style>` tag con `!important`
- Para `aspect-ratio` en vez de altura fija: `.mi-card { height: auto !important; aspect-ratio: 4/5; }`
- El back necesita `transform: rotateY(180deg)` (ya en globals)
- Scroll en el back: agregar clase custom con `overflow-y: auto !important`

**Variantes de aspect-ratio usadas:**
- `PrincipiosInvestigacion`: `aspect-ratio: 4/5` (tarjeta tipo libro)
- `ArquitecturaMetodologica` (enfoques): `aspect-ratio: 3/4`

---

## 7. Grid responsivo (`.portal-v1__grid`)

Definido en `globals.css`. Breakpoints automáticos:
```
Desktop (>900px): repeat(5, 1fr)  — override posible inline
Tablet (≤900px):  repeat(3, 1fr)
Mobile (≤600px):  1fr
```

Para grids con más o menos columnas, usar `style={{ gridTemplateColumns: 'repeat(N, 1fr)' }}` como override inline.

---

## 8. Patrones de componentes

### Label de sección (encabezado de bloque)
```jsx
<div style={{ fontSize:11, fontWeight:700, color:P.soft, textTransform:"uppercase", letterSpacing:"1px", marginBottom:6 }}>
  Texto etiqueta
</div>
<h2 style={{ margin:0, fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:"clamp(20px,2.2vw,30px)", color:P.ink, textTransform:"uppercase", lineHeight:1 }}>
  Título de sección
</h2>
```

### Chip de dato / KPI
```jsx
<div style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.16)", borderRadius:8, padding:"7px 14px", display:"flex", alignItems:"center", gap:9 }}>
  <span style={{ fontFamily:"'Barlow Condensed',Impact,sans-serif", fontWeight:900, fontSize:22, color:P.accent, lineHeight:1 }}>{valor}</span>
  <span style={{ fontSize:11, color:"rgba(255,255,255,0.65)" }}>{label}</span>
</div>
```

### Tag / pill de enfoque
```jsx
<span style={{ display:"inline-block", background:`${color}22`, color, border:`1px solid ${color}44`, borderRadius:20, padding:"2px 10px", fontSize:10.5, fontWeight:600, letterSpacing:"0.3px", marginRight:4, marginBottom:4 }}>
  {texto}
</span>
```

### Hero de sección (fondo oscuro)
```jsx
<div style={{ background:`linear-gradient(135deg, ${P.ink} 0%, ${P.deep} 50%, #3D2880 100%)`, padding:"44px 40px 36px", position:"relative", overflow:"hidden" }}>
  {/* Decoración geométrica */}
  <div style={{ position:"absolute", right:-60, top:-60, width:320, height:320, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.06)" }}/>
  <div style={{ position:"absolute", right:40, top:30, width:160, height:160, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.08)" }}/>
  {/* Contenido */}
  <div style={{ position:"relative", zIndex:1 }}> ... </div>
</div>
```

### Barra de tabs de navegación interna
```jsx
<div style={{ background:P.white, borderBottom:`1px solid ${P.tint}`, padding:"0 40px", display:"flex", gap:0, overflowX:"auto" }}>
  {TABS.map(t => (
    <button key={t.key} onClick={() => setTab(t.key)} style={{
      padding:"15px 22px", fontSize:13,
      fontWeight: tab===t.key ? 700 : 500,
      color: tab===t.key ? P.ink : P.soft,
      background:"none", border:"none", cursor:"pointer",
      borderBottom:`3px solid ${tab===t.key ? P.accent : "transparent"}`,
      whiteSpace:"nowrap", fontFamily:"inherit",
    }}>{t.label}</button>
  ))}
</div>
```

### Panel de contenido con color de área (fondo oscuro con grid)
```jsx
<div style={{ background: area.color, borderRadius:14, padding:"24px 28px", display:"grid", gridTemplateColumns:"repeat(N, 1fr)", gap:20 }}>
  ...
</div>
```

### Ítem de lista con flecha de acento
```jsx
<li style={{ fontSize:12, color:P.ink, lineHeight:1.5, paddingLeft:14, position:"relative" }}>
  <span style={{ position:"absolute", left:0, color:area.accent, fontWeight:700, fontSize:11 }}>→</span>
  {texto}
</li>
```

### Tarjeta de resultado con checkmark
```jsx
<li style={{ fontSize:12, color:P.ink, lineHeight:1.5, padding:"7px 10px 7px 12px", borderRadius:6, background:i%2===0 ? P.bg : "transparent" }}>
  <span style={{ color:area.accent, marginRight:6, fontWeight:700 }}>✓</span>
  {texto}
</li>
```

---

## 9. Animaciones

```css
/* Definir en el <style> del componente o en globals.css */
@keyframes fadeIn  { from{opacity:0} to{opacity:1} }
@keyframes slideL  { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
@keyframes fadeUp  { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
```

Uso: `animation:"fadeUp 0.3s ease both"` en el elemento que se monta condicionalmente.

---

## 10. Archivos clave del proyecto

| Archivo | Descripción |
|---|---|
| `app/page.js` | Shell principal: GOV.CO, header, sidebar, routing entre secciones |
| `app/globals.css` | Sistema de tarjetas flip, grids, tira de logos, responsive |
| `app/components/dashboard.js` | Dashboard con mapa coroplético, filtros, KPIs, gráficos |
| `app/components/MapaColombiaInner.js` | Mapa Leaflet (SSR-safe, carga dinámica en useEffect) |
| `app/components/PrincipiosInvestigacion.js` | 10 tarjetas flip con principios GEDII |
| `app/components/ArquitecturaMetodologica.js` | 6 áreas · líneas transversales · ciclo · prioridades |
| `data/plataformas.js` | Dataset: 40 investigaciones, sistemas de información, perfiles |
| `public/colombia-depts.json` | GeoJSON 32 departamentos + Bogotá D.C. |
| `public/logos/` | 5 SVG: SoyCultura, Estímulos, SIPA, SIA, SINIC |

---

## 11. Reglas de código

- **Siempre `'use client'`** en la primera línea de cada componente (App Router con interactividad)
- **No SSR con Leaflet** — importar con `import('leaflet')` dentro de `useEffect`
- **Inline styles en JSX** para todo lo que sea específico del componente; `globals.css` solo para patrones reutilizables
- **No comentarios obvios** — solo comentar WHY no WHAT
- **No simplificar ni omitir contenido** — si el usuario provee texto completo, va completo
- **Archivos grandes** (>50 KB): usar Python con `open(..., encoding='utf-8')` para ediciones, no el Edit tool directamente
- Para limpiar caché de Turbopack en PowerShell: `Remove-Item -Recurse -Force .next`

---

## 12. Componentes existentes — qué NO recrear

- Sistema de tarjetas flip → usar clases `.v1-flip*` de globals.css
- Grid responsivo → usar `.portal-v1__grid` de globals.css
- Tira de logos → usar clases `.tira-footer`, `.tira-plataformas`, `.tira-item*`
- Mapa Colombia → reutilizar `MapaColombiaInner.js` pasando `data` y `fDepts` como props

---

## 13. Convenciones de diseño

- **Padding de secciones**: `32px 36px` o `28px 36px 48px`
- **Border-radius tarjetas**: `12px–16px`
- **Border-radius pills/tags**: `20px`
- **Gap entre tarjetas**: `10px` (grids de tarjetas), `8px` (selectores), `16px–24px` (paneles)
- **Sombra tarjeta en reposo**: `0 1px 4px rgba(0,0,0,0.05)`
- **Sombra tarjeta activa**: `0 4px 16px {color}44`
- **Transiciones**: `0.18s–0.25s ease` para interacciones UI; `0.65s cubic-bezier(0.4,0.2,0.2,1)` para el flip 3D
- **Bordes de sección**: `1px solid ${P.tint}` o `1px solid rgba(60,52,137,0.13)`

---

## 14. Contexto institucional

- **Ministerio**: Ministerio de las Culturas, las Artes y los Saberes — Colombia
- **Sistema**: GEDII (Gestión Estratégica de Datos, Información e Investigaciones)
- **Marco**: Plan Nacional de Cultura (PNC) 2024-2038
- **Usuario piloto**: Liliana Pérez — Dirección de Artes
- **Contacto técnico**: camilotiria8706@gmail.com
- **Repo GitHub**: https://github.com/CamilotiriaDesarrollo/gedii

Las investigaciones son del sector cultural colombiano: artes, patrimonio, pueblos étnicos, territorios, políticas culturales, participación cultural, diversidad lingüística, memorias, innovación pública.
