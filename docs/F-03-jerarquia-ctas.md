# I-01a — Auditoría de CTAs existentes
**Lisandro Cacciatore · lisandrocacciatore.com · v1.0 · Feb 2026**

> Instrucciones para que un agente recorra todos los HTML del sitio y genere un inventario de CTAs actuales. Este inventario es prerequisito de I-01b. No modificar ningún archivo en este paso.

---

## Objetivo

Recorrer todos los HTML listados, identificar cada elemento que funciona como CTA (botón, enlace con función de acción, banner clicable) y registrar su estado actual. El output es un archivo `cta-audit.json`.

---

## Archivos a auditar

```
index.html
sobre-mi.html
servicios.html
contacto.html
blog.html
autodiagnostico.html
ironlog/index.html
ironlog/demo.html
ironlog/ss.html
ironlog/wendler.html
ironlog/cube.html
ironlog/tools.html
blog/criterio-sin-respaldo.html
blog/periodizacion-y-deteccion.html
blog/variable-critica-validada.html
blog/estancamiento-silencioso.html
blog/ironlog-en-contexto.html
```

---

## Criterio de identificación de CTAs

Un elemento es CTA si cumple al menos una de estas condiciones:

1. Es un `<a>` con clase que contenga `btn`, `button`, `cta`, `call-to-action` o similar
2. Es un `<button>` visible (no hidden, no disabled)
3. Es un `<a>` cuyo texto incluye una flecha (`→`, `>`, `»`) o un verbo de acción en imperativo
4. Está dentro de un `<section>` o `<div>` con clase que contenga `hero`, `cta`, `banner`, `footer-cta` o similar
5. Ya tiene `data-cta-level` asignado

Un `<a>` de navegación interna en el header/nav principal **no es CTA** salvo que tenga clase o atributo explícito de CTA.

---

## Estructura del output: `cta-audit.json`

```json
{
  "generated": "YYYY-MM-DD",
  "pages": [
    {
      "page": "index.html",
      "ctas": [
        {
          "id": "index-001",
          "element": "a",
          "text": "Texto visible del elemento",
          "href": "/contacto.html",
          "classes": ["btn", "btn-primary"],
          "data_cta_level": null,
          "data_cta_destination": null,
          "position": "hero",
          "visible_without_scroll": true,
          "issues": []
        }
      ]
    }
  ]
}
```

### Campos obligatorios por CTA

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | string | `{slug-página}-{número correlativo}`. Ej: `index-001`, `ironlog-ss-002` |
| `element` | string | `a`, `button`, u otro tag |
| `text` | string | Texto visible exacto del elemento (sin HTML interno) |
| `href` | string | Valor del atributo `href`. `null` si es `<button>` sin destino explícito |
| `classes` | array | Lista de clases CSS del elemento |
| `data_cta_level` | number\|null | Valor actual de `data-cta-level` si existe, `null` si no |
| `data_cta_destination` | string\|null | Valor actual de `data-cta-destination` si existe, `null` si no |
| `position` | string | Sección donde aparece: `hero`, `header`, `body`, `footer`, `modal`, `sticky`, `sidebar` |
| `visible_without_scroll` | boolean | `true` si el elemento es visible en el viewport inicial sin scroll (estimación por posición en DOM: dentro de los primeros 800px de altura de página) |
| `issues` | array | Lista de problemas detectados (ver tabla de issues abajo) |

### Códigos de issues a registrar automáticamente

| Código | Condición |
|---|---|
| `MULTIPLE_PRIMARY_ABOVE_FOLD` | Hay más de un elemento con `data-cta-level="1"` y `visible_without_scroll: true` en la misma página |
| `IRONLOG_PRIMARY_FORBIDDEN` | Elemento con `data-cta-destination="ironlog"` o `"formulario-ironlog"` tiene `data-cta-level="1"` en página no permitida |
| `NO_CTA_LEVEL` | El elemento no tiene `data-cta-level` asignado |
| `NO_CTA_DESTINATION` | El elemento no tiene `data-cta-destination` asignado |
| `TEXT_MISMATCH` | El texto del CTA no coincide con ninguna versión aprobada en F-03 Sección 3 |
| `MISSING_PRIMARY` | La página no tiene ningún elemento con `data-cta-level="1"` |
| `CONTACT_PAGE_MULTIPLE_CTAS` | La página es `contacto.html` y tiene más de un CTA visible |

---

## Instrucciones de ejecución

