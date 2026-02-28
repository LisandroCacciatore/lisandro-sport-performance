# Ejemplos de Secciones Completas

Referencia de secciones del sitio real para garantizar consistencia.
Al crear una sección nueva, compararla visualmente con estos ejemplos.

---

## Header de simulador (con VCV)

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

## Sección de señales de ruptura

Patrón estándar para la sección de alertas que aparece después del dashboard
en cada simulador.

```html
<div class="mb-8 bg-surface border border-border rounded shadow-structural overflow-hidden">
  <!-- Header de la sección -->
  <div class="px-6 py-4 border-b border-border flex items-center gap-2">
    <span class="text-base">⚠️</span>
    <span class="text-[10px] font-mono font-bold text-muted uppercase tracking-widest">
      Señales de ruptura del sistema
    </span>
  </div>

  <!-- Items de señal (repetir con divide-y divide-border en el wrapper) -->
  <div class="divide-y divide-border">
    <div class="px-6 py-4 flex items-start gap-4">
      <span class="text-error font-mono font-bold text-sm mt-0.5 shrink-0">01</span>
      <div>
        <p class="text-sm text-ink font-medium mb-0.5">Título de la señal</p>
        <p class="text-xs text-muted font-mono">→ Diagnóstico y acción concreta.</p>
      </div>
    </div>
    <!-- repetir para 02, 03 -->
  </div>

  <!-- Footer con CTA -->
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

## Bloque de botones de acción (orden correcto)

El orden primario → secundario es obligatorio. El botón de consulta siempre primero.

```html
<div class="flex flex-col sm:flex-row gap-3 justify-center mb-16">
  <!-- 1. Acción principal: consulta -->
  <button onclick="openLeadModal()" 
          class="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded 
                 font-medium transition-colors">
    Revisar mi sistema →
  </button>

  <!-- 2. Descarga Excel (secundario, outlined) -->
  <button onclick="openExcelModal()" 
          class="border border-border hover:border-primary text-ink px-8 py-3 rounded 
                 font-medium transition-colors flex items-center justify-center gap-2">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586..."/>
    </svg>
    Excel (.xlsx)
  </button>

  <!-- 3. Descarga PDF (secundario, outlined) -->
  <button onclick="openPdfModal()" 
          class="border border-border hover:border-primary text-ink px-8 py-3 rounded 
                 font-medium transition-colors flex items-center justify-center gap-2">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
    </svg>
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
      
      <!-- Columna marca (2 cols) -->
      <div class="md:col-span-2">
        <span class="font-heading font-semibold text-lg text-surface block mb-4">
          Lisandro Cacciatore <span class="text-primary font-mono font-bold">_</span>
        </span>
        <p class="text-muted text-sm leading-relaxed max-w-sm">
          Sistemas de validación semanal para preparadores físicos.
          Criterio claro, decisiones con fundamento.
        </p>
      </div>

      <!-- Columna ecosistema -->
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

      <!-- Columna operaciones -->
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

    <!-- Bottom bar -->
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
