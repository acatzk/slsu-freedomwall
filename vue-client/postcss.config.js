const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    process.env.NODE_ENV === 'production' && require('@/fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.vue',
        './public/index.html'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  ]
}
