/** Sistema de diseno "High-Performance Corporativo".
 *
 *  Los tokens vivian en theme.js, que solo tenia sentido con el CDN de Tailwind
 *  (asignaba tailwind.config en runtime). Ahora son la fuente unica del build:
 *  mismos valores, un solo lugar, y el CSS se genera en local.
 */
module.exports = {
  darkMode: "class",
  content: ["./*.html", "./ironlog/*.html", "./blog/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        "primary-light": "#3b82f6",
        "primary-dark": "#1e3a8a",

        "background-light": "#F7FAFC",
        "background-dark": "#0f172a",

        "surface-light": "#FFFFFF",
        "surface-dark": "#1E293B",

        "text-light": "#2D3748",
        "text-dark": "#E2E8F0",
        "text-muted-light": "#718096",
        "text-muted-dark": "#94A3B8",

        success: "#15803D",
        "success-bg": "#DCFCE7",
        warning: "#B45309",
        "warning-bg": "#FEF3C7",
        error: "#B91C1C",
        "error-bg": "#FEE2E2",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      boxShadow: {
        structural:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
