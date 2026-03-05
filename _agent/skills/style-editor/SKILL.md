---
name: style-editor
description: >
  Mantiene y extiende el sistema de diseño "Criterio Técnico" del sitio
  lisandrocacciatore.com / IronLog. Usar cuando el usuario pida modificar,
  crear, o revisar cualquier archivo HTML del sitio: index.html, sobre-mi.html,
  simuladores (wendler.html, ss.html, cube.html), landing pages segmentadas
  por buyer, o cualquier componente nuevo. También activar si el usuario menciona:
  tokens de Tailwind, theme.js, tipografía del sitio, colores, componentes de UI,
  estética del sitio, o pide que algo "quede consistente con el resto del sitio".
  Activar también cuando el usuario pida crear una sección o página específica
  para un perfil de audiencia: coordinador de rendimiento, director deportivo,
  preparador físico, dueño de academia — porque cada buyer tiene patrones de
  sección y jerarquía de información distintos que este skill conoce.
  Activar siempre que se trabaje sobre código frontend de este ecosistema —
  no esperar que el usuario lo pida explícitamente.
---

# Lean Style Editor

Skill de mantenimiento y extensión del sistema de diseño de lisandrocacciatore.com.
Todo componente nuevo o modificado debe ser indistinguible del resto del sitio
en tono visual: industrial, técnico, sin decoración innecesaria.

---

## Árbol de decisión — ¿qué tipo de tarea es?

Antes de escribir código, identificar DOS cosas: el tipo de tarea **y** el buyer al que va dirigida la página o sección.

| Tarea | Archivo de referencia |
|---|---|
| Crear un componente nuevo (card, sección, modal) | `resources/component-patterns.md` |
| Aplicar colores o estados semánticos | `resources/token-reference.md` |
| Elegir tipografía para un contexto específico | `resources/token-reference.md` → sección Tipografía |
| Auditar un componente existente por inconsistencias | `scripts/style-audit.md` |
| Ver ejemplos de secciones completas | `examples/section-examples.md` |
| Diagnosticar a un cliente potencial | `scripts/gap-diagnostic.md` |
| Evaluar si un cliente está listo para comprar | `scripts/readiness-checklist.md` |
| Calcular ROI para el cliente | `resources/roi-calculator.md` |
| Elegir qué tier proponer | `resources/service-tiers.md` |
| Guiones de cierre de venta | `resources/closing-scripts.md` |

Leer el archivo correspondiente antes de modificar, crear, o recomendar cualquier cosa.

---

## Buyers y cómo impactan las decisiones de diseño

El sitio sirve a cuatro perfiles con necesidades visuales distintas.
Antes de crear o modificar una sección, identificar a quién va dirigida.

### Buyer 1 — Coordinador de Rendimiento Deportivo ("Martín")
**32–45 años. Head of Performance. Club formativo multideporte.**
- Consume el sitio en profundidad. Lee las secciones técnicas.
- Quiere ver sistemas, no promesas. Le convence el mecanismo, no el resultado.
- Responde a: semáforo operativo, IF → THEN visible, entregables concretos.
- **Diseño para él:** máxima densidad técnica. Tablas, badges de estado, datos en Fira Code. El callout de VCV es su elemento más persuasivo.

### Buyer 2 — Director Deportivo / Manager del Club
**40–60 años. Aprueba presupuestos. No analiza datos directamente.**
- Escanea, no lee. Necesita entender el valor en 10 segundos.
- Quiere ver: orden institucional, reducción de riesgo, credibilidad.
- Responde a: titulares de sección claros, consecuencias en lenguaje de negocio, ningún jargon técnico.
- **Diseño para él:** jerarquía visual agresiva. H2 grandes, párrafos cortos, CTA visible arriba del fold. Sin tablas de datos. Sin badges técnicos. Callouts oscuros de servicio funcionan bien.

### Buyer 3 — Preparador Físico del Equipo
**25–40 años. Sobrecargado. Descubre el contenido primero.**
- Llega desde LinkedIn o YouTube buscando herramientas concretas.
- Quiere ver demos, ejemplos, velocidad de uso.
- Responde a: "hacé esto en X minutos", ejemplos de reportes, simuladores.
- **Diseño para él:** el simulador ES el gancho. La sección de señales de ruptura resuena fuerte. Necesita argumentos para convencer a su director internamente → incluir sección "cómo presentarlo al director".

### Buyer 4 — Dueño de Academia Deportiva
**30–50 años. Dueño de academia privada. Motivación comercial.**
- Piensa en diferenciación y valor percibido ante padres e inversores.
- Quiere ver reportes, dashboards, algo que pueda mostrar.
- Responde a: "cómo se ve el reporte final", ejemplos de output, posicionamiento de marca.
- **Diseño para él:** mostrar el output (el reporte, el esquema, el dashboard), no el proceso. El callout oscuro de servicio con copy de diferenciación comercial funciona bien.

---

## Regla de buyer antes de escribir código

Antes de crear cualquier sección o página, preguntar:

**¿Quién va a leer esto principalmente?**

| Buyer | Densidad técnica | Elemento más persuasivo | Elemento a evitar |
|---|---|---|---|
| Coordinador | Alta | Callout de VCV, tabla IF → THEN | Texto vago sin mecanismo |
| Director | Baja | Callout oscuro, titulares de consecuencia | Badges técnicos, jargon |
| Preparador Físico | Media-alta | Simulador, señales de ruptura | CTAs genéricos sin velocidad prometida |
| Dueño de Academia | Media | Output visible, diferenciación | Proceso interno sin resultado final mostrado |

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

1. ☐ ¿Está identificado el buyer al que va dirigida la sección o página?
2. ☐ ¿La densidad técnica del contenido corresponde a ese buyer?
3. ☐ ¿El elemento más persuasivo para ese buyer está presente y visible?
4. ☐ ¿Todos los colores usan tokens semánticos de theme.js?
5. ☐ ¿Los bordes son `border-border`, no colores hardcodeados?
6. ☐ ¿Las sombras son `shadow-structural`, no `shadow-xl`?
7. ☐ ¿No hay `rounded-2xl` o mayor?
8. ☐ ¿Los datos y métricas están en `font-mono`?
9. ☐ ¿Los títulos están en `font-heading`?
10. ☐ ¿Los colores de estado solo se usan para estados de validación?
11. ☐ ¿El componente nuevo es visualmente indistinguible del estilo del resto del sitio?

---

## Referencias adicionales

- `resources/token-reference.md` — Lista completa de tokens con valores y contexto de uso
- `resources/component-patterns.md` — Patrones de componentes reutilizables (cards, badges, tablas, modales, secciones por buyer)
- `resources/closing-scripts.md` — Guiones de cierre por buyer y tipo de brecha
- `resources/service-tiers.md` — Tiers de servicio y a qué buyer corresponde cada uno
- `resources/roi-calculator.md` — Modelos de ROI por buyer
- `examples/section-examples.md` — Ejemplos de secciones completas del sitio (header, dashboard, CTA, secciones por buyer)
- `scripts/style-audit.md` — Proceso para auditar inconsistencias visuales en un archivo HTML
- `scripts/gap-diagnostic.md` — Diagnóstico de brecha operativa por buyer
- `scripts/readiness-checklist.md` — Evaluación de preparación del cliente por buyer