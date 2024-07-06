/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gold': '#C5AD57',
      }
    },
    fontFamily: {
      teko: ['Teko', 'sans-serif']
    }
  },
  plugins: [],
}

