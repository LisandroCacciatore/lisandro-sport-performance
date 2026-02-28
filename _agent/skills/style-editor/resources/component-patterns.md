# Patrones de Componentes — Criterio Técnico

Componentes reutilizables del sistema de diseño.
Copiar y adaptar. No reinventar desde cero.

---

## Card estándar

```html
<div class="bg-surface p-6 md:p-8 rounded border border-border shadow-structural">
  <!-- contenido -->
</div>
```

---

## Card con header de sección

```html
<div class="bg-surface rounded border border-border shadow-structural overflow-hidden">
  <div class="flex items-center gap-2 px-6 py-4 border-b border-border">
    <span class="bg-ink text-surface text-xs font-mono font-bold px-2 py-1 rounded">PASO 1</span>
    <h3 class="font-heading font-bold text-ink">Título de la sección</h3>
  </div>
  <div class="p-6 md:p-8">
    <!-- contenido -->
  </div>
</div>
```

---

## Badge de estado (semáforo)

```html
<!-- Primary / información -->
<span class="text-[10px] font-mono font-bold text-primary bg-primary-bg px-2 py-1 
             rounded inline-block border border-blue-100 uppercase tracking-wide">
  Volumen (3x5+)
</span>

<!-- Warning / atención -->
<span class="text-[10px] font-mono font-bold text-warning bg-warning-bg px-2 py-1 
             rounded inline-block border border-amber-200 uppercase tracking-wide">
  Umbral de atención
</span>

<!-- Error / pico / alerta -->
<span class="text-[10px] font-mono font-bold text-error bg-error-bg px-2 py-1 
             rounded inline-block border border-red-200 uppercase tracking-wide">
  Señal de ruptura
</span>

<!-- Success / descarga / OK -->
<span class="text-[10px] font-mono font-bold text-success bg-success-bg px-2 py-1 
             rounded inline-block border border-green-200 uppercase tracking-wide">
  Recuperación activa
</span>
```

---

## Label técnico de sección (subtítulo de tabla/gráfico)

```html
<h3 class="text-[10px] font-mono font-bold text-muted uppercase tracking-widest mb-4">
  Estructura Diaria
</h3>
```

---

## Separador de sección con texto

```html
<div class="flex items-center gap-3 mb-6">
  <div class="h-px flex-1 bg-border"></div>
  <span class="text-[10px] font-mono font-bold text-muted uppercase tracking-widest px-2">
    // Ciclo Completo
  </span>
  <div class="h-px flex-1 bg-border"></div>
</div>
```

---

## Botones — jerarquía correcta

```html
<!-- Primario (acción principal / consulta) -->
<button class="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded 
               font-medium transition-colors">
  Revisar mi sistema →
</button>

<!-- Secundario (descarga / acción de soporte) -->
<button class="border border-border hover:border-primary text-ink px-8 py-3 
               rounded font-medium transition-colors flex items-center gap-2">
  Excel (.xlsx)
</button>

<!-- Éxito (confirmación / descarga completada) — usar con criterio -->
<button class="bg-success hover:opacity-90 text-white px-8 py-3 rounded 
               font-medium transition-opacity">
  Descargado
</button>
```

**Orden correcto cuando hay múltiples botones:**
1. Acción de consulta / lead → siempre primero y sólido
2. Acciones de descarga → segundo y tercero, outlined

---

## Data display — dato numérico con label

```html
<div class="bg-canvas rounded border border-border p-3">
  <div class="text-[10px] font-mono text-muted uppercase mb-1">Squat TM</div>
  <div class="font-mono font-bold text-primary text-lg">
    126<span class="text-sm font-normal"> kg</span>
  </div>
  <div class="text-[10px] text-muted">RM proyectado: 140kg</div>
</div>
```

---

## Fila de señal de ruptura (lista de alertas)

```html
<div class="px-6 py-4 flex items-start gap-4">
  <span class="text-error font-mono font-bold text-sm mt-0.5 shrink-0">01</span>
  <div>
    <p class="text-sm text-ink font-medium mb-0.5">Título de la señal de ruptura</p>
    <p class="text-xs text-muted font-mono">→ Diagnóstico y acción recomendada.</p>
  </div>
</div>
```

