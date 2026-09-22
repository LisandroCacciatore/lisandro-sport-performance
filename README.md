# Sitio y sistema de consultoría — Lisandro Cacciatore

**Sitio de consultoría para preparadores físicos de alto rendimiento, acompañado por el sistema operativo que lo sostiene: un harness de agentes, un pipeline de auditoría de CTAs y el producto IronLog.**

🔗 **[lisandrocacciatore.com](https://lisandrocacciatore.com/)**

---

## Qué resuelve

Un preparador físico de alto rendimiento decide con información incompleta: qué variable mirar, cuándo intervenir, qué evidencia respalda el cambio. El sitio no vende "un servicio" aislado: articula un **sistema de decisión** — metodología, autodiagnóstico y herramientas — y convierte la visita en una evaluación concreta.

## Mi rol

Diseñé y construí el sitio completo, y definí el sistema que lo gobierna:

- **Arquitectura de información:** 9 páginas más un silo de blog con 7 artículos propios.
- **Sistema de diseño:** paleta cian técnica, tipografía Inter + Fira Code, modo oscuro, con `theme.js` como fuente única de tokens.
- **Jerarquía de CTAs:** audité cada llamado a la acción del sitio y reescribí la jerarquía completa.
- **Harness de agentes para operar el negocio:** 4 skills que cubren análisis de negocio, entrega a clientes, copywriting y edición de estilo.

## Stack

HTML estático · Tailwind (CDN) · `theme.js` como fuente de tokens · Google Fonts · Material Icons · despliegue en Vercel

## Evidencia

| Qué | Dónde |
|---|---|
| Jerarquía de CTAs auditada y aplicada, con las instrucciones de auditoría (I-01a / I-01b) | `cta-audit.json` · `cta-transform-report.json` · `docs/F-03-jerarquia-ctas.md` |
| Harness de operación del negocio | `_agent/skills/`: `business-analyst`, `client-delivery`, `lean-high-performance-copywriter`, `style-editor` |
| Sistema de diseño documentado | `theme.js` + `_agent/skills/style-editor/resources/token-reference.md` |
| Entrega a clientes por fases | `_agent/skills/client-delivery/scripts/phase1..3-execution.md` |
| Producto IronLog | `ironlog/`: demo, herramientas y programas (Starting Strength, Wendler 5/3/1, Cube) |
| Metadata social | OG tags, twitter card y canonical en las 21 páginas del sitio |
| Contenido editorial | `blog/`: 7 artículos |

## Estado

Sitio en producción. Puntos abiertos, verificados sobre el código:

- **Tailwind por CDN en producción**: conviene migrar a un build propio para no depender de un tercero en cada visita.
- **Falta una imagen `og:image` propia (1200×630)**: la tarjeta social hoy es de texto (`twitter:card: summary`). Con una portada propia pasaría a tarjeta grande.
- El repositorio no declara homepage; el dominio solo vive en `sitemap.xml`.
