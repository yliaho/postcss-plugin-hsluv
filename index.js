const postcss = require('postcss')
const postcssFunctions = require('postcss-functions')
const hsluvFunction = require('./hsluv-function')

const options = {
  functions: {
    hsluv(...fractions) {
      return hsluvFunction(...fractions)
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
