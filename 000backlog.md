# Backlog IronLog — Master Task List
*Generado desde sesión de arquitectura de producto*

---

## Criterio de priorización

Cada tarea responde a una sola pregunta: **¿esto me acerca a cobrar o a mostrar algo que convenza?**
Si no, baja en la lista.

---

## 🔴 SPRINT 0 — Mínimo para salir a ofertar
*Objetivo: tener algo funcional que mostrar en una propuesta o llamada*

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 1 | Auto-render inicial en `ironlog/ss.html` (dashboard visible sin click) | M | — |
| 2 | Auto-render inicial en `ironlog/cube.html` | M | — |
| 3 | CTA visible en `ironlog/wendler.html` que dispare `openLeadModal()` | S | — |
| 4 | Crear página `/servicios` con dos secciones: Auditoría y Programa | M | — |

La página `/servicios` es el agujero más grande. Sin ella, todo lo demás no tiene destino.

**Estructura mínima de `/servicios`:**
- Header: *"Dos formas de dejar de improvisar con tus datos."*
- Sección A — Auditoría: qué hacés, para quién, qué entrega, CTA al formulario
- Sección B — Programa modular: los 3 módulos + bundle, CTA a lista de espera o Gumroad

---

## 🟠 SPRINT 1 — Infraestructura de adquisición
*Objetivo: el sistema de mini-auditoría capturando leads reales*

### Formulario de mini-auditoría

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 5 | Construir formulario HTML completo en `/auditoria` | M | Sprint 0 |
| 6 | Bloque 0: nombre, mail, rol (select con 4 opciones) | S | #5 |
| 7 | Bloque 1: sistema actual (atletas, herramientas, antigüedad) | S | #5 |
| 8 | Bloque 2: problema real (situación frecuente, tiempo, decisión en el momento) | S | #5 |
| 9 | Bloque 3: nivel técnico (comodidad con datos, uso de simuladores) | S | #5 |
| 10 | Bloque 4: contexto y expectativa (texto libre + apertura a herramientas) | S | #5 |
| 11 | Honeypot anti-spam en el formulario | S | #5 |
| 12 | Error inline (no alerts) en campos obligatorios | S | #5 |

### Workflow n8n

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 13 | Nodo 1: Webhook que recibe el formulario | S | #5 |
| 14 | Nodo 2: Validar campos obligatorios (mail + rol) | S | #13 |
| 15 | Nodo 3: Calcular score de fricción operativa (tiempo + decisión + sistema) | M | #14 |
| 16 | Nodo 4: Calcular nivel técnico (bajo / medio / alto) | S | #14 |
| 17 | Nodo 5: SWITCH de segmentación → 4 ramas (Team / RPE→Team / Bloque / Mixed) | M | #15 |
| 18 | Nodo 6: Crear/actualizar contacto en Mailchimp con merge fields y tags | M | #17 |
| 19 | Nodo 7: Espera de 2 minutos | S | #18 |
| 20 | Nodo 8: Guardar estado del lead en Google Sheets (CRM mínimo) | M | #18 |
| 21 | Nodo 9: Disparar Mail 1 via Mailchimp API según tag de segmento | M | #20 |
| 22 | Nodo 10: Wait 3 días → disparar Mail 2 | M | #21 |
| 23 | Nodo 11: Wait 7 días → disparar Mail 3 | M | #22 |

### Secuencia de mails (Mailchimp)

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 24 | Mail 1 — Diagnóstico personalizado (x3 versiones por segmento) | M | #17 |
| 25 | Mail 2 — Contenido técnico profundo sin venta (x3 versiones) | M | #17 |
| 26 | Mail 3 — Oferta directa con CTA a Gumroad (x2 versiones: Team / Bloque) | M | #17 |

---

## 🟡 SPRINT 2 — Tools IronLog (producto vendible)
*Objetivo: tener las dos tools publicadas en Gumroad*

### Setup de infraestructura de venta

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 27 | Crear cuenta en Gumroad | S | — |
| 28 | Crear producto "IronLog Team" en Gumroad (USD 20) | S | #38 |
| 29 | Crear producto "IronLog Bloque" en Gumroad (USD 20) | S | #45 |
| 30 | Crear bundle "IronLog Bundle" en Gumroad (USD 35) | S | #28 #29 |
| 31 | Webhook Gumroad → n8n → Mailchimp (tagear compradores) | M | #30 |

