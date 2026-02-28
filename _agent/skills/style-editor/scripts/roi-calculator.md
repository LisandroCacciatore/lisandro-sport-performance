# Modelo de Cálculo de ROI — Para el Cliente

El objetivo de este documento es que el agente pueda construir
un argumento de ROI concreto para cualquier tipo de cliente.
No se trata de números exactos: se trata de hacer visible el costo
de la brecha antes de que el cliente decida.

---

## Principio central

El ROI de la Auditoría VCV no se mide en dinero ganado.
Se mide en **días de entrenamiento efectivos recuperados**
y en **riesgo de peaking fallido reducido**.

Expresarlo en dinero abstracto ("ahorrás X USD") debilita el argumento.
Expresarlo en tiempo y resultado de competencia lo hace concreto.

---

## Modelo para preparadores físicos individuales

### Variables a identificar en la conversación

1. **¿Cuántos atletas tiene activos?** (N)
2. **¿Cuántos torneos / fechas de competencia en los próximos 90 días?** (C)
3. **¿Cuántas veces en el último año llegó un atleta a competencia sin estar en el pico esperado?** (F)
4. **¿Qué pasó en esos casos?** (consecuencia: resultado, lesión, desgaste)

### Cálculo orientativo

```
Semanas de entrenamiento afectadas por ajustes sin criterio:
  = F × 1.5 semanas promedio de recuperación o recalibración

Días de entrenamiento efectivos perdidos:
  = semanas afectadas × 5 días/semana

Costo de oportunidad (no monetario):
  = días perdidos × [importancia relativa del ciclo para el atleta]
```

**Ejemplo para presentar al cliente:**
> "Si en el último año hubo 3 instancias donde el atleta llegó mal a la competencia,
> y cada una implicó 1.5 semanas de recalibración, eso son ~22 días de entrenamiento
> que no rindieron lo que debían. La Auditoría cuesta USD 250.
> ¿Cuánto vale para vos recuperar 22 días de entrenamiento efectivo en el próximo ciclo?"

---

## Modelo para academias de tenis ATP Junior

### Variables a identificar

1. **¿Cuántos atletas en el programa de alto rendimiento?** (N)
2. **¿Cuántas semanas de preparación promedio por torneo?** (S)
3. **¿Tienen un sistema escrito de validación de carga semanal?** (Sí/No)
4. **¿Los entrenadores del staff toman decisiones de ajuste con el mismo criterio?** (Sí/No)

### Argumento de ROI si la respuesta a 3 y 4 es NO

```
Riesgo sistémico por ciclo:
  Si N=10 atletas y cada uno tiene 1 semana/mes de entrenamiento
  sub-óptimo por ajustes intuitivos:
  = 10 atletas × 1 semana × 4 semanas/mes = 40 días de entrenamiento
    que podrían tener criterio y no lo tienen

Costo del Sistema de Gobernanza (Tier 2):
  USD 500/mes × 3 meses = USD 1.500 total

Pregunta para el Director Técnico:
  "Si el sistema recupera 1 día de entrenamiento efectivo por atleta por semana,
  ¿cuánto vale eso en términos de resultado en torneo para la academia?"
```

---

## Modelo para centros de performance de golf (PGA / tour de desarrollo)

### Variables a identificar

1. **¿El atleta tiene sponsor o inversores que piden rendimiento medible?** (Sí/No)
2. **¿El preparador físico tiene que presentar informes de progreso al tour o a la academia?** (Sí/No)
3. **¿Cuál es la ventana de preparación antes de la próxima clasificatoria?** (semanas)

### Argumento de ROI en contexto de sponsor / inversores

```
En golf de tour, el inversor o sponsor no pide resultados de torneo inmediatos.
Pide evidencia de que el proceso de preparación es profesional y controlado.

La Auditoría VCV produce dos cosas que un preparador puede mostrar a un sponsor:
  1. Una Variable Crítica documentada por bloque
  2. Un esquema IF → THEN escrito que justifica cada decisión de carga

Eso no es un dashboard. Es gobernanza de proceso.
Y la gobernanza de proceso es lo que convierte la incertidumbre en argumento defendible.
```

**Frase para el cierre con este perfil:**
> "En el alto rendimiento, 'me parece' es una respuesta inaceptable para un inversor.
> La Auditoría convierte el proceso de entrenamiento en algo que podés defender con datos."

---

## Reglas de uso del ROI en la conversación

1. **Nunca dar el número primero.** Primero identificar la brecha, luego cuantificarla en días o torneos, luego mencionar el precio.
2. **Nunca comparar el precio con otras consultorías.** El precio se justifica por el entregable concreto, no por benchmarks del mercado.
3. **Usar el número de días perdidos, no el costo monetario.** Los entrenadores no piensan en dinero cuando piensan en entrenamiento. Piensan en tiempo y en resultados.
4. **El ROI de la Gobernanza es diferente al de la Auditoría.** La Auditoría tiene ROI inmediato (14 días, esquema listo). La Gobernanza tiene ROI compuesto (staff autónomo, consistencia a lo largo del año).
