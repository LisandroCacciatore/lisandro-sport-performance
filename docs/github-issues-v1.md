# GitHub Issues listos para ejecutar (IronLog v1 Coach de Fuerza)

Este archivo contiene issues listas para copiar/pegar en GitHub.
Formato recomendado: 1 issue por fase.

---

## Issue 1 — Fase 0: Alinear copy y oferta al MVP real

**Título sugerido**
`Fase 0: Alinear landing de IronLog al foco Coach de Fuerza v1`

**Descripción**
Ajustar mensajes de `ironlog/index.html` y contenidos relacionados para que comuniquen exactamente el alcance v1 (coach de fuerza) sin prometer features fuera de MVP.

**Checklist**
- [ ] Actualizar hero y subtítulo con foco coach de fuerza.
- [ ] Revisar sección de features para reflejar MVP real.
- [ ] Ajustar pricing para evitar promesas no implementadas.
- [ ] Mantener coherencia con post de contexto en blog.

**Criterios de aceptación**
- [ ] En primer scroll se entiende “para quién es” y “qué resuelve”.
- [ ] No aparecen claims de funcionalidades fuera de v1.
- [ ] El CTA principal es único y claro (lista de espera o acceso temprano).

**Archivos a tocar (primera pasada)**
- `ironlog/index.html`
- `blog/automatizacion/construyendo-ironlog.html`

**Labels sugeridos**
`product` `copy` `frontend`

---

## Issue 2 — Fase 1: Auth + atletas (base funcional)

**Título sugerido**
`Fase 1: Implementar auth y gestión base de atletas`

**Descripción**
Construir flujo mínimo para que un coach pueda registrarse, iniciar sesión y gestionar su lista de atletas.

**Checklist**
- [ ] Configurar backend base (Firebase recomendado en v1).
- [ ] Implementar registro/login por email.
- [ ] Crear entidad `users` con rol coach.
- [ ] Crear entidad `athletes`.
- [ ] Reglas de acceso: coach ve solo sus atletas.
- [ ] UI mínima: login, registro, listado y alta/edición de atleta.

**Criterios de aceptación**
- [ ] Un coach nuevo crea cuenta e inicia sesión.
- [ ] Puede crear, editar y listar atletas propios.
- [ ] No puede ver atletas de otros usuarios.

**Dependencia**
- Requiere Issue 1 cerrada.

**Labels sugeridos**
`backend` `auth` `frontend` `mvp`

---

## Issue 3 — Fase 2: Planillas prehechas + asignación

**Título sugerido**
`Fase 2: Biblioteca de planillas y asignación a atleta`

**Descripción**
Crear catálogo inicial de plantillas y permitir asignarlas a un atleta.

**Checklist**
- [ ] Crear estructura `plan_templates`.
- [ ] Cargar 3-5 plantillas de fuerza iniciales.
- [ ] Crear `assigned_plans` como instancia por atleta.
- [ ] UI de biblioteca de planillas.
- [ ] Acción “Asignar planilla a atleta”.
- [ ] Vista de plan activo por atleta.

**Criterios de aceptación**
- [ ] Coach puede elegir plantilla y asignarla a un atleta.
- [ ] El atleta queda con un plan activo visible en sistema.

**Dependencia**
- Requiere Issue 2 cerrada.

**Labels sugeridos**
`backend` `frontend` `training-plans` `mvp`

---

## Issue 4 — Fase 3: Edición ligera + registro de sesión

**Título sugerido**
`Fase 3: Permitir edición ligera de plan y logging de sesiones`

**Descripción**
Habilitar personalización acotada de un plan asignado y registro básico de cumplimiento de sesión.

**Checklist**
- [ ] Permitir editar: intensidad, series/reps, frecuencia, notas.
- [ ] Bloquear estructura avanzada (sin builder libre en v1).
- [ ] Crear `session_logs`.
- [ ] UI de edición ligera + UI de registro de sesión.

**Criterios de aceptación**
- [ ] Coach modifica campos permitidos del plan activo.
- [ ] Puede registrar sesión (hecho/no hecho + carga).
- [ ] Historial de sesiones visible por atleta.

**Dependencia**
- Requiere Issue 3 cerrada.

**Labels sugeridos**
`backend` `frontend` `mvp` `usability`

---

## Issue 5 — Fase 4: Seguimiento y alertas simples

**Título sugerido**
`Fase 4: Dashboard básico con alertas accionables`

**Descripción**
Agregar indicadores mínimos y alertas de intervención rápida.

**Checklist**
- [ ] Indicadores semanales por atleta.
- [ ] Alerta: 7 días sin registro.
- [ ] Alerta: 2 semanas sin mejora en métrica principal.
- [ ] Dashboard con estado (ok/atención).

**Criterios de aceptación**
- [ ] Coach identifica en menos de 2 minutos qué atleta requiere acción.
- [ ] Alertas se generan con reglas definidas y visibles.

**Dependencia**
- Requiere Issue 4 cerrada.

**Labels sugeridos**
`analytics` `frontend` `backend` `mvp`

---

## Issue 6 — Fase 5: Comparativa mínima entre atletas

**Título sugerido**
`Fase 5: Comparativa mínima (ranking + tendencia)`

**Descripción**
Implementar vista simple de comparación interna por coach, sin motor complejo de club.

**Checklist**
- [ ] Definir 1-2 métricas comparables (ej: e1RM, adherencia).
- [ ] Consulta/endpoint de ranking por período.
- [ ] UI comparativa simple: ranking + tendencia semanal.

**Criterios de aceptación**
- [ ] Coach puede ordenar atletas por métrica seleccionada.
- [ ] Ve tendencia semanal para detectar progreso/estancamiento.
- [ ] No se incluyen comparativas globales multi-club en v1.

**Dependencia**
- Requiere Issue 5 cerrada.

**Labels sugeridos**
`analytics` `frontend` `backend` `mvp`

---

## Recomendación operativa (para que no se haga eterno)

- Ejecutar **de a un issue por vez**.
- Abrir PR corto por issue (máximo 1-2 archivos críticos por PR al principio).
- Cerrar con demo funcional + checklist de aceptación tildada.
- Si aparece trabajo fuera de alcance, moverlo al backlog y no bloquear el issue actual.
