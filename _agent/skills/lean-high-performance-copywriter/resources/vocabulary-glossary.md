# Glosario de Vocabulario — Lisandro Cacciatore / IronLog

## Términos aprobados (usar siempre)

| Término | Definición en contexto |
|---|---|
| **Variable Crítica Validada (VCV)** | La única métrica que realmente gobierna las decisiones de carga en un bloque dado. No es cualquier dato: es el dato cuyo comportamiento cambia la decisión del lunes. |
| **Regla IF → THEN** | Protocolo de decisión explícito. IF [la VCV cae X%] THEN [se interviene con Y]. Reemplaza el "me parece". |
| **Umbral de variación** | Rango de variabilidad normal dentro del cual no se interviene. Define cuándo una señal es ruido y cuándo es información. |
| **Auditoría VCV** | Servicio de 14 días. Diagnóstico del sistema de decisión actual + diseño del esquema IF → THEN + transferencia al staff. |
| **Gobernanza de datos deportivos** | Arquitectura de roles y responsabilidades para que los datos pasen de registro a criterio. Quién registra, quién interpreta, quién decide. |
| **Criterio institucional** | Cuando el criterio de decisión pertenece al sistema del club, no a una persona. Funciona independientemente de quién esté en el staff. |
| **Ruido blanco estadístico** | Datos que se registran pero que no cambian ninguna decisión. Ejemplo: HRV de wearables comerciales sin umbral definido. |
| **Señal** | Dato que, cuando se sale del umbral, activa una intervención concreta. |
| **Criterio operativo** | Conjunto de reglas escritas que permiten tomar decisiones de forma consistente, independientemente de quién esté en el cuerpo técnico. |
| **Semáforo operativo** | Representación visual del sistema de decisión: verde (dentro del umbral, sin intervención), amarillo (señal de alerta), rojo (intervención requerida). Útil para comunicar el sistema a directores y dueños. |
| **Peaking** | Proceso de llevar al atleta a su pico de rendimiento en la fecha específica de competencia. |
| **Marginal Gains** | Mejoras del 1% en variables controlables que suman diferencia en el resultado final. |
| **Sprint Owner** | Rol en la gobernanza: quien tiene responsabilidad de decisión final sobre el bloque de entrenamiento. |
| **Data Steward** | Rol en la gobernanza: quien garantiza la calidad e integridad del registro de datos. |
| **Transferencia de criterio** | Fase final de la Auditoría VCV: el staff opera con el sistema sin dependencia del consultor. |

---

## Términos prohibidos (nunca usar)

| Evitar | Por qué | Alternativa |
|---|---|---|
| "Revolucionario" | Superlativo vacío sin mecanismo | "Sistema estructurado de decisión" |
| "Innovador" | Promesa sin evidencia | Describir el mecanismo concreto |
| "Transformar tu entrenamiento" | Lenguaje motivacional, no técnico | "Reemplazar intuición por criterio" |
| "El mejor método" | No demostrable | Ninguna. Describir qué hace, no cuán bueno es |
| "Resultados garantizados" | Promesa vacía | "Entregable concreto en 14 días" |
| "Tablita" | Infravalora el servicio | "Esquema de decisión IF → THEN" |
| "Me parece" | El gancho central del posicionamiento es eliminarlo | Siempre con dato o umbral |
| "Armar el plan" | Lenguaje amateur | "Diseño del sistema de carga" |
| "Ver cómo va" | Sin criterio, sin umbral | "Validación semanal de la VCV" |
| "Metodología probada" | Genérico y vacío | Descripción del mecanismo con nombre propio |
| "Profesionalizar" (solo) | Vago sin mecanismo | "Establecer criterio institucional compartido" |

---

## Traducción de métricas a lenguaje de negocio — por buyer

### Para Coordinador de Rendimiento / Preparador Físico

| Métrica técnica | Cómo comunicarla |
|---|---|
| HRV bajo dos días seguidos sin intervención | "2 días de entrenamiento recuperados por semana si se actúa a tiempo" |
| sRPE sin umbral definido | "30 minutos de reunión técnica que no cambian ninguna decisión" |
| AMRAP sin criterio de progresión | "Ciclos completados sin saber si el TM es adecuado para el siguiente" |
| Ausencia de VCV en el bloque | "Sistema que produce datos pero no produce decisiones" |
| VCV validada con umbral | "Intervención temprana antes de que el atleta llegue al tope visible" |

### Para Director Deportivo / Manager del Club

| Métrica técnica | Cómo comunicarla |
|---|---|
| Ausencia de criterio compartido entre preparadores | "Decisiones inconsistentes entre categorías sin posibilidad de auditarlas" |
| Tests archivados sin análisis | "Inversión en evaluación que no produce retorno institucional" |
| Lesión no anticipada | "Riesgo sistémico que un umbral de intervención hubiera detectado antes" |
| VCV validada con umbral | "Sistema de justificación ante sponsors, comisión directiva e inversores" |

### Para Dueño de Academia

| Métrica técnica | Cómo comunicarla |
|---|---|
| Proceso de decisión no documentado | "Servicio que no se puede demostrar ante un padre o inversor" |
| Tests sin reporte claro | "Evaluaciones que no se convierten en argumento de venta ni de retención" |
| Criterio institucional instalado | "Sistema que diferencia la academia de las que solo muestran resultados" |

---

## Frases de posicionamiento listas para usar

**Para el gancho central (universal):**
> "El simulador te da los números. El criterio para usarlos bien es otra conversación."

**Para la propuesta de valor (universal):**
> "No diseño programas. Reviso el sistema con el que se toman las decisiones sobre esos programas."

**Para el perfil del cliente ideal (técnico):**
> "Para preparadores que ya hacen bien su trabajo y quieren poder demostrarlo."

**Para directores y dueños:**
> "Para instituciones que quieren que el criterio sea del club, no de una persona."

**Para el cierre (universal):**
> "No vendás dashboards. Vendé claridad operativa."

**Para diferenciar de herramientas:**
> "IronLog es el instrumento. El criterio es el servicio."

**Para el Preparador Físico que quiere vender la idea internamente:**
> "No es un cambio de metodología. Es que las decisiones que ya tomás queden escritas y verificables."