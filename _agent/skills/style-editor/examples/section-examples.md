# Ejemplos de Secciones Completas

Referencia de secciones del sitio real para garantizar consistencia.
Al crear una sección nueva, compararla visualmente con estos ejemplos
**y verificar que la densidad técnica corresponde al buyer al que va dirigida.**

---

## Header de simulador (con VCV) — Para Coordinador / PF

Estructura del header que encabeza cada simulador. Incluye título, icono, y descripción
con la Variable Crítica. Este patrón es obligatorio en todos los simuladores.

```html
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="text-4xl">📈</span>
    <h1 class="font-heading text-3xl md:text-5xl font-bold text-ink tracking-tight">
      Wendler 5/3/1
    </h1>
  </div>
  <div class="bg-surface p-6 md:p-8 rounded border border-border shadow-structural">
    <h2 class="font-heading text-lg font-bold text-ink mb-3">
      Variable Crítica: [nombre de la VCV]
    </h2>
    <div class="text-body text-sm space-y-4 leading-relaxed">
      <p>
        [Descripción de la lógica del sistema.
        La VCV va en <strong>negrita</strong>.]
      </p>
      <p class="text-muted">
        Este simulador no reemplaza el criterio. Muestra los números que
        deberías estar mirando. [Tensión específica del sistema.]
      </p>
    </div>
  </div>
</header>
```

---

## Sección de señales de ruptura — Para Coordinador / PF

Patrón estándar para la sección de alertas. Resuena fuerte con el Preparador Físico
porque nombra exactamente el momento en que su proceso falla.

```html
<div class="mb-8 bg-surface border border-border rounded shadow-structural overflow-hidden">
  <div class="px-6 py-4 border-b border-border flex items-center gap-2">
    <span class="text-base">⚠️</span>
    <span class="text-[10px] font-mono font-bold text-muted uppercase tracking-widest">
      Señales de ruptura del sistema
    </span>
  </div>

  <div class="divide-y divide-border">
    <div class="px-6 py-4 flex items-start gap-4">
      <span class="text-error font-mono font-bold text-sm mt-0.5 shrink-0">01</span>
      <div>
        <p class="text-sm text-ink font-medium mb-0.5">Título de la señal</p>
        <p class="text-xs text-muted font-mono">→ Diagnóstico y acción concreta.</p>
      </div>
    </div>
  </div>

  <div class="px-6 py-4 bg-canvas border-t border-border flex flex-col sm:flex-row
              items-start sm:items-center justify-between gap-3">
    <p class="text-xs text-muted font-mono">
      ¿Estás viendo alguna de estas señales en tu atleta?
    </p>
    <button onclick="openLeadModal()"
            class="text-xs font-mono font-bold text-primary hover:underline shrink-0">
      Auditoría VCV →
    </button>
  </div>
</div>
```

---

## Sección hero para Director Deportivo

El Director escanea, no lee. Titular grande, consecuencia en la primera línea,
CTA visible. Sin badges técnicos, sin jargon de datos.

```html
<section class="py-16 bg-canvas border-b border-border">
  <div class="max-w-5xl mx-auto px-6">
    <div class="max-w-2xl">
      <div class="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-4">
        // Para directores deportivos
      </div>
      <h1 class="font-heading text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
        Cuando cada preparador decide con criterio distinto,
        el riesgo es del club.
      </h1>
      <p class="text-body text-base leading-relaxed mb-8">
        Un cuerpo técnico sin criterio compartido genera decisiones inconsistentes,
        lesiones no anticipadas, y conversaciones que no podés tener con datos.
        El Sistema de Gobernanza instala el criterio institucional que hace eso posible.
      </p>
      <a href="/contacto.html"
         class="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-3
                rounded font-medium transition-colors">
        Revisar el sistema del club →
      </a>
    </div>
  </div>
</section>
```

---

## Sección de señales para Director Deportivo

Sin tablas de datos. Sin badges. Consecuencias institucionales, no métricas técnicas.

