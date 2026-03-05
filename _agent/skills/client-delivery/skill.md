---
name: client-delivery
description: >
  Gestiona la ejecución de la Auditoría VCV desde el "sí" del cliente hasta el entregable
  final. Usar cuando el usuario necesite preparar el onboarding de un cliente nuevo,
  ejecutar o documentar cualquiera de las tres fases de la Auditoría (Diagnóstico, Diseño,
  Transferencia), escribir los entregables formales, o evaluar si una fase está completa
  y lista para avanzar. También activar si el usuario menciona: documento de brecha,
  esquema IF → THEN, traspaso de criterio, primera validación del staff, protocolo de
  onboarding, o pide saber "qué hacer ahora que el cliente dijo que sí".
  No esperar que el usuario lo pida explícitamente — si hay un cliente activo
  o un entregable pendiente involucrado, activar este skill.
---

# Client Delivery

Skill de ejecución para la Auditoría VCV de Lisandro Cacciatore / IronLog.
Cubre todo lo que ocurre entre el "sí" del cliente y el entregable final:
onboarding, ejecución fase a fase, y escritura de los tres documentos de entrega.

---

## Árbol de decisión — ¿en qué momento del proceso estoy?

| Momento | Archivo de referencia |
|---|---|
| Cliente acaba de confirmar — primeras 48hs | `resources/onboarding-form.md` |
| Ejecutar Fase 1: Diagnóstico (días 1–4) | `scripts/phase1-execution.md` |
| Ejecutar Fase 2: Diseño (días 5–10) | `scripts/phase2-execution.md` |
| Ejecutar Fase 3: Transferencia (días 11–14) | `scripts/phase3-execution.md` |
| Escribir el entregable de cualquier fase | `resources/phase-templates.md` |
| Verificar si un entregable está listo | `resources/delivery-standards.md` |
| Ver un ejemplo de documento de brecha | `examples/gap-document-example.md` |
| Ver un ejemplo de esquema IF → THEN | `examples/ifthen-schema-example.md` |
| Ver un ejemplo de traspaso al staff | `examples/transfer-session-example.md` |

Leer el archivo correspondiente antes de ejecutar o escribir cualquier entregable.

---

## El proceso en una oración

El cliente pagó por claridad operativa en 14 días.
Cada fase produce un entregable concreto que el staff puede usar sin que Lisandro esté presente.

---

## Estructura de la Auditoría VCV

```
DÍA 0         → Onboarding: recopilación de datos y contexto del cliente
DÍAS 1–4      → Fase 1: Diagnóstico — identificar la brecha, mapear el sistema actual
DÍAS 5–10     → Fase 2: Diseño — construir el esquema IF → THEN y los umbrales
DÍAS 11–14    → Fase 3: Transferencia — el staff ejecuta el sistema por primera vez
```

---

## Buyers y cómo afectan la ejecución

El proceso técnico es el mismo para todos, pero el formato y el lenguaje
de los entregables cambia según el buyer.

| Buyer | Entregable de Fase 1 | Entregable de Fase 2 | Entregable de Fase 3 |
|---|---|---|---|
| Coordinador / PF | Técnico. Brecha operativa detallada. | Esquema IF → THEN con umbrales exactos. | Validación en campo con el staff. |
| Director Deportivo | Ejecutivo. Brecha como riesgo institucional. | Esquema con roles y responsabilidades. | Protocolo de reunión técnica semanal. |
| Dueño de Academia | Visible. Brecha como oportunidad de diferenciación. | Esquema con output de reporte para padres. | Demo del sistema en una evaluación real. |

---

## Principios de entrega

### 1. Un entregable por fase. No más.
Cada fase termina con un solo documento. No múltiples archivos, no "borradores".
El entregable es la versión final aplicable desde el lunes siguiente.

### 2. El staff puede operar sin el consultor
Cada entregable es autocontenido. Si Lisandro desaparece el día 15,
el staff sabe qué hacer con lo que recibió.

### 3. El lenguaje del entregable es el lenguaje del cliente
Un PF recibe el esquema IF → THEN en términos técnicos.
Un Director recibe el mismo esquema en términos de roles y decisiones institucionales.
El contenido es el mismo. El framing, no.

### 4. Nunca avanzar de fase sin confirmar el entregable anterior
Si el documento de brecha (Fase 1) no fue aprobado o entendido por el cliente,
no se empieza Fase 2. La confusión en Fase 1 multiplica el retrabajo en Fase 2.

---

## Checklist de cierre de cada fase

### Fase 1 — Diagnóstico completo cuando:
- ☐ La Variable Crítica del bloque actual está identificada y nombrada
- ☐ La brecha está descrita en términos concretos (qué se registra vs. qué se decide)
- ☐ El cliente reconoce la brecha como propia (no como crítica al método)
- ☐ El documento de brecha fue entregado y leído

### Fase 2 — Diseño completo cuando:
- ☐ El umbral de la VCV tiene un número o condición específica
- ☐ La regla IF → THEN está escrita sin ambigüedad
- ☐ El protocolo de 15 minutos semanales tiene pasos claros
- ☐ El esquema fue revisado por el staff (al menos el interlocutor principal)

### Fase 3 — Transferencia completa cuando:
- ☐ El staff ejecutó el esquema al menos una vez sin ayuda de Lisandro
- ☐ La primera validación produjo una decisión concreta (aunque sea "no intervenir")
- ☐ El staff puede articular la regla IF → THEN con sus propias palabras
- ☐ El documento final fue entregado

---

## Referencias

- `resources/onboarding-form.md` — Qué pedirle al cliente en las primeras 48hs
- `resources/phase-templates.md` — Plantillas de los tres entregables
- `resources/delivery-standards.md` — Criterios de calidad por fase y buyer
- `scripts/phase1-execution.md` — Ejecución día a día: Diagnóstico
- `scripts/phase2-execution.md` — Ejecución día a día: Diseño
- `scripts/phase3-execution.md` — Ejecución día a día: Transferencia
- `examples/gap-document-example.md` — Ejemplo de documento de brecha (Fase 1)
- `examples/ifthen-schema-example.md` — Ejemplo de esquema IF → THEN (Fase 2)
- `examples/transfer-session-example.md` — Ejemplo de traspaso al staff (Fase 3)