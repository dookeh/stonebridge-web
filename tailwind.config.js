/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Matches the heavy, blocky serifs of "STEELBOURNE"
        header: ['"Alfa Slab One"', 'serif'], 
        // Modern, technical font for SMC UI and navigation
        ui: ['"Michroma"', 'sans-serif'],    
        // Distressed typewriter font for lore and status reports
        typewriter: ['"Special Elite"', 'serif'], 
        // Clean sans for standard readability
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        // The primary "Burnt Orange" from the text
        'sb-orange': {
          DEFAULT: '#d97706',
          dark: '#b45309',
          light: '#fbbf24',
        },
        // The "Brass/Gold" from the SMC Badge
        'sb-gold': {
          DEFAULT: '#a37e2c',
          muted: '#785d21',
        },
        // The deep "Industrial Black" background
        'sb-dark': '#0a0a0c',
        'sb-grey': '#1a1a1e',
      },
      boxShadow: {
        // A heavy glow to match the logo's drop shadow
        'glow': '0 0 20px rgba(217, 119, 6, 0.2)',
        'gold-glow': '0 0 30px rgba(163, 126, 44, 0.3)',
      },
      letterSpacing: {
        'ultra-widest': '0.5em',
      },
      backgroundImage: {
        // This adds a subtle "metal/carbon" texture look
        'carbon-pattern': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
      }
    },
  },
  plugins: [],
}