---

## Callout de Variable Crítica (VCV block)

```html
<div class="bg-primary-bg border border-blue-200 rounded p-5">
  <div class="flex items-start gap-3">
    <span class="text-xl mt-0.5">🎯</span>
    <div>
      <div class="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-1">
        Variable a validar esta semana
      </div>
      <p class="text-sm text-ink font-medium leading-relaxed">
        Texto de la pregunta de validación.
      </p>
    </div>
  </div>
</div>
```

---

## Callout oscuro de servicio (Auditoría VCV banner)

```html
<div class="bg-ink border-t-4 border-primary">
  <div class="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row 
              items-start md:items-center justify-between gap-8">
    <div class="max-w-xl">
      <div class="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-3">
        // Auditoría VCV
      </div>
      <h3 class="font-heading text-xl font-bold text-surface mb-3">Título del callout</h3>
      <p class="text-sm text-muted leading-relaxed">Descripción del servicio.</p>
    </div>
    <a href="../contacto.html" 
       class="shrink-0 bg-primary hover:bg-primary-600 text-white px-8 py-3 
              rounded font-medium transition-colors text-sm whitespace-nowrap">
      Ver cómo funciona →
    </a>
  </div>
</div>
```

---

## Tabla de datos

```html
<div class="bg-surface rounded border border-border shadow-structural overflow-hidden">
  <div class="p-4 border-b border-border bg-canvas">
    <p class="text-xs text-muted font-mono">Descripción de la tabla.</p>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-xs font-mono">
      <thead>
        <tr class="bg-ink text-surface">
          <th class="text-left px-4 py-3 font-bold uppercase tracking-wide border-r border-slate-700">
            Ejercicio
          </th>
          <th class="px-4 py-3 font-bold uppercase tracking-wide text-center">
            Columna
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- filas con border-t border-border -->
        <!-- filas pares: bg-surface en las celdas -->
      </tbody>
    </table>
  </div>
</div>
```

---

## Modal

```html
<div id="miModal" class="fixed inset-0 z-50 hidden flex items-center justify-center 
                          bg-dark/80 p-4 backdrop-blur-sm">
  <div class="bg-surface w-full max-w-md rounded shadow-structural border border-border 
              overflow-hidden relative">
    <button onclick="cerrarModal()" class="absolute top-4 right-4 text-muted hover:text-ink">
      <!-- SVG X icon -->
    </button>
    <div class="p-8">
      <!-- contenido del modal -->
    </div>
    <div class="bg-canvas px-8 py-3 border-t border-border text-center">
      <a href="#" class="text-xs text-muted font-mono hover:text-ink">_Volver</a>
    </div>
  </div>
</div>
```

---

## Input de formulario

```html
<div>
  <label class="block text-[10px] font-mono font-bold text-muted uppercase mb-2">
    Label del campo
  </label>
  <input type="text" 
         class="w-full p-3 border border-border bg-canvas rounded font-mono font-bold 
                focus:border-primary outline-none text-ink">
</div>
```

---

## Navegación cruzada entre simuladores

```html
<div class="bg-surface border-b border-border">
  <div class="max-w-5xl mx-auto px-6 py-3 flex items-center gap-2 flex-wrap">
    <span class="text-[10px] font-mono font-bold text-muted uppercase tracking-widest mr-2">
      Simuladores:
    </span>
    <!-- Tab activo -->
    <a href="wendler.html" 
       class="text-[11px] font-mono font-bold px-3 py-1.5 rounded border 
              bg-primary text-white border-primary">
      📈 Wendler 5/3/1
    </a>
    <!-- Tab inactivo -->
    <a href="cube.html" 
       class="text-[11px] font-mono font-bold px-3 py-1.5 rounded border 
              border-border text-muted hover:text-ink hover:border-primary transition-all">
      🧊 The Cube
    </a>
    <!-- Separador + link de criterio -->
    <span class="text-border mx-1 hidden sm:block">|</span>
    <a href="../contacto.html" 
       class="text-[11px] font-mono text-muted hover:text-primary transition-colors hidden sm:block">
      ¿No sabés cuál usar? →
    </a>
  </div>
</div>
```