### IronLog Team — Google Sheets

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 32 | Diseñar estructura de 4 hojas (Dashboard / Datos / Config / Instrucciones) | M | — |
| 33 | Hoja Config: nombres de atletas + ejercicios trazadores (hasta 15 atletas, 3 ejercicios) | S | #32 |
| 34 | Hoja Datos: entrada por sesión (atleta, ejercicio, peso, series, reps, RPE) | S | #32 |
| 35 | Apps Script: `calcularCargaRelativa()` (peso × volumen × factor RPE) | M | #34 |
| 36 | Apps Script: `asignarSemaforo()` (verde / amarillo / rojo por atleta) | M | #35 |
| 37 | Apps Script: `sugerirCargaProxima()` (basado en RPE + carga relativa) | M | #36 |
| 38 | Hoja Dashboard: vista comparativa del grupo + semáforos | M | #37 |
| 39 | Apps Script: trigger `onEdit()` para actualizar en tiempo real | S | #38 |
| 40 | Hoja Instrucciones: guía de uso (no tocar, texto plano) | S | #38 |
| 41 | PDF de una página: link al Sheet + instrucciones de copia para Gumroad | S | #40 |

### IronLog Bloque — Google Sheets

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 42 | Diseñar estructura de 4 hojas (Dashboard / Entrada semanal / Config / Instrucciones) | M | — |
| 43 | Hoja Config: fechas de competencia (hasta 2) + duración de bloques + ejercicio trazador | S | #42 |
| 44 | Hoja Entrada semanal: RPE promedio semanal + carga registrada | S | #42 |
| 45 | Apps Script: `distribuirBloques()` (acumulación / intensificación / realización desde fecha competencia hacia atrás) | M | #44 |
| 46 | Apps Script: `calcularDesfase()` (fatiga real vs fase esperada) | M | #45 |
| 47 | Apps Script: `proyectarPico()` ajustada por RPE real | M | #46 |
| 48 | Apps Script: `alertarDesfase()` si hay divergencia plan vs ejecución | S | #47 |
| 49 | Hoja Dashboard: distribución de bloques + semáforo de alineación + proyección de pico | M | #48 |
| 50 | Hoja Instrucciones: guía de uso | S | #49 |
| 51 | PDF de una página: link al Sheet + instrucciones de copia para Gumroad | S | #50 |

---

## 🟢 SPRINT 3 — Curso grabado (Módulo 1 primero)
*Objetivo: lanzar primera cohorte del Módulo 1 a precio de lanzamiento*

### Decisión de plataforma de curso

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 52 | Evaluar y elegir plataforma: Gumroad (simple, ya lo tenés) vs Hotmart vs Teachable free | S | — |
| 53 | Crear producto "Módulo 1 — Decisiones" en plataforma elegida (USD 97 / lanzamiento USD 67) | S | #52 |

### Módulo 1 — Decisiones (USD 97)
*"Tomá mejores decisiones de carga sin depender de intuición"*
*4 semanas de material pregrabado. Clases de 15–20 min.*

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 54 | Guión Semana 1: el problema del sistema intuitivo (3 clases) | M | — |
| 55 | Guión Semana 2: los datos mínimos que necesitás (3 clases) | M | #54 |
| 56 | Guión Semana 3: leer señales de fatiga con criterio + IronLog Team como práctica (3 clases) | M | #55 |
| 57 | Guión Semana 4: tomar decisiones en condiciones reales (3 clases) | M | #56 |
| 58 | Grabar Semana 1 (3 videos × ~18 min) | L | #54 |
| 59 | Grabar Semana 2 | L | #55 |
| 60 | Grabar Semana 3 | L | #56 |
| 61 | Grabar Semana 4 | L | #57 |
| 62 | Edición básica de los 12 videos (cortes, captions) | L | #58 #59 #60 #61 |
| 63 | Diseñar las 4 entregas prácticas (una por semana) | M | #57 |
| 64 | Landing page del Módulo 1 con CTA a Gumroad/plataforma | M | #53 |
| 65 | Dar acceso gratuito a 3 personas del nicho a cambio de feedback y testimonio | S | #62 |
| 66 | Incorporar feedback + publicar versión final | M | #65 |

