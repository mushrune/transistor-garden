/** @type {import('tailwindcss').Config} */
const muiTheme = require("./src/theme/tailwind_cjs_bridge")
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
        'primary': muiTheme.palette.primary.main,
        'secondary': muiTheme.palette.secondary.main,
        'background-color': muiTheme.palette.background.default,
        'paper-color': muiTheme.palette.background.paper
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

