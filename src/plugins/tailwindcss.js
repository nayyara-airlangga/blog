module.exports = async function tailwindCSSPlugin(_context, _options) {
  return {
    name: 'docusaurus-tailwindcss',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require('tailwindcss'))
      postcssOptions.plugins.push(require('autoprefixer'))
      return postcssOptions
    }
  }
}
