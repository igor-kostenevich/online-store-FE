/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.js', './src/**/*.vue'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          white: '#FFFFFF',
          lightBlack: '#363738',
        },

        secondary: {
          mediumWhite: '#F5F5F5',
          light: '#FEFAF1',
          red: '#DB4444',
        },
        text: {
          base: '#FFFFFF',
          gray: '#7d8184',
          black: '#000000',
        },
        buttons: {
          green: '#47B486',
          red: '#DB4444',
          hoverRed: '#E2B93B',
          hoverBlue: '#EB5757',
        },
      },
      screen: {
        ...defaultTheme.screens,
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fill: theme => theme('colors'),
    },
  },
  plugins: [],
}
