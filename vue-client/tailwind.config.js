const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: 'Poppins',
    extend: {
      colors: {
        fuchsia: colors.fuchsia
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
