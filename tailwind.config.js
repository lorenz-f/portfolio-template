/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        dmSub: ["DM Serif Text", "serif"],
        inter: ['Inter Tight', 'sans-serif']
      }
    },
    screens: {
      'sm': {'max': '800px'}
    }
  },
  plugins: [],
}
