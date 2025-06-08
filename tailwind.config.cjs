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
      boxShadow: {
        card: '0 1px 13px 0 rgba(0, 0, 0, 0.05)',
      },
      colors: {
        primary: {
          white: '#FFFFFF',
          'light-black': '#363738',
        },
        secondary: {
          'medium-white': '#F5F5F5',
          light: '#FEFAF1',
          red: '#DB4444',
        },
        text: {
          base: '#FFFFFF',
          gray: '#7d8184',
          black: '#000000',
        },
        button: {
          primary: {
            default: '#47B486',
            hover: '#E2B93B',
          },
          secondary: {
            default: '#DB4444',
            hover: '#EB5757',
          },
        },
      },

      screen: {
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fill: theme => theme('colors'),
    },
  },
  plugins: [],
}