1. Procesar los archivos en el orden listado arriba.
2. Para cada archivo, identificar todos los CTAs según el criterio de identificación.
3. Para cada CTA, completar todos los campos del schema.
4. Registrar en `issues` todos los problemas que apliquen, puede haber más de uno por CTA.
5. Al terminar todos los archivos, agregar un bloque `"summary"` al JSON con:

```json
"summary": {
  "total_pages": 17,
  "total_ctas": 0,
  "ctas_without_level": 0,
  "ctas_without_destination": 0,
  "pages_missing_primary": [],
  "pages_with_multiple_primary_above_fold": [],
  "ironlog_primary_violations": [],
  "text_mismatches": []
}
```

6. Guardar como `cta-audit.json` en la raíz del proyecto.
7. No modificar ningún HTML en este paso.

---

*I-01a · Auditoría de CTAs · v1.0 · Feb 2026*
*Prerequisito de: I-01b Transformación de CTAs*
*Requiere: F-03 Jerarquía de CTAs v1.0*

---

# I-01b — Transformación de CTAs
**Lisandro Cacciatore · lisandrocacciatore.com · v1.0 · Feb 2026**

> Instrucciones para que un agente aplique la jerarquía definida en F-03 sobre los HTML del sitio, usando como input el inventario generado en I-01a. Este documento es ejecutable directamente: cada sección es una instrucción de transformación, no una descripción.

---

## Prerequisitos

- `cta-audit.json` generado y completo (I-01a)
- F-03 Jerarquía de CTAs v1.0 disponible como referencia
- Backup de todos los HTML antes de modificar

---

## Paso 0 — Backup

Antes de cualquier modificación:

```bash
cp -r . ../backup-pre-i01b-$(date +%Y%m%d)
```

---

## Paso 1 — Aplicar atributos de jerarquía a CTAs existentes

Para cada CTA en `cta-audit.json` que tenga `data_cta_level: null` o `data_cta_destination: null`, aplicar los valores según la tabla de asignación de abajo.

### Tabla de asignación por página

| Página | CTA destino | data-cta-level | data-cta-destination |
|---|---|---|---|
| `index.html` | `/contacto.html` | 1 | `auditoria-vcv` |
| `index.html` | `/autodiagnostico.html` | 2 | `autodiagnostico` |
| `sobre-mi.html` | `/contacto.html` | 1 | `auditoria-vcv` |
| `sobre-mi.html` | `/servicios.html` | 2 | `auditoria-vcv` |
| `servicios.html` | `/contacto.html` | 1 | `auditoria-vcv` |
| `servicios.html` | `/autodiagnostico.html` | 2 | `autodiagnostico` |
| `contacto.html` | formulario interno | 1 | `auditoria-vcv` |
| `blog.html` | `/autodiagnostico.html` | 1 | `autodiagnostico` |
| `ironlog/index.html` | formulario IronLog | 1 | `formulario-ironlog` |
| `ironlog/index.html` | `/contacto.html` | 2 | `auditoria-vcv` |
| `ironlog/demo.html` | `/contacto.html` | 1 | `auditoria-vcv` |
| `ironlog/demo.html` | `/ironlog/tools.html` | 2 | `simulador` |
| `ironlog/demo.html` | formulario IronLog | 3 | `formulario-ironlog` |
| `ironlog/ss.html` | `/contacto.html` | 1 | `auditoria-vcv` |
| `ironlog/ss.html` | `/ironlog/tools.html` | 2 | `simulador` |
| `ironlog/wendler.html` | `/contacto.html` | 1 | `auditoria-vcv` |
| `ironlog/wendler.html` | `/ironlog/tools.html` | 2 | `simulador` |
| `ironlog/cube.html` | `/contacto.html` | 1 | `auditoria-vcv` |
| `ironlog/cube.html` | `/ironlog/tools.html` | 2 | `simulador` |
| `ironlog/tools.html` | `/contacto.html` | 1 | `auditoria-vcv` |
| `ironlog/tools.html` | formulario IronLog | 2 | `formulario-ironlog` |
| `blog/criterio-sin-respaldo.html` | `/autodiagnostico.html` | 1 | `autodiagnostico` |
| `blog/criterio-sin-respaldo.html` | `/contacto.html` | 2 | `auditoria-vcv` |
| `blog/periodizacion-y-deteccion.html` | `/autodiagnostico.html` | 1 | `autodiagnostico` |
| `blog/periodizacion-y-deteccion.html` | `/contacto.html` | 2 | `auditoria-vcv` |
| `blog/variable-critica-validada.html` | `/autodiagnostico.html` | 1 | `autodiagnostico` |
| `blog/variable-critica-validada.html` | `/contacto.html` | 2 | `auditoria-vcv` |
| `blog/estancamiento-silencioso.html` | `/contacto.html` | 1 | `auditoria-vcv` |
| `blog/estancamiento-silencioso.html` | `/autodiagnostico.html` | 2 | `autodiagnostico` |
| `blog/ironlog-en-contexto.html` | `/autodiagnostico.html` | 1 | `autodiagnostico` |
| `blog/ironlog-en-contexto.html` | formulario IronLog | 2 | `formulario-ironlog` |

