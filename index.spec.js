const postcss = require('postcss')
const plugin = require('./')
const hsluvFunction = require('./hsluv-function')

const b4d455 = {
  hex: '#b4d455',
  hsluv: [101.1249304036327, 81.77291085886023, 80.42968023943408]
}

async function run(input, output, options) {
  const result = await postcss([plugin(options)]).process(input, {
    from: undefined
  })

  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

describe('postcss plugin', () => {
  it('returns a valid output', async () => {
    const [hue, saturation, lightness] = b4d455.hsluv

    let input = `background: hsluv(${hue}, ${saturation}, ${lightness})`
    let output = `background: ${b4d455.hex}`

    await run(input, output, {})

    input = `div { background: hsluv(${hue}, ${saturation}, ${lightness}); display: block; color: hsluv(${hue}, ${saturation}, ${lightness}) }`
    output = `div { background: ${b4d455.hex}; display: block; color: ${b4d455.hex} }`

    await run(input, output, {})
  })
})

describe('hsluv function', () => {
  it('returns a valid hex', () => {
    expect(hsluvFunction(...b4d455.hsluv)).toEqual(b4d455.hex)
  })

  it('returns black hex color for bad values', () => {
    expect(hsluvFunction([0, 300, 300])).toEqual('#000000')
    expect(hsluvFunction(['foo', 'bar', 'fuzz'])).toEqual('#000000')
  })
})
