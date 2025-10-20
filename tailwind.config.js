/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('./themes/hugo-saasify-theme/tailwind.config.js')],
    content: [
      "./themes/hugo-saasify-theme/layouts/**/*.html",
      "./layouts/**/*.html",
      "./content/**/*.{html,md}"
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          heading: ['Plus Jakarta Sans', 'sans-serif'],
        },
        colors: {
          primary: {    
          // Professional blue palette based on #2563eb (similar to Tailwind's blue-600)
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            DEFAULT: '#3b82f6',  // Main primary color - bright professional blue
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
          },
          secondary: {  
          // Modern green palette based on #10b981 (similar to Tailwind's emerald-500)
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            DEFAULT: '#22c55e',  // Main secondary color - vibrant green
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
          },
          // Accent colors for special use cases
          accent: {
            // Teal/Cyan for highlights
            light: '#06b6d4',    // cyan-500
            DEFAULT: '#0891b2',  // cyan-600
            dark: '#0e7490',     // cyan-700
          },
          // Research area specific blues (progressive depth)
          research: {
            light: '#60a5fa',    // blue-400
            medium: '#3b82f6',   // blue-500
            dark: '#2563eb',     // blue-600
            darker: '#1d4ed8',   // blue-700
          },
          // Status colors
          success: {
            light: '#86efac',    // green-300
            DEFAULT: '#22c55e',  // green-500
            dark: '#16a34a',     // green-600
          },
          warning: {
            light: '#fcd34d',    // amber-300
            DEFAULT: '#f59e0b',  // amber-500
            dark: '#d97706',     // amber-600
          },
          danger: {
            light: '#fca5a5',    // red-300
            DEFAULT: '#ef4444',  // red-500
            dark: '#dc2626',     // red-600
          },
          // Neutral grays (using Tailwind's slate palette)
          neutral: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          }
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
}