### Criterio de matching por destino

Para identificar qué fila de la tabla aplica a cada CTA del inventario, usar el `href` del CTA:

- Si `href` contiene `contacto` → columna "destino" = `/contacto.html`
- Si `href` contiene `autodiagnostico` → `/autodiagnostico.html`
- Si `href` contiene `ironlog/tools` → `/ironlog/tools.html`
- Si `href` es `null` o apunta a un `#form`, `#contact-form` o similar dentro de la misma página → "formulario interno" o "formulario IronLog" según la página

### Atributos a agregar

```html
<!-- Antes -->
<a href="/contacto.html" class="btn btn-primary">Contactame</a>

<!-- Después -->
<a href="/contacto.html"
   class="btn btn-primary cta cta--primary"
   data-cta-level="1"
   data-cta-destination="auditoria-vcv">
  Contactame
</a>
```

Regla: agregar clases `cta` y `cta--primary|cta--secondary|cta--tertiary` sin eliminar las clases existentes.

---

## Paso 2 — Actualizar textos de CTAs a versiones aprobadas

Para cada CTA con issue `TEXT_MISMATCH` en el inventario, reemplazar el texto por la versión aprobada correspondiente.

### Tabla de textos aprobados por contexto

| Contexto | Destino | Versión corta (usar en botón) | Versión larga (usar si hay espacio ≥ 8 palabras) |
|---|---|---|---|
| Sección principal + blog | `/contacto.html` | `Solicitar revisión →` | `Solicitá la revisión de tu sistema actual` |
| `contacto.html` formulario | formulario interno | `Enviar solicitud →` | `Enviá tu solicitud para coordinar la conversación` |
| Blog + blog.html | `/autodiagnostico.html` | `Hacer autodiagnóstico →` | `Respondé 10 preguntas sobre tu sistema actual` |
| `ironlog/index.html` | formulario IronLog | `Solicitar acceso anticipado →` | `Dejá tus datos para el próximo grupo IronLog` |
| Simuladores (`ss`, `wendler`, `cube`) | `/contacto.html` | `Revisar mi sistema →` | `El simulador muestra la lógica. La revisión aplica esa lógica a tu caso` |
| `ironlog/demo.html` | `/contacto.html` | `Revisar mi sistema →` | `Aplicá esta lógica a tu sistema real` |
| `ironlog/tools.html` | `/contacto.html` | `Solicitar revisión →` | `Revisá si tu seguimiento tiene brechas` |
| `blog/estancamiento-silencioso.html` | `/contacto.html` | `Solicitar revisión →` | `Si reconocés el patrón, pedí revisión` |
| `blog/ironlog-en-contexto.html` | `/autodiagnostico.html` | `Hacer autodiagnóstico →` | `Antes de IronLog, validá tu sistema actual` |

### Criterio de elección entre versión corta y larga

- Si el elemento es `<button>` o `<a>` con clase de botón y el texto actual tiene ≤ 6 palabras: usar versión corta.
- Si el elemento está en un bloque con texto descriptivo alrededor (banner, card, sección con párrafo): usar versión larga.
- En caso de duda: usar versión corta.

---

## Paso 3 — Crear CTAs faltantes

Para cada página con issue `MISSING_PRIMARY` en el inventario, crear el CTA primario si no existe.

### Plantilla de CTA primario a insertar

```html
<div class="cta-block cta-block--primary">
  <a href="{HREF}"
     class="cta cta--primary"
     data-cta-level="1"
     data-cta-destination="{DESTINATION}">
    {TEXTO_CORTO}
  </a>
</div>
```

### Posición de inserción

- Si la página tiene sección `hero` o `header-content`: insertar al final del hero, antes del cierre de la sección.
- Si no hay hero identificable: insertar antes del `</main>` o antes del `<footer>`.
- Documentar la inserción con comentario HTML:

