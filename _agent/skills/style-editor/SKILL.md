---
name: style-editor
description: >
  Mantiene y extiende el sistema de diseño "Criterio Técnico" del sitio
  lisandrocacciatore.com / IronLog. Usar cuando el usuario pida modificar,
  crear, o revisar cualquier archivo HTML del sitio: index.html, sobre-mi.html,
  simuladores (wendler.html, ss.html, cube.html), landing pages, o cualquier
  componente nuevo. También activar si el usuario menciona: tokens de Tailwind,
  theme.js, tipografía del sitio, colores, componentes de UI, estética del sitio,
  o pide que algo "quede consistente con el resto del sitio". Activar siempre
  que se trabaje sobre código frontend de este ecosistema — no esperar que el
  usuario lo pida explícitamente.
---

# Lean Style Editor

Skill de mantenimiento y extensión del sistema de diseño de lisandrocacciatore.com.
Todo componente nuevo o modificado debe ser indistinguible del resto del sitio
en tono visual: industrial, técnico, sin decoración innecesaria.

---

## Árbol de decisión — ¿qué tipo de tarea es?

| Tarea | Archivo de referencia |
|---|---|
| Crear un componente nuevo (card, sección, modal) | `resources/component-patterns.md` |
| Aplicar colores o estados semánticos | `resources/token-reference.md` |
| Elegir tipografía para un contexto específico | `resources/token-reference.md` → sección Tipografía |
| Auditar un componente existente por inconsistencias | `scripts/style-audit.md` |
| Ver ejemplos de secciones completas | `examples/section-examples.md` |

Leer el archivo correspondiente antes de modificar o crear cualquier componente.

---

## Principios del sistema "Criterio Técnico"

### 1. Sobriedad industrial
El sitio comunica que su propietario trabaja con datos y criterio.
Cada decisión visual debe reforzar eso: sin gradientes decorativos,
sin ilustraciones, sin bordes redondeados grandes, sin sombras dramáticas.

**Reglas absolutas:**
- ❌ Nunca usar `rounded-2xl` o mayor. Máximo `rounded` (4px) o `rounded-md` (6px).
- ❌ Nunca usar fondos con gradiente decorativo (`bg-gradient-*`)
- ❌ Nunca usar sombras tipo `shadow-xl` o `shadow-2xl`
- ✅ Usar `shadow-structural` (sombra sutil, definida en theme.js)
- ✅ Bordes siempre `border-border` (token semántico, no color hardcodeado)

### 2. Jerarquía de contenido, no de decoración
La jerarquía visual se logra con tipografía y espacio, no con colores o efectos.
Un `h1` pesa más que un `h2` por tamaño y fuente, no por color.

### 3. Color como semáforo de estado
El color no es decorativo. Solo se usa para comunicar estado de datos:
- `primary` (#1E3A8A) → elementos de acción principal e información neutra
- `success` → estado positivo de validación
- `warning` → estado de atención o umbral
- `error` → estado de ruptura o alerta
- El resto del sitio es blanco, gris, y negro

### 4. Código de datos = Fira Code
Cualquier número, métrica, porcentaje, o dato técnico va en `font-mono` (Fira Code).
Esto es parte del posicionamiento: los datos se ven como datos.

---

## Sistema de tokens — referencia rápida

Ver `resources/token-reference.md` para la lista completa.

**Los más usados:**

| Token | Uso |
|---|---|
| `bg-canvas` | Fondo base de página |
| `bg-surface` | Cards, paneles, secciones elevadas |
| `bg-ink` | Fondos de headers de tabla, elementos invertidos |
| `bg-dark` | Footer |
| `text-ink` | Texto principal |
| `text-body` | Texto de párrafo normal |
| `text-muted` | Texto secundario, labels |
| `text-subtle` | Texto muy secundario, metadatos |
| `text-border` | Texto de separadores o divisores decorativos |
| `border-border` | Borde estándar de todos los componentes |
| `shadow-structural` | Sombra estándar de cards y paneles |
| `font-heading` | IBM Plex Sans — títulos y headings |
| `font-mono` | Fira Code — datos, métricas, código, badges técnicos |
| `font-sans` | Inter — cuerpo de texto |

---

## Tipografía — reglas de uso

| Contexto | Fuente | Clase |
|---|---|---|
| Títulos H1–H3 | IBM Plex Sans | `font-heading font-bold` |
| Cuerpo de texto, párrafos | Inter | `font-sans` (default) |
| Datos numéricos, métricas, pesos, porcentajes | Fira Code | `font-mono font-bold` |
| Labels técnicos, badges, etiquetas de estado | Fira Code | `font-mono text-[10px] uppercase tracking-widest` |
| Código o fórmulas | Fira Code | `font-mono` |

---

## Semáforo de estados — cuándo y cómo

Los colores de estado (`success`, `warning`, `error`, `primary`) **solo** se usan
para comunicar estado de validación de carga o estado de sistema.

**Nunca usar para decoración o diferenciación visual sin semántica.**

| Estado | Color | Cuándo usarlo |
|---|---|---|
| `primary` | #1E3A8A (azul) | Semana de volumen, información neutral, acción principal |
| `warning` | Ámbar | Semana híbrida, umbral de atención, dato que requiere monitoreo |
| `error` | Rojo | Semana de pico, señal de ruptura, alerta de intervención |
| `success` | Verde | Semana de descarga, validación positiva, estado óptimo |

**Patrón de uso de estados:**
```html
<!-- Badge de estado correcto -->
<div class="text-[10px] font-mono font-bold text-primary bg-primary-bg px-2 py-1 rounded 
             inline-block border border-blue-100 uppercase tracking-wide">
  Volumen (3x5+)
</div>
```

---

## Patrones prohibidos

Antes de escribir cualquier clase, verificar que ninguna de estas aparezca:

```
❌ rounded-2xl, rounded-3xl, rounded-full (en contenedores)
❌ bg-gradient-*
❌ shadow-xl, shadow-2xl
❌ text-[color] hardcodeado fuera de los tokens (ej: text-blue-600, text-gray-500)
❌ bg-[color] hardcodeado fuera de los tokens (ej: bg-gray-100, bg-blue-50)
❌ font-extrabold en cuerpo de texto (solo en logos/marca)
❌ animate-* sin propósito funcional
❌ Iconos decorativos emoji en cantidad (máximo 1 por sección, solo si hay precedente en el sitio)
```

---

## Checklist de revisión antes de entregar

1. ☐ ¿Todos los colores usan tokens semánticos de theme.js?
2. ☐ ¿Los bordes son `border-border`, no colores hardcodeados?
3. ☐ ¿Las sombras son `shadow-structural`, no `shadow-xl`?
4. ☐ ¿No hay `rounded-2xl` o mayor?
5. ☐ ¿Los datos y métricas están en `font-mono`?
6. ☐ ¿Los títulos están en `font-heading`?
7. ☐ ¿Los colores de estado solo se usan para estados de validación?
8. ☐ ¿El componente nuevo es visualmente indistinguible del estilo del resto del sitio?

---

## Referencias adicionales

- `resources/token-reference.md` — Lista completa de tokens con valores y contexto de uso
- `resources/component-patterns.md` — Patrones de componentes reutilizables (cards, badges, tablas, modales)
- `examples/section-examples.md` — Ejemplos de secciones completas del sitio (header, dashboard, CTA)
- `scripts/style-audit.md` — Proceso para auditar inconsistencias visuales en un archivo HTML
