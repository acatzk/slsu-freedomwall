module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: 'Poppins',
    extend: {
      colors: {
        
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
