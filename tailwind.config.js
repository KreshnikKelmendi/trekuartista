/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Integral', 'sans'],
        custom1: ['K2D', 'sans'],
        custom2: ['Integral', 'sans']
      },
    },
  },
  plugins: [],
}