```html
<section class="py-12 bg-surface border-b border-border">
  <div class="max-w-5xl mx-auto px-6">
    <div class="text-[10px] font-mono font-bold text-muted uppercase tracking-widest mb-8">
      // Señales de que el sistema de decisión del club necesita estructura
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

      <!-- Ítem de señal -->
      <div class="bg-canvas rounded border border-border p-6">
        <p class="text-sm text-ink font-medium mb-2">
          Lesiones que nadie anticipó
        </p>
        <p class="text-sm text-body leading-relaxed">
          Si el staff no puede explicar con datos por qué ocurrió,
          el proceso de decisión tiene una brecha que se va a repetir.
        </p>
      </div>

      <div class="bg-canvas rounded border border-border p-6">
        <p class="text-sm text-ink font-medium mb-2">
          Criterio distinto entre preparadores
        </p>
        <p class="text-sm text-body leading-relaxed">
          Cuando cada entrenador ajusta la carga con lógica propia,
          los atletas reciben tratamiento inconsistente según la categoría.
        </p>
      </div>

      <div class="bg-canvas rounded border border-border p-6">
        <p class="text-sm text-ink font-medium mb-2">
          Preguntas sin respaldo de datos
        </p>
        <p class="text-sm text-body leading-relaxed">
          Si la comisión directiva, un sponsor, o un padre preguntan
          por el proceso, la respuesta es verbal e individual.
        </p>
      </div>

      <div class="bg-canvas rounded border border-border p-6">
        <p class="text-sm text-ink font-medium mb-2">
          Criterio que se va con el preparador
        </p>
        <p class="text-sm text-body leading-relaxed">
          Cuando un preparador se va, el conocimiento sobre sus atletas
          desaparece con él. El club empieza de cero.
        </p>
      </div>

    </div>
  </div>
</section>
```

---

## Sección hero para Dueño de Academia

El Dueño quiere ver el output, no el proceso. Mostrar el resultado final, hablar de diferenciación.

```html
<section class="py-16 bg-canvas border-b border-border">
  <div class="max-w-5xl mx-auto px-6">
    <div class="max-w-2xl">
      <div class="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-4">
        // Para academias y centros de entrenamiento
      </div>
      <h1 class="font-heading text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
        Las academias que cobran más
        no entrenan diferente.
        Pueden demostrar el proceso.
      </h1>
      <p class="text-body text-base leading-relaxed mb-8">
        Un sistema de evaluación con criterio documentado te permite mostrar
        a padres, atletas, e inversores exactamente qué se mide, por qué,
        y qué decisiones produce. Sin necesitar estar presente para explicarlo.
      </p>
      <a href="/contacto.html"
         class="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-3
                rounded font-medium transition-colors">
        Cómo funciona para academias →
      </a>
    </div>
  </div>
</section>
```

---

## Callout oscuro de servicio — Universal (con variantes de copy por buyer)

Mismo componente, copy diferente según el buyer al que va dirigida la página.

```html
<div class="bg-ink border-t-4 border-primary">
  <div class="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row
              items-start md:items-center justify-between gap-8">
    <div class="max-w-xl">
      <div class="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-3">
        // Auditoría VCV
      </div>

      <!-- Copy para Coordinador / PF -->
      <h3 class="font-heading text-xl font-bold text-surface mb-3">
        14 días. Una regla escrita. Sin intuición.
      </h3>
      <p class="text-sm text-muted leading-relaxed">
        Identificamos la Variable Crítica de tu bloque actual,
        definimos los umbrales, y el staff termina con un esquema IF → THEN
        que puede aplicar de forma autónoma desde el lunes siguiente.
      </p>

      <!-- Copy alternativo para Director Deportivo (intercambiar h3 y p) -->
      <!--
      <h3 class="font-heading text-xl font-bold text-surface mb-3">
        Un criterio que es del club, no de una persona.
      </h3>
      <p class="text-sm text-muted leading-relaxed">
        Al terminar, el cuerpo técnico toma decisiones de carga
        con el mismo criterio, independientemente de quién esté presente.
        Defendible ante cualquier interlocutor externo.
      </p>
      -->

      <!-- Copy alternativo para Dueño de Academia (intercambiar h3 y p) -->
      <!--
      <h3 class="font-heading text-xl font-bold text-surface mb-3">
        Un proceso que podés mostrar y vender.
      </h3>
      <p class="text-sm text-muted leading-relaxed">
        Al terminar, tu academia tiene un esquema de evaluación documentado.
        Para padres. Para atletas. Para inversores.
        Sin depender de explicaciones verbales.
      </p>
      -->

    </div>
    <a href="/contacto.html"
       class="shrink-0 bg-primary hover:bg-primary-600 text-white px-8 py-3
              rounded font-medium transition-colors text-sm whitespace-nowrap">
      Ver cómo funciona →
    </a>
  </div>
</div>
```

