# Glosario de Vocabulario — Lisandro Cacciatore / IronLog

## Términos aprobados (usar siempre)

| Término | Definición en contexto |
|---|---|
| **Variable Crítica Validada (VCV)** | La única métrica que realmente gobierna las decisiones de carga en un bloque dado. No es cualquier dato: es el dato cuyo comportamiento cambia la decisión del lunes. |
| **Regla IF → THEN** | Protocolo de decisión explícito. IF [la VCV cae X%] THEN [se interviene con Y]. Reemplaza el "me parece". |
| **Umbral de variación** | Rango de variabilidad normal dentro del cual no se interviene. Define cuándo una señal es ruido y cuándo es información. |
| **Auditoría VCV** | Servicio de 14 días. Diagnóstico del sistema de decisión actual + diseño del esquema IF → THEN + transferencia al staff. |
| **Gobernanza de datos deportivos** | Arquitectura de roles y responsabilidades para que los datos pasen de registro a criterio. Quién registra, quién interpreta, quién decide. |
| **Ruido blanco estadístico** | Datos que se registran pero que no cambian ninguna decisión. Ejemplo: HRV de wearables comerciales sin umbral definido. |
| **Señal** | Dato que, cuando se sale del umbral, activa una intervención concreta. |
| **Criterio operativo** | Conjunto de reglas escritas que permiten tomar decisiones de forma consistente, independientemente de quién esté en el cuerpo técnico. |
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

---

## Traducción de métricas a lenguaje de negocio

| Métrica técnica | Cómo comunicarla a un director / sponsor |
|---|---|
| HRV bajo dos días seguidos sin intervención | "2 días de entrenamiento recuperados por semana si se actúa a tiempo" |
| sRPE sin umbral definido | "30 minutos de reunión técnica que no cambian ninguna decisión" |
| AMRAP sin criterio de progresión | "Ciclos completados sin saber si el TM es adecuado para el siguiente" |
| Ausencia de VCV en el bloque | "Sistema que produce datos pero no produce decisiones" |
| VCV validada con umbral | "Intervención temprana antes de que el atleta llegue al tope visible" |

---

## Frases de posicionamiento listas para usar

**Para el gancho central:**
> "El simulador te da los números. El criterio para usarlos bien es otra conversación."

**Para la propuesta de valor:**
> "No diseño programas. Reviso el sistema con el que se toman las decisiones sobre esos programas."

**Para el perfil del cliente ideal:**
> "Para preparadores que ya hacen bien su trabajo y quieren poder demostrarlo."

**Para el cierre:**
> "No vendés dashboards. Vendés claridad operativa."

**Para diferenciar de herramientas:**
> "IronLog es el instrumento. El criterio es el servicio."
