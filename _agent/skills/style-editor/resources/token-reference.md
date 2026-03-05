# Token Reference — Sistema de Diseño Criterio Técnico

Todos los tokens están definidos en `theme.js` en la raíz del proyecto.
Nunca usar colores o valores hardcodeados. Siempre el token semántico.

**Nota de buyer:** Los tokens son universales, pero su uso cambia según la audiencia.
Ver la columna "Restricción de buyer" para saber cuándo aplicar cada token
en páginas segmentadas.

---

## Tokens de fondo (background)

| Token Tailwind | Descripción | Dónde se usa | Restricción de buyer |
|---|---|---|---|
| `bg-canvas` | Blanco puro. Fondo base de página. | `<body>`, fondos de inputs | Todos |
| `bg-surface` | Ligeramente elevado. Cards, paneles. | Cards, secciones de contenido | Todos |
| `bg-ink` | Oscuro. Para elementos invertidos. | Headers de tabla, callout oscuro de servicio | Todos |
| `bg-dark` | El más oscuro. Footer. | `<footer>` | Todos |
| `bg-primary` | Azul #1E3A8A. Botones de acción. | CTAs primarios | Todos |
| `bg-primary-bg` | Azul muy claro. Fondo de badges primary y callout VCV. | Badges, callout de VCV | Solo en páginas técnicas (Coordinador / PF) |
| `bg-success` | Verde. Botón de confirmación. | Botones de descarga / estado positivo | Todos |
| `bg-success-bg` | Verde muy claro. Fondo de badges success. | Badges de estado positivo | Solo en páginas técnicas |
| `bg-warning` | Ámbar. | Botones de atención (raro) | Solo en páginas técnicas |
| `bg-warning-bg` | Ámbar muy claro. | Badges de semana híbrida / umbral | Solo en páginas técnicas |
| `bg-error` | Rojo. | (rara vez como fondo) | Solo en páginas técnicas |
| `bg-error-bg` | Rojo muy claro. | Badges de pico / alerta | Solo en páginas técnicas |

---

## Tokens de texto

| Token Tailwind | Descripción | Dónde se usa |
|---|---|---|
| `text-ink` | Texto principal. Alto contraste. | Títulos, valores de datos importantes |
| `text-body` | Texto de párrafo. | Párrafos, descripciones |
| `text-muted` | Texto secundario. | Labels, texto de soporte |
| `text-subtle` | Texto terciario. | Metadata, copyright |
| `text-border` | Color de borde como texto. | Separadores decorativos tipo `\|` |
| `text-primary` | Azul. | Links, badges, texto de acción |
| `text-success` | Verde. | Estado positivo |
| `text-warning` | Ámbar. | Estado de atención |
| `text-error` | Rojo. | Estado de ruptura / alerta |
| `text-surface` | Claro para fondos oscuros. | Texto sobre `bg-ink` o `bg-dark` |

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
| `font-heading` | IBM Plex Sans | Títulos H1–H3 en todas las páginas y para todos los buyers |
| `font-sans` | Inter | Cuerpo de texto, párrafos (default) |
| `font-mono` | Fira Code | Datos, métricas, badges técnicos, código |

**Nota de buyer sobre `font-mono`:**
- En páginas para Coordinador / PF: usar libremente en datos, labels, badges, señales de ruptura.
- En páginas para Director / Dueño: usar solo en labels de sección (`text-[10px] font-mono...`) y en el callout oscuro de servicio. No en el body copy.

---

## Escala tipográfica estándar del sitio

| Elemento | Clases |
|---|---|
| Título de página (H1) | `font-heading text-3xl md:text-5xl font-bold text-ink tracking-tight` |
| Título de sección (H2) | `font-heading text-2xl font-bold text-ink` |
| Título de componente (H3) | `font-heading font-bold text-ink` |
| Label técnico | `text-[10px] font-mono font-bold text-muted uppercase tracking-widest` |
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

| Convención | Clase |
|---|---|
| Contenedor principal | `max-w-5xl mx-auto px-6` |
| Contenedor wide | `max-w-7xl mx-auto px-6` |
| Padding de sección | `py-12` |
| Padding de card | `p-6 md:p-8` |
| Gap entre elementos relacionados | `gap-4` o `gap-6` |
| Gap entre secciones | `mb-12` |

**Nota de buyer sobre espacio:**
- Páginas para Director / Dueño: preferir `py-16` en secciones hero. El espacio comunica claridad y jerarquía para un lector que escanea.
- Páginas para Coordinador / PF: `py-12` es suficiente. La densidad de contenido es mayor y el espacio puede reducirse sin perder legibilidad.

---

## Restricciones de border-radius

| Contexto | Clase permitida |
|---|---|
| Cards, paneles, secciones | `rounded` (4px) |
| Inputs, selects | `rounded` (4px) |
| Botones | `rounded` (4px) |
| Badges / pills | `rounded` (4px) |

**❌ Prohibido:** `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
(excepto en elementos heredados del sitio donde ya existe — no romper consistencia)