/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Rozšírime pôvodnú tému o naše vlastné hodnoty
    extend: {
      // 1. Pridali sme sekciu pre farby
      colors: {
        'brand-purple': '#a151ff', // Naša nová vlastná farba
      },
      // 2. Pridali sme sekciu pre tiene
      boxShadow: {
        'glow-purple': '0 0 25px #a151ff',
        'glow-purple-light': '0 0 20px rgba(161, 81, 255, 0.6)', // Použili sme rgba pre jemnejšiu verziu
      },
      // 3. Pridali sme sekciu pre animácie (ak by si chcel aj tú pre gradient)
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
      },
    },
  },
  plugins: [ require('tailwind-scrollbar'),
  ],
}