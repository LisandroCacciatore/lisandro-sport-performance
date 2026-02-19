/**
 * THEME.JS — SISTEMA DE DISEÑO "CRITERIO TÉCNICO"
 * ================================================
 * Versión 2.0 — Unificación de briefings PM / CM / BA
 *
 * FILOSOFÍA CENTRAL:
 * Este sistema no es una paleta bonita. Es un lenguaje visual con semántica.
 * Cada token responde a una pregunta:
 *   ¿Qué estoy comunicando? ¿Estructura, acción, validación, riesgo, profundidad?
 *
 * ARQUITECTURA DEL SISTEMA:
 * 1. CAPAS (Canvas → Surface → Border)  → definen profundidad y separación modular
 * 2. TEXTO (Ink → Body → Muted → Subtle) → jerarquía de lectura limpia
 * 3. MARCA (Primary + variantes)         → acción sobria, no agresiva
 * 4. SEMÁFORO (Success / Warning / Error) → narrativa de QA y validación
 *
 * PRINCIPIO APLICADO: Si un token no resuelve un problema concreto de UI, no existe.
 */

tailwind.config = {
    theme: {
        extend: {

            // ─────────────────────────────────────────────────────────────
            // 1. CAPAS DE SUPERFICIE
            // Define la profundidad espacial del sistema. Evita el flat
            // sin estructura que grita "blog de 2018". Los tres briefings
            // coinciden en "arquitectura visible" y "separación modular".
            // ─────────────────────────────────────────────────────────────
            colors: {

                // Fondo general del sitio. Levemente frío para que los
                // componentes blancos respiren. NO es blanco puro (#FFF),
                // que se siente demasiado vacío en pantallas grandes.
                canvas:  '#F8FAFC',   /* Slate 50  — página base */

                // Fondo de cards, secciones alternadas, sidebars.
                // Comunica "módulo independiente" sin usar sombras pesadas.
                surface: '#F1F5F9',   /* Slate 100 — cards, bloques, módulos */

                // Separadores, bordes de cards, líneas divisorias.
                // Un solo color de borde elimina la inconsistencia visual.
                border:  '#E2E8F0',   /* Slate 200 — divisores estructurales */


                // ─────────────────────────────────────────────────────────
                // 2. ESCALA DE TEXTO
                // Cuatro niveles de jerarquía tipográfica explícita.
                // El briefing PM lo resume: "claridad antes que impacto".
                // ─────────────────────────────────────────────────────────

                // El texto más oscuro: H1, H2, etiquetas de módulo.
                // No es negro puro: el azulado del Slate evita la crudeza.
                ink:   '#1E293B',     /* Slate 800 — títulos principales */

                // Lectura de contenido largo: artículos, descripciones.
                // Contraste alto, pero con más respiro que "ink".
                body:  '#334155',     /* Slate 700 — párrafos, cuerpo */

                // Metadatos, etiquetas, breadcrumbs, timestamps.
                muted: '#64748B',     /* Slate 500 — texto secundario */

                // Decorativo: placeholders, texto deshabilitado.
                // Raramente en producción, pero necesario para consistencia.
                subtle: '#94A3B8',    /* Slate 400 — UI de baja prioridad */

                // Fondos oscuros: hero, footer, secciones de impacto.
                // El azulado del Slate 900 evita el "negro lavanda" genérico.
                dark:  '#0F172A',     /* Slate 900 — fondos hero / pie de página */


                // ─────────────────────────────────────────────────────────
                // 3. COLOR DE MARCA — "ACCIÓN SOBRIA"
                // El briefing BA lo define: "CTA discretos pero firmes".
                // Usamos Blue 900 en lugar del Blue 700 original.
                // Razón: Blue 700 (#1D4ED8) sigue siendo el azul de startup.
                // Blue 900 (#1E3A8A) dice consultor senior, no SaaS B2B.
                // ─────────────────────────────────────────────────────────

                // Color primario de marca. Botones, links activos, accents.
                primary:       '#1E3A8A',   /* Blue 900 — acción sobria, autoridad */

                // Hover state sobre fondo oscuro o para íconos activos.
                // Más luminoso que primary para feedback visual claro.
                'primary-600': '#2563EB',   /* Blue 600 — hover/focus sobre oscuro */

                // Fondo muy sutil para badges, chips de categoría.
                // "Data Architecture" como etiqueta, no como grito.
                'primary-bg':  '#EFF6FF',   /* Blue 50  — badges, chips, fondos hover */


                // ─────────────────────────────────────────────────────────
                // 4. SEMÁFORO DE DATOS — QA / VALIDACIÓN / RIESGO
                // El diferenciador narrativo de la marca.
                // "El sistema no mide más. Mide mejor."
                // Estos colores no son decorativos: tienen semántica real.
                //
                // CUÁNDO USARLOS:
                // → success:    "Dato validado", "Proceso correcto", "QA OK"
                // → warning:    "Revisar", "Dato incompleto", "Riesgo medio"
                // → error:      "Dato sucio", "Riesgo crítico", "Stop"
                //
                // CUÁNDO NO USARLOS:
                // → Como color decorativo sin significado de estado.
                // → Para crear urgencia de venta (ver briefing PM, punto 8).
                // ─────────────────────────────────────────────────────────

                // VALIDADO / CORRECTO / QA PASADO
                success:      '#15803D',   /* Green 700 — texto/borde de estado OK */
                'success-bg': '#DCFCE7',   /* Green 100 — fondo de card validada */

                // ATENCIÓN / REVISAR / INCOMPLETO
                warning:      '#B45309',   /* Amber 700 — texto/borde de alerta */
                'warning-bg': '#FEF3C7',   /* Amber 100 — fondo de alerta suave */

                // ERROR / DATO SUCIO / RIESGO CRÍTICO
                error:        '#B91C1C',   /* Red 700   — texto/borde crítico */
                'error-bg':   '#FEE2E2',   /* Red 100   — fondo de estado crítico */
            },


            // ─────────────────────────────────────────────────────────────
            // 5. SISTEMA TIPOGRÁFICO
            // El briefing BA especifica: "editorial, casi como documentación".
            // La jerarquía tipográfica ES la arquitectura visible del sistema.
            // ─────────────────────────────────────────────────────────────
            fontFamily: {
                // CUERPO DE TEXTO — Inter
                // Neutra, invisible cuando funciona bien. Optimizada para
                // lectura de contenido técnico extenso en pantalla.
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],

                // TÍTULOS — IBM Plex Sans (reemplaza Montserrat)
                // Motivo del cambio: Montserrat es geométrica y fuerte,
                // pero tiene connotaciones de marca de moda/startup.
                // IBM Plex Sans viene de un ecosistema de ingeniería y datos.
                // Comunica "sistema técnico" sin esfuerzo.
                // Si preferís mantener Montserrat: es válido, pero IBM Plex
                // refuerza mejor el posicionamiento del briefing BA (§8).
                heading: ['IBM Plex Sans', 'Inter', 'sans-serif'],

                // DATOS / CÓDIGO — Fira Code
                // Irremplazable para la narrativa de la marca.
                // Aparece en: snippets, métricas crudas, fórmulas, tablas
                // de datos, etiquetas tipo "QA:PASSED", demos de semáforo.
                mono: ['Fira Code', 'ui-monospace', 'monospace'],
            },


            // ─────────────────────────────────────────────────────────────
            // 6. ESCALA DE ESPACIADO EXTENDIDA
            // Los tres briefings mencionan "espacios amplios" y "aire".
            // Tailwind tiene buena base, pero estos valores cubren los
            // layouts editoriales amplios que el briefing PM describe (§6).
            // ─────────────────────────────────────────────────────────────
            spacing: {
                '18': '4.5rem',   /* 72px — separación entre secciones en mobile */
                '22': '5.5rem',   /* 88px — gap estándar entre bloques */
                '128': '32rem',   /* 512px — ancho máximo de artículo */
                '160': '40rem',   /* 640px — contenedor principal estrecho */
            },


            // ─────────────────────────────────────────────────────────────
            // 7. TAMAÑOS TIPOGRÁFICOS ADICIONALES
            // Para la jerarquía "editorial / documentación técnica".
            // El H1 de un README de ingeniería no es el H1 de un hero SaaS.
            // ─────────────────────────────────────────────────────────────
            fontSize: {
                // Para el hero o apertura de sección principal.
                // Grande, pero no sensacionalista.
                'display': ['3.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],

                // Para el subtítulo técnico bajo el hero.
                'lead':    ['1.25rem', { lineHeight: '1.6',  letterSpacing: '-0.01em' }],
            },


            // ─────────────────────────────────────────────────────────────
            // 8. BORDES Y RADIO DE CARDS
            // Sistema técnico → esquinas menos redondeadas.
            // El border-radius alto comunica "app consumer" y "startup".
            // El bajo comunica "módulo de sistema", "herramienta técnica".
            // ─────────────────────────────────────────────────────────────
            borderRadius: {
                'sm':  '4px',
                'DEFAULT': '6px',
                'md':  '8px',
                'lg':  '10px',
                // Sin 'xl', '2xl', '3xl' ni 'full' en este sistema.
                // Si aparecen en el código, son un error de criterio visual.
            },

        }
    }
}

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * GUÍA DE USO RÁPIDO — REGLAS DE APLICACIÓN
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * ESTRUCTURA DE PÁGINA:
 *   bg-canvas       → fondo del <body>
 *   bg-surface      → cards, secciones alternadas, sidebar
 *   border-border   → todos los bordes y divisores
 *   bg-dark         → hero, footer, banners de impacto
 *
 * JERARQUÍA DE TEXTO:
 *   text-ink        → H1, H2, nombres de módulo
 *   text-body       → párrafos, listas de contenido
 *   text-muted      → fechas, breadcrumbs, etiquetas
 *   text-subtle     → texto deshabilitado, placeholder
 *
 * SEMÁFORO (solo con significado real de estado):
 *   text-success / bg-success-bg  → QA OK, dato validado
 *   text-warning / bg-warning-bg  → revisar, incompleto
 *   text-error   / bg-error-bg    → riesgo crítico, dato sucio
 *
 * CTAs (tono: discreto pero firme):
 *   bg-primary text-white                    → botón principal
 *   hover:bg-primary-600                     → hover sobre oscuro
 *   border border-primary text-primary       → botón secundario (ghost)
 *   text-primary underline                   → link de acción en texto
 *
 * TIPOGRAFÍA:
 *   font-heading → todos los Hx
 *   font-sans    → todo el cuerpo
 *   font-mono    → código, métricas crudas, etiquetas de sistema
 *
 * LO QUE NUNCA DEBE PASAR:
 *   ✗ rounded-2xl / rounded-full en cards (se siente app consumer)
 *   ✗ success/error/warning como colores decorativos sin estado
 *   ✗ primary-bg como fondo de sección grande (solo badges/chips)
 *   ✗ subtle como color de texto en contenido leíble
 *   ✗ animaciones que no comunican información (solo transiciones de estado)
 * ─────────────────────────────────────────────────────────────────────────────
 */