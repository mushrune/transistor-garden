/** @type {import('tailwindcss').Config} */
const theme = require("./src/theme/bridge.cjs")
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}", "./public/index.html"],
  important: '#root',
  theme: {
    screens: {
      'xs': '300',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'primary': theme.palette.primary.main,
        'secondary': theme.palette.secondary.main,
        'background-color': theme.palette.background.default,
        'paper-color': theme.palette.background.paper
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

