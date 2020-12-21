const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: 'Poppins',
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        'fb-color': '#3b5998',
        'google-color': '#dd4b39',
        'yahoo-color': '#4A00A0',
        'github-color': '#333'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'focus', 'active', 'hover'],
      boxShadow: ['active']
    },
  },
  plugins: [],
}
