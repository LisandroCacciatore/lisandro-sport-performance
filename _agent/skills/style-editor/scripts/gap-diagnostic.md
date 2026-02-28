# Script: Diagnóstico de Brecha Operativa

Usar cuando el usuario necesite analizar a un cliente potencial específico
o cuando llegue con descripción de un problema de staff técnico.

---

## Proceso de diagnóstico en 4 preguntas

Aplicar en orden. Cada respuesta informa la siguiente.

---

### Pregunta 1 — La regla de decisión

**Hacer al cliente (o simular si el usuario describe el caso):**
> "¿Qué dato te llevaría a cambiar la carga de tu atleta esta semana?"

**Evaluar la respuesta:**

```
¿La respuesta incluye un número, umbral o condición específica?
  → SÍ: Puede haber un sistema. Ir a Pregunta 2.
  → NO: Brecha Tipo A confirmada. La regla de decisión está ausente.
         Ir directamente a propuesta de Auditoría VCV.
```

---

### Pregunta 2 — El registro

**Hacer:**
> "¿Qué datos estás registrando actualmente, y con qué frecuencia?"

**Evaluar la respuesta:**

```
¿El registro es sistemático (aunque sea una planilla)?
  → SÍ: Hay material para trabajar. Ir a Pregunta 3.
  → NO: El problema es anterior a la brecha. El cliente necesita
         instalar el hábito de registro antes de una VCV.
         No es un cliente de Auditoría ahora mismo.

¿El cliente menciona más de 4–5 métricas distintas?
  → SÍ: Señal de Brecha Tipo B (exceso sin jerarquía). Ir a Pregunta 4.
  → NO: Probable Brecha Tipo A. Continuar.
```

---

### Pregunta 3 — La brecha en consecuencia

**Hacer:**
> "¿Hubo alguna instancia en el último ciclo donde el atleta llegó
> a una competencia sin estar donde esperabas?"

**Evaluar la respuesta:**

```
¿El cliente puede describir una instancia concreta?
  → SÍ: La brecha tiene consecuencia visible. El ROI es articulable.
         Registrar: qué pasó, cuándo, cuántas semanas afectó.
         Esto será la base del argumento de propuesta.

  → NO (nunca pasó): Puede ser que el sistema funcione. Ser honesto:
         "Si nunca hubo un problema visible, quizás la prioridad es otra.
         ¿Hay alguna pregunta sobre el sistema de carga que no podés responder?"

  → NO (no recuerda): La brecha puede estar normalizada.
         "¿Podría haber pasado sin que te dieras cuenta?" → abre el espacio.
```

---

### Pregunta 4 — La gobernanza (solo si hay señal de Tipo B)

**Hacer:**
> "¿Todos los entrenadores del staff ajustan la carga con el mismo criterio?
> Si le pregunto a otro entrenador del equipo qué dato lo llevaría a cambiar
> la carga, ¿daría la misma respuesta que vos?"

**Evaluar la respuesta:**

```
¿La respuesta es "probablemente no" o "no lo sé"?
  → Brecha Tipo B confirmada. El problema es de gobernanza, no de VCV individual.
     Propuesta: Sistema de Gobernanza (Tier 2) o Auditoría como puerta de entrada.

¿La respuesta es "sí, tenemos criterio común"?
  → Verificar: "¿Ese criterio está escrito o es tácito?"
     Si es tácito: todavía hay riesgo. Un cambio de staff lo pierde.
     Si está escrito: no hay brecha de gobernanza. Evaluar si hay brecha de VCV.
```

---

## Output del diagnóstico

Al terminar las 4 preguntas, producir este resumen:

```
## Diagnóstico de Brecha — [NOMBRE CLIENTE / PERFIL]

**Tipo de brecha identificada:** [Tipo A / Tipo B / Sin brecha / Pre-cliente]

**Evidencia:**
- [Respuesta clave que confirma la brecha]
- [Consecuencia concreta mencionada]

**Servicio recomendado:** [Auditoría VCV / Gobernanza / Ninguno por ahora]

**Argumento de ROI:** [1–2 oraciones en lenguaje del cliente, sin jargon técnico]

**Próximo paso:** [Propuesta formal / Conversación de 20 min / Contenido de educación]
```

---

## Casos especiales

### Cliente que ya hizo una Auditoría y el problema persiste

El problema evolucionó de Tipo A a Tipo B.
La regla existe pero el staff no la aplica de forma consistente.
Propuesta: Sistema de Gobernanza.

### Cliente con calendario de competencia en menos de 3 semanas

La Auditoría sigue siendo posible (14 días).
Pero el foco se limita a la VCV del bloque de tapering, no del sistema completo.
Mencionar esto en la propuesta: "alcance reducido al bloque actual".

### Academia con Director Técnico y preparador físico distintos

Hay dos interlocutores con necesidades diferentes:
- El **preparador físico** quiere criterio operativo → Auditoría VCV
- El **Director Técnico** quiere gobernanza y reporting → Sistema de Gobernanza

Si se habla con el Director primero: enmarcar el problema en términos de consistencia del staff y riesgo sistémico.
Si se habla con el preparador primero: enmarcar en términos de autonomía y criterio propio.
