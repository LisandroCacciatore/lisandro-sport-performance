# IronLog Coach de Fuerza v1

## 1) Tesis de producto
**IronLog v1** ayuda a coaches de fuerza (powerlifting/weightlifting) a pasar del registro manual al seguimiento accionable en menos de 30 segundos por sesión y atleta.

## 2) ICP (cliente ideal)
- Coach individual o staff pequeño (1-3 coaches).
- Maneja 10-50 atletas.
- Usa WhatsApp + planillas dispersas.
- Le cuesta responder: “¿quién progresa?”, “¿a quién ajustar hoy?”, “¿qué se cumplió esta semana?”.

## 3) Problema principal (v1)
Los datos existen, pero están desordenados y llegan tarde para decidir.

## 4) Propuesta de valor
- **Carga rápida** de sesión por atleta.
- **Planillas prehechas** reutilizables.
- **Edición ligera** para adaptar sin romper estructura.
- **Seguimiento semanal** con alertas simples.
- **Comparativa mínima** entre atletas del coach.

## 5) Alcance funcional (MVP brutalmente simple)
### Incluye
1. Registro/login por email.
2. Alta y gestión básica de atletas.
3. Biblioteca de planillas prehechas.
4. Asignación de plan a atleta.
5. Edición ligera del plan asignado (sin builder completo):
   - % intensidad
   - series/reps por bloque
   - días por semana
   - notas
6. Registro básico de cumplimiento de sesión (hecho/no hecho + carga).
7. Alertas simples:
   - 7 días sin registro
   - 2 semanas sin mejora en métrica principal
8. Comparativa mínima:
   - ranking interno por e1RM/indicador elegido
   - tendencia semanal

### No incluye (explícitamente fuera de v1)
- Multi-club completo.
- Profesor distinto por actividad para un mismo alumno.
- Workflow admin avanzado.
- Auditoría detallada por evento.
- Motor avanzado de comparativa global de club.
- Constructor libre de plantillas desde cero.

## 6) Métricas de éxito (primeros 60 días)
- Activación: % coaches que cargan 1° atleta + 1° plan en 24h.
- Adopción: sesiones registradas/semana por coach.
- Retención: coaches activos semana 4.
- Valor: % coaches que reportan “decido más rápido” en encuesta corta.

## 7) Pricing recomendado (v1)
- **Free**: hasta 3 atletas, historial 12 semanas.
- **Pro**: atletas ilimitados, alertas + comparativa mínima.
- **Founders**: precio reducido para primeros 10 coaches por 12 meses.

## 8) Riesgos
- Querer meter features “de club” demasiado pronto.
- Sobrecargar UX con demasiadas métricas.
- Falta de disciplina de registro por parte de atletas/coaches.

## 9) Stack recomendado (foco coach, velocidad de salida)
- **Frontend**: web app ligera (mismo stack actual o migración gradual).
- **Backend**: Firebase (Auth + Firestore + Functions) para acelerar salida.
- **Analítica**: eventos básicos + export mensual.

## 10) Plan de entrega (3 sprints)
- **Sprint 1**: auth, atletas, estructura base de planillas.
- **Sprint 2**: asignación de plan + edición ligera + logging de sesión.
- **Sprint 3**: alertas simples + comparativa mínima + hardening permisos.
