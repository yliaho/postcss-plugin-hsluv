const postcss = require('postcss')
const plugin = require('./')
const hsluvFunction = require('./hsluv-function')

const b4d4455 = {
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
  it('returns a valid hex', async () => {
    const [hue, saturation, lightness] = b4d4455.hsluv

    const input = `background: hsluv(${hue}, ${saturation}, ${lightness})`
    const output = `background: ${b4d4455.hex}`

    await run(input, output, {})
  })
})

describe('hsluv function', () => {
  it('returns a valid hex', () => {
    console.log(plugin)
    expect(hsluvFunction(...b4d4455.hsluv)).toEqual(b4d4455.hex)
  })
})