```html
<!-- CTA primario insertado por I-01b · {fecha} -->
```

---

## Paso 4 — Manejar `autodiagnostico.html` (CTAs condicionales)

Esta página requiere lógica JS para mostrar CTAs distintos según el resultado del diagnóstico. No modificar los CTAs existentes en el HTML estático. En cambio:

1. Identificar el elemento donde se muestra el resultado (buscar por clase o id: `resultado`, `result`, `diagnostico-resultado` o similar).
2. Insertar el siguiente bloque inmediatamente después de ese elemento, con display oculto por defecto:

```html
<!-- CTAs condicionales por resultado · I-01b -->
<div class="cta-resultado" data-resultado="verde" style="display:none">
  <a href="/ironlog/index.html#acceso"
     class="cta cta--primary"
     data-cta-level="1"
     data-cta-destination="formulario-ironlog">
    Solicitar acceso anticipado →
  </a>
  <a href="/contacto.html"
     class="cta cta--secondary"
     data-cta-level="2"
     data-cta-destination="auditoria-vcv">
    Solicitar revisión igual →
  </a>
</div>

<div class="cta-resultado" data-resultado="amarillo" style="display:none">
  <a href="/contacto.html"
     class="cta cta--primary"
     data-cta-level="1"
     data-cta-destination="auditoria-vcv">
    Solicitar revisión de sistema →
  </a>
</div>

<div class="cta-resultado" data-resultado="rojo" style="display:none">
  <a href="/contacto.html"
     class="cta cta--primary"
     data-cta-level="1"
     data-cta-destination="auditoria-vcv">
    Solicitar revisión de sistema →
  </a>
</div>
```

3. El JS existente del diagnóstico debe, al calcular el resultado, hacer:
   - `document.querySelectorAll('.cta-resultado').forEach(el => el.style.display = 'none')`
   - `document.querySelector('.cta-resultado[data-resultado="{verde|amarillo|rojo}"]').style.display = 'block'`

   Si el JS del diagnóstico no está accesible o es externo, documentar esta integración como pendiente y dejar los bloques HTML insertados pero con `data-pending-js="true"`.

---

## Paso 5 — Verificación post-transformación

Después de modificar todos los HTML, ejecutar las siguientes verificaciones. Para cada página, reportar en `cta-transform-report.json`:

```json
{
  "page": "index.html",
  "status": "ok|warning|error",
  "checks": {
    "single_primary_above_fold": true,
    "no_ironlog_primary_violation": true,
    "all_ctas_have_level": true,
    "all_ctas_have_destination": true,
    "text_matches_approved": true,
    "contacto_single_cta": null
  },
  "notes": ""
}
```

El campo `"contacto_single_cta"` solo aplica para `contacto.html`; en el resto es `null`.

### Criterio de status

- `ok`: todos los checks en `true` (o `null` donde no aplica)
- `warning`: algún check es `false` pero no es `IRONLOG_PRIMARY_VIOLATION` ni `MULTIPLE_PRIMARY_ABOVE_FOLD`
- `error`: cualquier check de `IRONLOG_PRIMARY_VIOLATION` o `MULTIPLE_PRIMARY_ABOVE_FOLD` es `false`

---

## Paso 6 — CSS mínimo a agregar

Si el proyecto no tiene las clases `.cta--primary`, `.cta--secondary`, `.cta--tertiary` definidas, agregar al stylesheet principal:

```css
/* Jerarquía de CTAs · I-01b · Feb 2026 */
.cta { display: inline-block; text-decoration: none; }
.cta--primary   { /* sobrescribir con estilos del proyecto: máximo contraste */ }
.cta--secondary { /* sobrescribir con estilos del proyecto: contraste medio */ }
.cta--tertiary  { /* sobrescribir con estilos del proyecto: peso mínimo */ }
```

No definir colores específicos aquí — solo el placeholder. Los valores reales los define el CSS del proyecto.

---

## Archivos que genera este paso

| Archivo | Descripción |
|---|---|
| `cta-transform-report.json` | Resultado de verificación por página |
| HTML modificados | Los 17 archivos listados en I-01a, con atributos y textos actualizados |

---

*I-01b · Transformación de CTAs · v1.0 · Feb 2026*
*Prerequisito: I-01a Auditoría de CTAs + F-03 Jerarquía de CTAs*
*Siguiente tarea: validación manual de cta-transform-report.json*
