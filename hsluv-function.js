const hsluv = require('hsluv')

/**
 * @param  { string[] } fractions
 * @returns { string }
 */
function hsluvFunction(...fractions) {
  // Map string parameters to number
  const hsluvColorTuple = fractions.slice(0, 3).map(f => parseFloat(f))

  // Generate css hex from hsluv value
  const colorHex = hsluv.hsluvToHex(hsluvColorTuple)

  // Return css hex back to processor
  return colorHex
}

module.exports = hsluvFunction
