# Script: Auditoría de Estilo

Usar cuando el usuario pase un archivo HTML y pida revisar
si está visualmente consistente con el sistema de diseño del sitio.

---

## Proceso de auditoría en 3 pasos

### Paso 1 — Escaneo de patrones prohibidos

Buscar en el HTML cualquiera de estos patrones:

```
CRÍTICO (corregir siempre):
  ❌ rounded-2xl, rounded-3xl, rounded-full (en contenedores)
  ❌ bg-gradient-*
  ❌ shadow-xl, shadow-2xl, shadow-lg, shadow-md
  ❌ text-blue-*, text-gray-*, text-slate-* (colores hardcodeados en lugar de tokens)
  ❌ bg-blue-*, bg-gray-*, bg-slate-* (fondos hardcodeados)

REVISAR (evaluar contexto):
  ⚠️ rounded-lg (aceptable solo si el componente es un input o elemento muy pequeño)
  ⚠️ text-white (solo válido sobre fondos oscuros: bg-primary, bg-ink, bg-dark, bg-success)
  ⚠️ font-extrabold (solo válido en el logo/marca, no en contenido)
  ⚠️ Colores de estado (success, warning, error) en contexto no relacionado con validación de carga
```

### Paso 2 — Verificación de jerarquía tipográfica

Verificar que:
```
✅ H1/H2/H3 usan font-heading
✅ Datos numéricos usan font-mono
✅ Labels técnicos usan: text-[10px] font-mono font-bold text-muted uppercase tracking-widest
✅ Párrafos usan text-sm text-body leading-relaxed (o variante)
✅ No hay mezcla de font-heading y font-mono en el mismo elemento
```

### Paso 3 — Verificación de estructura de componentes

Verificar que:
```
✅ Cards usan bg-surface (no bg-white o bg-gray-50)
✅ Fondos de página usan bg-canvas
✅ Bordes usan border-border (no border-gray-200 ni border-slate-200)
✅ Sombras usan shadow-structural (no shadow-md ni similar)
✅ Los botones de acción respetan el orden: consulta → descarga
✅ Los badges de estado están correctamente clasificados (primary/warning/error/success)
```

---

## Output de la auditoría

```
## Auditoría de Estilo — [NOMBRE DEL ARCHIVO]

### Patrones prohibidos encontrados
[Lista de instancias con línea aproximada o descripción de dónde aparece]

### Inconsistencias tipográficas
[Lista de elementos con tipografía incorrecta]

### Inconsistencias estructurales
[Lista de componentes que no siguen los patrones del sistema]

### Correcciones sugeridas
[Lista priorizada de cambios a aplicar, del más al menos crítico]
```

---

## Correcciones comunes y su solución

| Problema encontrado | Corrección |
|---|---|
| `rounded-2xl` en una card | Cambiar a `rounded` |
| `shadow-lg` en un panel | Cambiar a `shadow-structural` |
| `bg-gray-50` como fondo de sección | Cambiar a `bg-surface` |
| `text-gray-500` como texto secundario | Cambiar a `text-muted` |
| `border-gray-200` | Cambiar a `border-border` |
| `text-blue-600` en un link | Cambiar a `text-primary` |
| `bg-blue-50` en un callout | Cambiar a `bg-primary-bg` |
| Botón de descarga como CTA principal | Mover a segunda posición, botón de consulta primero |
| Badge verde en contexto no relacionado con validación | Evaluar si el color aporta semántica real. Si no, usar neutral. |

---

## Cuándo un componente pasa la auditoría

Un componente está bien cuando:

1. No tiene ningún patrón prohibido
2. Es visualmente indistinguible del estilo del resto del sitio
3. Los colores comunican estado, no decoración
4. Los datos están en Fira Code
5. Los títulos están en IBM Plex Sans
6. El botón de mayor jerarquía lleva al lead/consulta, no a la descarga
