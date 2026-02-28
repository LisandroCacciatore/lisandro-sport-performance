# Token Reference — Sistema de Diseño Criterio Técnico

Todos los tokens están definidos en `theme.js` en la raíz del proyecto.
Nunca usar colores o valores hardcodeados. Siempre el token semántico.

---

## Tokens de fondo (background)

| Token Tailwind | Descripción | Dónde se usa |
|---|---|---|
| `bg-canvas` | Blanco puro o muy claro. Fondo base de página. | `<body>`, fondos de inputs |
| `bg-surface` | Ligeramente elevado sobre canvas. Cards, paneles, secciones. | Cards, secciones de contenido |
| `bg-ink` | Oscuro (casi negro). Para elementos invertidos. | Headers de tabla, fondos de nav items activos |
| `bg-dark` | El más oscuro. Footer. | `<footer>` |
| `bg-primary` | Azul #1E3A8A. Botones de acción principal. | CTAs primarios |
| `bg-primary-bg` | Azul muy claro. Fondo de badges de estado primary. | Badges, callouts de información |
| `bg-success` | Verde. Botón de descarga Excel. | Botones de descarga / confirmación |
| `bg-success-bg` | Verde muy claro. Fondo de badges success. | Badges de estado positivo |
| `bg-warning` | Ámbar. | Botones de estado de atención (raro) |
| `bg-warning-bg` | Ámbar muy claro. Fondo de badges warning. | Badges de semana híbrida / umbral |
| `bg-error` | Rojo. | (rara vez como fondo) |
| `bg-error-bg` | Rojo muy claro. Fondo de badges error. | Badges de pico / alerta |

---

## Tokens de texto

| Token Tailwind | Descripción | Dónde se usa |
|---|---|---|
| `text-ink` | Texto principal. Alto contraste. | Títulos, valores de datos importantes |
| `text-body` | Texto de párrafo. Contraste normal. | Párrafos, descripciones |
| `text-muted` | Texto secundario. | Labels, texto de soporte |
| `text-subtle` | Texto terciario. Muy bajo contraste. | Metadata, copyright, texto decorativo |
| `text-border` | Color de borde usado como texto. | Separadores decorativos tipo `|` |
| `text-primary` | Azul. | Links, badges, texto de acción |
| `text-success` | Verde. | Estado positivo |
| `text-warning` | Ámbar. | Estado de atención |
| `text-error` | Rojo. | Estado de ruptura / alerta |
| `text-surface` | Texto claro para fondos oscuros. | Texto sobre `bg-ink` o `bg-dark` |

---

## Tokens de borde

| Token Tailwind | Descripción | Dónde se usa |
|---|---|---|
| `border-border` | Borde estándar. Gris sutil. | Todos los componentes |
| `border-primary` | Borde azul. | Componente activo o seleccionado |
| `border-blue-100` | Borde muy suave azul. | Badges primary, callouts de información |
| `border-amber-200` | Borde ámbar suave. | Badges warning |
| `border-red-200` | Borde rojo suave. | Badges error |
| `border-green-200` | Borde verde suave. | Badges success |

---

## Tokens de sombra

| Token Tailwind | Descripción | Dónde se usa |
|---|---|---|
| `shadow-structural` | Sombra sutil, técnica. La única sombra permitida. | Cards, panels, modales |

**Nunca usar:** `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`

---

## Tokens de tipografía

| Token Tailwind | Fuente | Uso |
|---|---|---|
| `font-heading` | IBM Plex Sans | Títulos H1–H3, nombres de secciones |
| `font-sans` | Inter | Cuerpo de texto, párrafos (default) |
| `font-mono` | Fira Code | Datos, métricas, badges técnicos, código |

---

## Escala tipográfica estándar del sitio

| Elemento | Clases |
|---|---|
| Título de página (H1) | `font-heading text-3xl md:text-5xl font-bold text-ink tracking-tight` |
| Título de sección (H2) | `font-heading text-2xl font-bold text-ink` |
| Título de componente (H3) | `font-heading font-bold text-ink` |
| Label técnico (badge/etiqueta) | `text-[10px] font-mono font-bold text-muted uppercase tracking-widest` |
| Texto de párrafo | `text-sm text-body leading-relaxed` |
| Dato numérico principal | `font-mono font-bold text-ink text-lg` (o mayor) |
| Dato numérico secundario | `font-mono text-sm text-muted` |
| Nota al pie / disclaimer | `text-[10px] font-mono text-muted` |

---

## Tokens de color en valores HEX (referencia)

> Estos son los valores aproximados. La fuente de verdad es `theme.js`.
> No hardcodear estos valores en el HTML.

| Token | Valor aproximado |
|---|---|
| primary | #1E3A8A |
| ink | #0F172A (slate-900) |
| body | #334155 (slate-700) |
| muted | #64748B (slate-500) |
| subtle | #94A3B8 (slate-400) |
| border | #E2E8F0 (slate-200) |
| surface | #F8FAFC (slate-50) |
| canvas | #FFFFFF |
| dark | #0F172A o similar |

---

## Espaciado y layout

El sitio usa el espaciado estándar de Tailwind sin tokens custom.

**Convenciones:**
- Contenedor principal: `max-w-5xl mx-auto px-6`
- Contenedor wide: `max-w-7xl mx-auto px-6`
- Padding de sección: `py-12`
- Padding de card: `p-6 md:p-8`
- Gap entre elementos relacionados: `gap-4` o `gap-6`
- Gap entre secciones: `mb-12`

---

## Restricciones de border-radius

| Contexto | Clase permitida |
|---|---|
| Cards, paneles, secciones | `rounded` (4px) |
| Inputs, selects | `rounded` (4px) |
| Botones | `rounded` (4px) |
| Badges / pills | `rounded` (4px) |
| Avatares o elementos circulares | No aplica en este sitio |

**❌ Prohibido:** `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
(excepto en elementos de UI heredados del sitio donde ya existe — no romper consistencia)
