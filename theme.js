/**
 * THEME.JS — SISTEMA DE DISEÑO "HIGH-PERFORMANCE CORPORATIVO"
 * ================================================
 * Versión 3.0 — Aesthetic Update
 *
 * FILOSOFÍA CENTRAL:
 * Comunicación premium, high-tech y de alto rendimiento.
 * Uso de colores vibrantes, fondos profundos, desenfoques (backdrop-blur),
 * esquinas redondeadas modernas y sombras ricas.
 */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1d4ed8", // Professional Blue (from hero)
                "primary-light": "#3b82f6",
                "primary-dark": "#1e3a8a",

                // Backgrounds
                "background-light": "#F7FAFC",
                "background-dark": "#0f172a", // Dark Grey/Blue (Slate 900)

                // Surfaces / Cards
                "surface-light": "#FFFFFF",
                "surface-dark": "#1E293B", // Slate 800

                // Texts
                "text-light": "#2D3748",
                "text-dark": "#E2E8F0", // Slate 200
                "text-muted-light": "#718096",
                "text-muted-dark": "#94A3B8", // Slate 400

                // Semantic Validation (Keeping previous semantic utility)
                success: '#15803D',
                'success-bg': '#DCFCE7',
                warning: '#B45309',
                'warning-bg': '#FEF3C7',
                error: '#B91C1C',
                'error-bg': '#FEE2E2',
            },
            fontFamily: {
                // Unified display font for a modern tech feel
                display: ["Inter", "sans-serif"],
                sans: ["Inter", "sans-serif"],
                mono: ['Fira Code', 'monospace'],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'md': "0.375rem",
                'lg': "0.5rem",
                'xl': "0.75rem",
                '2xl': "1rem",
                'full': "9999px"
            },
            boxShadow: {
                'structural': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }
        },
    },
};