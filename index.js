const postcss = require('postcss')
const postcssFunctions = require('postcss-functions')
const hsluv = require('hsluv')

const options = {
  functions: {
    hsluv(...fractions) {
      // Map string parameters to number
      const hsluvColorTuple = fractions.slice(0, 3).map(f => parseInt(f))

      // Generate css hex from hsluv value
      const colorHex = hsluv.hsluvToHex(hsluvColorTuple)

      // Return css hex back to processor
      return colorHex
    }
  }
}

function evaulateHsluvFunctions() {
  return function(css) {
    return postcss([postcssFunctions(options)]).process(css, {
      from: css.source.input.files
    })
  }
}

module.exports = postcss.plugin('postcss-plugin-hsluv', options => {
  return postcss([evaulateHsluvFunctions()])
})