### Módulo 2 — Herramientas (USD 127)
*Iniciar solo después de validar Módulo 1*

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 67 | Guiones Semanas 1–5 (Sheets avanzado / SQL / Python / integración / stack personal) | L | #66 |
| 68 | Grabación y edición (20 videos × ~20 min) | L | #67 |
| 69 | Dataset real deportivo para prácticas del módulo | M | #67 |
| 70 | Landing page Módulo 2 | S | #68 |

### Módulo 3 — Arquitectura (USD 197)
*Iniciar solo después de tener los primeros compradores del Módulo 2*

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 71 | Guiones Semanas 1–6 (modelado / diseño para múltiples usuarios / automatización / iteración / defensa) | L | #70 |
| 72 | Grabación y edición (24 videos × ~22 min) | L | #71 |
| 73 | Proyecto integrador: instrucciones + rúbrica de evaluación | M | #71 |
| 74 | Diseñar certificado de finalización | S | — |
| 75 | Landing page Módulo 3 + Bundle Postgrado (USD 349) | M | #72 |

---

## 🔵 SPRINT 4 — SEO y autoridad editorial
*Objetivo: que el tráfico orgánico alimente el sistema de adquisición*
*Este sprint puede correr en paralelo con Sprint 2 y 3*

| # | Tarea | Tamaño | Dependencia |
|---|-------|--------|-------------|
| 76 | Interlinking "También puede interesarte" en los 7 artículos (curado manual) | M | — |
| 77 | Footer largo consistente en los 7 artículos | S | — |
| 78 | OG image real (texto sobre fondo oscuro, sin mockups) | S | — |
| 79 | JSON-LD expandido en home/blog (Service, ProfessionalService, Person) | M | — |
| 80 | Script o hook de deploy para automatizar `<lastmod>` en sitemap | M | — |
| 81 | aria-label en `id="problema"` en contacto.html | S | — |

---

## Modelo de precios definitivo

| Producto | Precio | Neto (Gumroad 10%) |
|----------|--------|-------------------|
| IronLog Team | USD 20 | USD 18 |
| IronLog Bloque | USD 20 | USD 18 |
| Bundle Tools | USD 35 | USD 31.50 |
| Módulo 1 — Decisiones | USD 97 | USD 87.30 |
| Módulo 2 — Herramientas | USD 127 | USD 114.30 |
| Módulo 3 — Arquitectura | USD 197 | USD 177.30 |
| Bundle Postgrado (3 módulos) | USD 349 | USD 314.10 |
| Auditoría (servicio) | USD 400 | — (pago directo) |

---

## Stack técnico (todo free tier)

| Capa | Herramienta | Costo |
|------|-------------|-------|
| Tools | Google Sheets + Apps Script | $0 |
| Automatización | n8n (ya hosteado en GCloud) | $0 |
| Mailing | Mailchimp free (hasta 500 contactos) | $0 |
| CRM mínimo | Google Sheets | $0 |
| Pagos | Gumroad | 10% por transacción |
| Curso | Gumroad o Hotmart | 10% por transacción |
| Hosting | GCloud (ya tenés) | $0 |

Cuando superés 500 contactos en Mailchimp: migrar a Brevo free (2.000 contactos gratis).

---

## Formato del curso: actualización

**Formato final: 100% grabado (asincrónico)**
Sin compromisos de horario. Sin cohortes en vivo.

Excepción: una clase abierta y gratuita a modo promocional por módulo, sin fecha fija, grabada y publicada después como contenido de adquisición.

Esa clase abierta cumple tres funciones simultáneas: muestra tu perfil como docente, genera contenido reutilizable, y convierte en punto de entrada al módulo.

---

## Próximas decisiones pendientes (no tareas, son bifurcaciones)

1. **Plataforma del curso** (#52): Gumroad es la opción más simple si ya lo usás para las tools. Hotmart tiene mejor soporte para el mercado hispanohablante y gestión de afiliados.

2. **Nombre comercial del programa**: "Sistema de Datos para el Rendimiento Deportivo" es descriptivo pero puede acortarse. Decidir antes de publicar cualquier landing.

3. **Sesión promocional**: cuándo darla y si se graba o es en vivo. Afecta el cronograma del Módulo 1.
