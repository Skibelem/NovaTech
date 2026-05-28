/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── NovaTech Brand System ──────────────────────────────────
        nova: {
          blue:   '#0317fc',
          yellow: '#fcfc03',
          dark:   '#050816',
          darker: '#02030a',
          gray:   '#94a3b8',
          light:  '#ffffff',
        },
        // ── Legacy aliases (safely remapped to new brand values) ──
        'nova-navy':           '#050816',   // → nova.dark
        'nova-dark-blue':      '#02030a',   // → nova.darker
        'nova-electric-blue':  '#0317fc',   // → nova.blue
        'nova-aqua-cyan':      '#fcfc03',   // → nova.yellow
        'nova-white':          '#ffffff',   // → nova.light
        'nova-soft-gray':      '#94a3b8',   // → nova.gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
