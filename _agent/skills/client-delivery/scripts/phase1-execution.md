# Fase 1: Diagnóstico — Ejecución Día a Día (Días 1–4)

Objetivo de la fase: identificar la Variable Crítica del bloque actual
y documentar la brecha entre lo que se registra y lo que se decide.

Entregable: Documento de brecha (ver plantilla en `resources/phase-templates.md`).

---

## Día 1 — Llamada de apertura y recopilación de contexto

**Duración:** 45–60 minutos

**Antes de la llamada:**
- Revisar los datos enviados en el onboarding
- Identificar el método de periodización implícito o explícito
- Preparar 3 preguntas específicas sobre los datos recibidos

**Durante la llamada — agenda:**

```
0–10 min   → Confirmar contexto
  Preguntas:
  - "¿En qué semana del ciclo estás ahora?"
  - "¿Cuál es el objetivo de rendimiento más próximo?"
  - "¿Hay algo que haya cambiado en las últimas 2 semanas que no esté en los datos?"

10–25 min  → Diagnóstico de la regla de decisión
  Preguntas centrales (en orden):
  1. "¿Qué dato te llevaría a cambiar la carga esta semana?"
  2. "¿Cuándo fue la última vez que ajustaste la carga? ¿Qué te lo indicó?"
  3. "Si ese dato no hubiera estado, ¿habrías tomado la misma decisión?"

25–40 min  → Revisión de los datos recibidos
  Objetivo: identificar qué se registra vs. qué se usa para decidir
  Preguntas:
  - "De todo lo que registrás, ¿qué mirás primero el lunes?"
  - "¿Hay métricas que registrás pero que raramente cambian tu decisión?"

40–55 min  → Identificación preliminar de la VCV
  No nombrar la VCV todavía como definitiva.
  Formular como hipótesis: "Parece que [MÉTRICA] es la que más gobierna tus decisiones.
  ¿Tiene sentido eso para vos?"

55–60 min  → Próximos pasos
  - Confirmar fecha de entrega del documento de brecha (Día 4)
  - Pedir cualquier dato adicional que surgió como relevante en la llamada
```

**Después de la llamada:**
- Documentar las respuestas clave en el log del cliente
- Identificar la VCV candidata
- Identificar la brecha en una oración preliminar

---

## Día 2 — Análisis de datos y confirmación de hipótesis

**Actividad principal:** Análisis de los datos enviados por el cliente.

**Proceso:**

```
Paso 1: Mapear los datos recibidos
  → ¿Qué métricas están registradas?
  → ¿Con qué frecuencia?
  → ¿Hay gaps en el registro?

Paso 2: Buscar la señal de ruptura
  → ¿Hubo algún ciclo donde el resultado no correspondió al entrenamiento?
  → ¿Hay alguna semana donde la carga subió sin que la VCV lo justificara?
  → ¿Hay métricas registradas que nunca produjeron una decisión?

Paso 3: Confirmar o revisar la VCV candidata del Día 1
  → La VCV real es la métrica que, cuando cae fuera de rango,
    correlaciona con las instancias de rendimiento bajo
  → Si los datos no confirman la hipótesis del Día 1, buscar la alternativa

Paso 4: Identificar la brecha con evidencia
  → La brecha no es una teoría — tiene que tener al menos 1 instancia concreta
    visible en los datos
```

**Si los datos son insuficientes:**
Contactar al cliente con una pregunta específica. No esperar al Día 4.

> "[Nombre], al revisar los datos noto que no tengo [X].
> ¿Podés compartirme eso antes del [FECHA]? Es el dato que más me ayuda para el diagnóstico."

---

## Día 3 — Refinamiento y redacción del documento de brecha

**Actividad principal:** Redactar el documento de brecha.

**Antes de redactar, verificar:**

```
✅ La VCV está identificada con su nombre real
✅ La brecha está descrita en una oración sin ambigüedad
✅ Hay al menos una instancia concreta de consecuencia
✅ La diferencia entre "lo que se registra" y "lo que se decide" está clara
```

**Proceso de redacción:**

1. Usar la plantilla correcta según el buyer (`resources/phase-templates.md`)
2. Completar todos los campos sin dejar corchetes vacíos
3. Verificar contra los criterios de `resources/delivery-standards.md`

**Test antes de enviar:**
Leer el documento en voz alta. Si hay una frase que necesita explicación oral para ser entendida, reescribirla.

---

## Día 4 — Entrega del documento y confirmación de Fase 2

**Mensaje de entrega:**

```
[Nombre],

Te comparto el documento de brecha de la Auditoría.

El diagnóstico principal: [UNA ORACIÓN RESUMIENDO LA BRECHA].

Lo más importante no es si coincide con lo que ya sabías —
es que ahora está escrito y podemos trabajar sobre eso en Fase 2.

¿Podés revisarlo hoy o mañana y confirmarme que el diagnóstico refleja la situación real?
Si algo no encaja, lo ajustamos antes de arrancar el diseño.

Fase 2 arranca el [FECHA].

Lisandro
```

**Respuestas posibles y cómo manejarlas:**

```
"Sí, es exactamente eso"
  → Confirmar fecha de inicio de Fase 2. Arrancar el día siguiente.

"Sí, pero me faltaría agregar [X]"
  → Ajustar el documento con el dato adicional.
     Si cambia la VCV: replantear antes de arrancar Fase 2.
     Si solo agrega contexto: incorporar y confirmar.

"No, creo que el problema es otro"
  → No defender el diagnóstico. Preguntar: "¿Cuál sería el problema desde tu perspectiva?"
     Escuchar. Si el cliente tiene razón, revisar.
     Si el cliente está confundiendo síntoma con causa, explicar la diferencia con calma.
```

**Al cierre del Día 4:**
- Documento de brecha aprobado o ajustado
- Fecha de inicio de Fase 2 confirmada
- VCV validada por el cliente