# Ejemplo: Esquema IF → THEN (Fase 2)

Continuación del caso de la academia de tenis junior con Wendler 5/3/1.
Este es el esquema de decisión que resulta de Fase 2, construido sobre
la brecha identificada en el ejemplo de Fase 1.

---

## Versión técnica (para Preparador Físico)

```
AUDITORÍA VCV — ESQUEMA DE DECISIÓN IF → THEN
Academia [NOMBRE] — Atleta: [NOMBRE]
Fecha: 24/04/2026

─────────────────────────────────────────

VARIABLE CRÍTICA VALIDADA (VCV)
  Nombre:       AMRAP de Semana 3 — Sentadilla
  Métrica:      Repeticiones completadas con técnica limpia al peso de semana 3
                (85–90% del TM, según protocolo Wendler estándar)
  Frecuencia:   Una vez por ciclo (semana 3 de cada bloque de 4 semanas)
  Responsable:  [Nombre del preparador físico]

─────────────────────────────────────────

UMBRALES DE VARIACIÓN

  Zona OK (progresión normal):
    AMRAP ≥ 5 repeticiones con técnica limpia

  Zona de atención (monitorear, no actuar todavía):
    AMRAP = 3–4 repeticiones

  Zona de intervención (acción requerida):
    AMRAP ≤ 2 repeticiones
    O: fallo técnico en cualquier repetición (aunque complete el número)

─────────────────────────────────────────

REGLAS DE DECISIÓN

  REGLA 1 — Zona OK
  IF   AMRAP ≥ 5 reps (técnica limpia)
  THEN subir TM según protocolo estándar:
       +2.5kg tren superior / +5kg tren inferior al inicio del próximo ciclo

  REGLA 2 — Zona de atención
  IF   AMRAP = 3–4 reps
  THEN mantener TM actual en el próximo ciclo (no subir, no bajar)
       + registrar RPE de las semanas 1, 2 y 3 del ciclo actual
       + evaluar carga externa de la semana del AMRAP (¿hubo torneo, viaje, o estrés?)
       → Si hay factor externo identificable: el TM puede subir igual, con nota de contexto
       → Si no hay factor externo: mantener TM y repetir el ciclo con el mismo peso

  REGLA 3 — Zona de intervención
  IF   AMRAP ≤ 2 reps O fallo técnico
  THEN reducir TM un 5% al inicio del próximo ciclo
       + revisar RPE promedio de las últimas 6 semanas
       + no subir TM hasta que el AMRAP vuelva a zona OK en el ciclo siguiente

─────────────────────────────────────────

PROTOCOLO DE VALIDACIÓN SEMANAL
  (Solo en la semana que contiene el AMRAP — semana 3 del ciclo)
  Duración estimada: 12 minutos
  Responsable: [Nombre del preparador físico]

  Paso 1: Registrar el resultado del AMRAP inmediatamente después de la sesión
    → Dónde: planilla existente, columna "AMRAP S3"
    → Qué registrar: número de reps + observación de técnica (OK / problema)
    → Tiempo: 2 minutos

  Paso 2: Identificar la zona
    → Comparar con los umbrales de arriba
    → Marcar la zona en la planilla: OK / ATENCIÓN / INTERVENCIÓN
    → Tiempo: 1 minuto

  Paso 3: Aplicar la regla IF → THEN correspondiente
    → Referencia: este documento (sección "Reglas de decisión")
    → Si el dato cae en Zona de atención: revisar el RPE de las últimas 3 semanas
      antes de decidir si hay factor externo
    → Tiempo: 5 minutos

  Paso 4: Documentar la decisión
    → Qué registrar: valor AMRAP, zona, decisión tomada, razón si hubo factor externo
    → Dónde: planilla existente, columna "Decisión TM próximo ciclo"
    → Tiempo: 2 minutos

  Tiempo total: ~10–12 minutos

─────────────────────────────────────────

NOTAS DE CONTEXTO

  1. Este esquema aplica a Sentadilla como ejercicio principal.
     Para Peso Muerto, el umbral de Zona OK es ≥ 4 reps (no 5)
     porque el volumen acumulado del ejercicio es mayor.
     Para Press de Banca, el umbral de Zona OK es ≥ 6 reps.

  2. Si el AMRAP ocurrió dentro de los 5 días posteriores a un torneo
     o un viaje largo, registrar el contexto y aplicar Regla 2
     independientemente del número de reps (no penalizar al atleta
     por fatiga de competencia).

  3. Si el dato no se registró en la semana 3 (lesión, ausencia, otro):
     usar el AMRAP del ciclo anterior como referencia para la decisión del TM.
     Registrar la ausencia en la planilla.
```

---

## Versión ejecutiva (para Director Técnico)

```
AUDITORÍA VCV — PROTOCOLO DE DECISIÓN SEMANAL
Academia [NOMBRE]
Fecha: 24/04/2026

─────────────────────────────────────────

VARIABLE QUE GOBIERNA LAS DECISIONES ESTA TEMPORADA
  Resultado del test de carga máxima de la tercera semana de cada ciclo
  (realizado una vez por mes, en la sesión de entrenamiento de fuerza principal)

─────────────────────────────────────────

REGLAS DE DECISIÓN DEL STAFF

  Si el resultado está dentro del rango esperado (zona verde):
  → El staff continúa la progresión de carga según el plan

  Si el resultado está en zona de atención (zona amarilla):
  → El staff mantiene la carga del ciclo actual sin subirla
  → Se revisa si hubo algún factor externo (torneo, viaje, enfermedad)
     que explique el resultado

  Si el resultado está fuera del rango (zona roja):
  → El staff reduce la carga un 5% en el ciclo siguiente
  → No se aumenta la carga hasta que el resultado vuelva a zona verde

─────────────────────────────────────────

ROLES Y RESPONSABILIDADES
  Quién registra el resultado:  [Nombre del preparador físico]
  Quién aplica la regla:        [Nombre del preparador físico]
  Quién revisa si hay duda:     [Nombre del coordinador de rendimiento]
  Tiempo del proceso:           12 minutos, una vez por mes

─────────────────────────────────────────

QUÉ PRODUCE ESTE PROTOCOLO
  - Una decisión de carga documentada cada ciclo
  - Criterio consistente para todos los atletas del programa
  - Registro que respalda cada decisión de entrenamiento
  - Intervención antes de que el problema sea visible en la competencia
```

---

## Notas sobre este ejemplo

**Por qué los umbrales tienen números específicos:**
"Más de 5 reps" es aplicable. "Buen resultado" no lo es.
El número viene de la conversación de Día 5 con el cliente, no de una tabla genérica.

**Por qué hay una Regla 2 además de OK e intervención:**
La zona de atención es el caso más frecuente y más difícil.
Sin una regla para ella, el preparador siempre va a improvisar en el medio.

**Por qué las notas de contexto existen:**
La regla general funciona el 90% del tiempo.
Las notas cubren los casos reales que el preparador va a enfrentar
y donde sin guía volvería a decidir por intuición.