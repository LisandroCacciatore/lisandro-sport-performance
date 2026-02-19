# Plan de ejecución IronLog v1 (Coach de Fuerza)

Este documento traduce la estrategia de `ironlog-coach-fuerza-v1.md` en tareas concretas para ejecutar en el proyecto actual.

## Cómo usar este plan
1. Trabajá por fases (0 → 5).
2. No avances de fase sin cumplir definición de terminado.
3. Cada tarea tiene un resultado verificable y, cuando aplica, archivo sugerido.

---

## Fase 0 — Alineación de producto y copy (1-2 días)

## Objetivo
Que el sitio público refleje exactamente el foco elegido: **coach de fuerza**.

### Tareas
- [ ] Revisar propuesta de valor principal para que no suene a club multideporte.
- [ ] Alinear hero, features y pricing con el MVP real (sin prometer features fuera de v1).
- [ ] Definir CTA principal único: `Lista de espera` o `Acceso temprano`.

### Cambios en el repo (sugeridos)
- [ ] `ironlog/index.html`
  - [ ] Ajustar texto de hero.
  - [ ] Ajustar bloque de features a alcance MVP.
  - [ ] Ajustar pricing para evitar promesas no implementadas.
- [ ] `blog/automatizacion/construyendo-ironlog.html`
  - [ ] Mantener coherencia con el alcance v1 elegido.

### Definición de terminado
- El mensaje de la landing responde en 5 segundos: “Para quién es y qué resuelve en v1”.

---

## Fase 1 — Base técnica del portal (Sprint 1)

## Objetivo
Tener autenticación y estructura mínima para operar con coaches y atletas.

### Tareas backend
- [ ] Configurar proyecto backend (Firebase recomendado para velocidad v1).
- [ ] Implementar registro/login por email.
- [ ] Definir colección/tabla `users` (rol: coach).
- [ ] Definir colección/tabla `athletes`.
- [ ] Definir reglas de acceso básicas (coach solo ve sus atletas).

### Tareas frontend
- [ ] Crear pantallas mínimas:
  - [ ] Login
  - [ ] Registro
  - [ ] Lista de atletas
  - [ ] Alta/edición de atleta

### Definición de terminado
- Un coach puede crear cuenta, loguearse y crear sus primeros atletas.

---

## Fase 2 — Planillas prehechas + asignación (Sprint 2)

## Objetivo
Que el coach pueda asignar una rutina base a un atleta.

### Tareas backend
- [ ] Crear estructura `plan_templates`.
- [ ] Cargar 3-5 plantillas iniciales (fuerza básica).
- [ ] Crear `assigned_plans` (instancia de plantilla por atleta).

### Tareas frontend
- [ ] Pantalla “Biblioteca de planillas”.
- [ ] Acción “Asignar a atleta”.
- [ ] Vista del plan activo por atleta.

### Definición de terminado
- Un coach puede seleccionar plantilla y dejar plan activo en un atleta.

---

## Fase 3 — Edición ligera + logging (Sprint 2/3)

## Objetivo
Permitir personalización mínima sin constructor libre.

### Tareas backend
- [ ] Permitir editar campos acotados del plan asignado:
  - [ ] intensidad
  - [ ] series/reps
  - [ ] frecuencia semanal
  - [ ] notas
- [ ] Crear `session_logs` para registrar cumplimiento.

### Tareas frontend
- [ ] UI para edición ligera (campos bloqueados + campos editables).
- [ ] Registro de sesión por atleta (hecho/no hecho + carga).

### Definición de terminado
- El coach adapta una plantilla y registra sesiones reales sin salir del sistema.

---

## Fase 4 — Seguimiento básico y alertas simples (Sprint 3)

## Objetivo
Dar señales accionables con muy poca complejidad.

### Tareas backend
- [ ] Generar indicadores básicos por atleta (semanal).
- [ ] Regla de alerta 1: 7 días sin registro.
- [ ] Regla de alerta 2: 2 semanas sin mejora en métrica principal.

### Tareas frontend
- [ ] Dashboard mínimo de estado (ok / atención).
- [ ] Filtros por atleta y período.

### Definición de terminado
- El coach identifica en minutos qué atleta necesita intervención.

---

## Fase 5 — Comparativa mínima (Sprint 3)

## Objetivo
Comparar atletas del mismo coach de forma simple.

### Tareas backend
- [ ] Definir 1-2 métricas comparables (ej: e1RM, adherencia semanal).
- [ ] Endpoint/consulta de ranking interno por período.

### Tareas frontend
- [ ] Vista comparativa simple:
  - [ ] ranking
  - [ ] tendencia semanal

### Definición de terminado
- El coach puede detectar rápido quién progresa y quién se estanca.

---

## Backlog fuera de v1 (no ejecutar ahora)
- [ ] Multi-profesor por atleta/actividad.
- [ ] Portal alumno con permisos avanzados.
- [ ] Comparativa global de club (anonimizada).
- [ ] Admin completo y auditoría detallada.
- [ ] Constructor libre de planillas desde cero.

---

## Checklist de release v1
- [ ] Copy de landing alineado a lo que realmente existe.
- [ ] Flujo crítico validado: registro → atleta → plan → sesión.
- [ ] 3 coaches piloto usan el flujo completo.
- [ ] Métricas base instrumentadas (activación, uso semanal, retención semana 4).
- [ ] Issues priorizados para v1.1 según feedback real.
