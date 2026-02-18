/**
 * THEME.JS - SISTEMA DE DISEÑO "CONSULTOR PRIMERO"
 * ------------------------------------------------
 * Este archivo controla la identidad visual de todo el sitio.
 * * ESTRATEGIA DE COLOR:
 * - Base: Azul Ingeniería (Deep Blue). Transmite autoridad técnica y solidez.
 * - Validación: Verde Datos (Data Green). Usado para "QA Pasado", "Correcto", "Validado".
 * - Alerta: Rojo Error. Usado para "Datos Sucios", "Riesgo", "Stop".
 * - Neutros: Escala de Slate (Pizarra). Tonos fríos y técnicos, evitan la suciedad del gris puro.
 */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                // --- COLOR DE MARCA (ACTION & BRAND) ---
                // He oscurecido ligeramente el azul original (#2563EB) a un tono más "Senior" (#1D4ED8).
                // Evita el look "Startup recién nacida" y comunica "Consultor con experiencia".
                primary: '#1D4ED8',     /* Blue 700 - Autoridad, Ingeniería, Acción Sobria */
                
                // --- NEUTROS (ESTRUCTURA & TEXTO) ---
                // Fondo oscuro muy profundo, casi negro pero con tinte azulado.
                dark: '#0F172A',        /* Slate 900 - Títulos, Fondos Hero, Pie de página */
                
                // Color principal de lectura. Alto contraste pero menos duro que el negro puro.
                body: '#334155',        /* Slate 700 - Párrafos, Artículos */
                
                // Textos secundarios, fechas, metadatos.
                light: '#64748B',       /* Slate 500 - Subtítulos, Breadcrumbs */

                // --- SEMÁFORO DE DATOS (QA & DECISIÓN) ---
                // Fundamental para tu narrativa de "Validación".
                
                // ÉXITO / VALIDADO
                success: '#15803d',     /* Green 700 - Texto de éxito, bordes de cards validadas */
                bgSuccess: '#dcfce7',   /* Green 100 - Fondos suaves para mensajes de éxito */
                
                // ERROR / RIESGO / DATO SUCIO
                error: '#b91c1c',       /* Red 700 - Alertas críticas, Datapoints peligrosos */
                bgError: '#fee2e2',     /* Red 100 - Fondo de alertas */
                
                // ALERTA / ATENCIÓN (Usado en demos de semáforos)
                warning: '#b45309',     /* Amber 700 */
                bgWarning: '#fef3c7',   /* Amber 100 */
            },
            fontFamily: {
                // Inter: Limpia, moderna, invisible. Para leer mucho sin cansarse.
                sans: ['Inter', 'sans-serif'],
                
                // Montserrat: Geométrica, fuerte. Para Títulos que gritan "Estructura".
                heading: ['Montserrat', 'sans-serif'],
                
                // Fira Code: La fuente de los ingenieros. Para código, datos crudos y detalles técnicos.
                // Refuerza tu identidad de "Yo toco el código, no solo el PowerPoint".
                mono: ['Fira Code', 'monospace'],
            }
        }
    }
}