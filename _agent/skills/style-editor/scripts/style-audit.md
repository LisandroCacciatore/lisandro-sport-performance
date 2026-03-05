# Script: Auditoría de Estilo

Usar cuando el usuario pase un archivo HTML y pida revisar
si está visualmente consistente con el sistema de diseño del sitio.

---

## Paso 0 — Identificar el buyer al que va dirigida la página

Antes de cualquier revisión técnica, determinar el buyer objetivo del archivo.
El buyer condiciona qué componentes son apropiados y cuáles son errores de calibración.

```
¿A quién está dirigida esta página?
  → Coordinador de Rendimiento / Preparador Físico
     → Densidad técnica alta es correcta.
        Badges de estado, tablas, callout de VCV: apropiados.
        Verificar que los datos estén en font-mono.

  → Director Deportivo / Manager del Club
     → Densidad técnica alta es un ERROR de calibración.
        Sin badges de estado técnicos en el body copy.
        Sin tablas de métricas. Sin jargon en titulares.
        Los callouts de consecuencia institucional son correctos.

  → Dueño de Academia
     → Similar al Director. El output (reporte, esquema) puede mostrarse visualmente.
        El proceso interno no. Sin badges técnicos sin contexto.
        El callout oscuro de servicio con copy de diferenciación es apropiado.

  → Página universal (index, sobre-mi, contacto)
     → Usar componentes de densidad media. El callout oscuro universal es correcto.
        El copy en comentarios de las variantes por buyer define cuál activar.
```

---

## Paso 1 — Escaneo de patrones prohibidos

Buscar en el HTML cualquiera de estos patrones:

```
CRÍTICO (corregir siempre):
  ❌ rounded-2xl, rounded-3xl, rounded-full (en contenedores)
  ❌ bg-gradient-*
  ❌ shadow-xl, shadow-2xl, shadow-lg, shadow-md
  ❌ text-blue-*, text-gray-*, text-slate-* (colores hardcodeados en lugar de tokens)
  ❌ bg-blue-*, bg-gray-*, bg-slate-* (fondos hardcodeados)

REVISAR (evaluar contexto):
  ⚠️ rounded-lg (aceptable solo en inputs o elementos muy pequeños)
  ⚠️ text-white (solo válido sobre fondos oscuros: bg-primary, bg-ink, bg-dark, bg-success)
  ⚠️ font-extrabold (solo válido en el logo/marca)
  ⚠️ Colores de estado (success, warning, error) en contexto no relacionado con validación
```

---

## Paso 2 — Verificación de jerarquía tipográfica

```
✅ H1/H2/H3 usan font-heading
✅ Datos numéricos usan font-mono
✅ Labels técnicos usan: text-[10px] font-mono font-bold text-muted uppercase tracking-widest
✅ Párrafos usan text-sm text-body leading-relaxed (o variante)
✅ No hay mezcla de font-heading y font-mono en el mismo elemento
```

---

## Paso 3 — Verificación de estructura de componentes

```
✅ Cards usan bg-surface (no bg-white o bg-gray-50)
✅ Fondos de página usan bg-canvas
✅ Bordes usan border-border (no border-gray-200 ni border-slate-200)
✅ Sombras usan shadow-structural
✅ Los botones de acción respetan el orden: consulta → descarga
✅ Los badges de estado están correctamente clasificados (primary/warning/error/success)
```

---

## Paso 4 — Verificación de calibración por buyer

```
Si la página es para Director Deportivo o Dueño de Academia:
  ✅ ¿Los titulares hablan de consecuencia institucional, no de métricas técnicas?
  ✅ ¿No hay badges de estado semántico en el body copy sin contexto?
  ✅ ¿Los párrafos son cortos y escaneables (máx. 3 líneas)?
  ✅ ¿El CTA es visible por encima del fold?
  ✅ ¿El callout oscuro usa el copy de variante DECISOR (no el de TÉCNICO)?

Si la página es para Coordinador / PF:
  ✅ ¿Hay al menos un callout de VCV o tabla IF → THEN visible?
  ✅ ¿Los datos están en font-mono?
  ✅ ¿Las señales de ruptura están presentes con diagnóstico concreto?
  ✅ ¿El CTA de consulta aparece al final de la sección técnica más relevante?

Si el PF es el lector pero el Director aprueba la compra:
  ✅ ¿Hay algún elemento (sección, callout, o párrafo) que le dé al PF
     argumentos para la conversación interna con su director?
     Ejemplo: "Cómo presentarlo al cuerpo técnico" o
     "Al terminar, el esquema es del staff, no del consultor."
```

---

## Output de la auditoría

```
## Auditoría de Estilo — [NOMBRE DEL ARCHIVO]

### Buyer identificado
[Buyer al que va dirigida la página y si la calibración es correcta]

### Errores de calibración de buyer
[Componentes técnicos usados en una página para decisores, o viceversa]

### Patrones prohibidos encontrados
[Lista de instancias con descripción de dónde aparece]

### Inconsistencias tipográficas
[Elementos con tipografía incorrecta]

### Inconsistencias estructurales
[Componentes que no siguen los patrones del sistema]

### Correcciones sugeridas
[Lista priorizada del más al menos crítico]
```

---

## Correcciones comunes

| Problema encontrado | Corrección |
|---|---|
| `rounded-2xl` en una card | Cambiar a `rounded` |
| `shadow-lg` en un panel | Cambiar a `shadow-structural` |
| `bg-gray-50` como fondo de sección | Cambiar a `bg-surface` |
| `text-gray-500` como texto secundario | Cambiar a `text-muted` |
| `border-gray-200` | Cambiar a `border-border` |
| `text-blue-600` en un link | Cambiar a `text-primary` |
| `bg-blue-50` en un callout | Cambiar a `bg-primary-bg` |
| Botón de descarga como CTA principal | Mover a segunda posición |
| Badge técnico en página de Director | Evaluar si aporta semántica. Si no, eliminar o reemplazar por card de consecuencia institucional |
| Callout oscuro con copy técnico en página de Dueño | Activar la variante de copy DECISOR en comentarios del componente |
| Párrafos de 5+ líneas en página de Director | Dividir o reducir. El Director escanea. |

---

## Cuándo un componente pasa la auditoría

Un componente está bien cuando:

1. No tiene ningún patrón prohibido
2. Es visualmente indistinguible del estilo del resto del sitio
3. Los colores comunican estado, no decoración
4. Los datos están en Fira Code
5. Los títulos están en IBM Plex Sans
6. El botón de mayor jerarquía lleva al lead/consulta, no a la descarga
7. La densidad técnica corresponde al buyer al que va dirigida la página
8. Si el lector es el PF y el decisor es otro, hay al menos un elemento    que equipa al PF para la conversación interna