---

## Bloque de botones de acción (orden correcto)

El orden primario → secundario es obligatorio. El botón de consulta siempre primero.

```html
<div class="flex flex-col sm:flex-row gap-3 justify-center mb-16">
  <button onclick="openLeadModal()"
          class="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded
                 font-medium transition-colors">
    Revisar mi sistema →
  </button>
  <button onclick="openExcelModal()"
          class="border border-border hover:border-primary text-ink px-8 py-3 rounded
                 font-medium transition-colors flex items-center justify-center gap-2">
    Excel (.xlsx)
  </button>
  <button onclick="openPdfModal()"
          class="border border-border hover:border-primary text-ink px-8 py-3 rounded
                 font-medium transition-colors flex items-center justify-center gap-2">
    PDF
  </button>
</div>
```

---

## Footer estándar

```html
<footer class="bg-dark pt-16 pb-8 border-t-4 border-primary">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div class="md:col-span-2">
        <span class="font-heading font-semibold text-lg text-surface block mb-4">
          Lisandro Cacciatore <span class="text-primary font-mono font-bold">_</span>
        </span>
        <p class="text-muted text-sm leading-relaxed max-w-sm">
          Sistemas de validación semanal para preparadores físicos.
          Criterio claro, decisiones con fundamento.
        </p>
      </div>
      <div>
        <h3 class="font-heading text-surface text-xs font-bold mb-4 uppercase tracking-widest">
          Ecosistema
        </h3>
        <ul class="space-y-3">
          <li><a href="../blog.html" class="text-sm text-muted hover:text-surface transition-colors">Blog Técnico</a></li>
          <li><a href="index.html" class="text-sm text-muted hover:text-surface transition-colors">IronLog (Piloto)</a></li>
          <li><a href="tools.html" class="text-sm text-muted hover:text-surface transition-colors">Data Tools</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-heading text-surface text-xs font-bold mb-4 uppercase tracking-widest">
          Operaciones
        </h3>
        <ul class="space-y-3">
          <li><a href="../contacto.html" class="text-sm text-muted hover:text-surface transition-colors">Revisar mi sistema →</a></li>
          <li><span class="text-sm text-subtle block">Rosario, Argentina</span></li>
          <li><span class="text-sm text-subtle block">Remoto LATAM / España</span></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row
                justify-between items-center gap-4">
      <div class="text-xs font-mono text-subtle">
        © 2026 Lisandro Cacciatore. Todos los derechos reservados.
      </div>
      <div class="flex gap-6 text-xs text-subtle">
        <a href="../privacidad.html" class="hover:text-muted transition-colors">Privacidad</a>
        <a href="../sobre-mi.html" class="hover:text-muted transition-colors">Sobre mí</a>
      </div>
    </div>
  </div>
</footer>
```

---

## Notas de uso

- **Buyer primero:** Antes de construir cualquier sección, identificar a quién va dirigida.
  La densidad técnica, el tipo de copy, y los componentes elegidos cambian según el buyer.
- **Director y Dueño:** Sin badges de estado semántico. Sin tablas de datos. Sin labels `font-mono` técnicos en el body copy. Solo en los labels de sección o en el callout oscuro.
- **Coordinador y PF:** Máxima densidad técnica permitida. Tablas, badges, callout de VCV.
- **Copy en comentarios:** El callout oscuro incluye variantes de copy comentadas. Activar la correcta según el buyer de la página.