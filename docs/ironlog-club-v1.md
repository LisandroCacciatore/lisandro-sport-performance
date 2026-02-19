# IronLog Club v1 (alternativa para evaluar)

> Documento de contraste para decisión estratégica. No recomendado como primera ejecución si el foco es validar rápido.

## 1) Tesis de producto
Plataforma para clubes multideporte con roles (admin/profesor/alumno), asignación por actividad y comparativa anónima a nivel club.

## 2) Alcance funcional (alto)
1. Registro/login.
2. Roles y permisos (admin/profesor/alumno).
3. Alumno con múltiples actividades.
4. Profesor distinto por actividad.
5. Plantillas prehechas + edición de planes.
6. Comparativa global anónima del club.
7. Panel de administración de asignaciones.

## 3) Complejidad y costo
- Mayor complejidad de permisos y seguridad de datos.
- Mayor complejidad de modelo relacional.
- Time-to-market más lento.
- Más riesgo de construir sin validación comercial inicial.

## 4) Riesgo de producto
Puede desalinearse con el posicionamiento actual de IronLog orientado a coaches de fuerza.

## 5) Stack recomendado (si se elige este camino)
- Prioridad a modelo relacional:
  - Supabase/Postgres **o**
  - Stack GCP con SQL relacional desde inicio.
- Mantener diseño multi-tenant y trazabilidad por versión de plan.

## 6) Cuándo elegir esta opción
- Si ya hay 2-3 clubes comprometidos a pagar por flujo multideporte.
- Si el equipo acepta un roadmap más largo y mayor esfuerzo de implementación.
