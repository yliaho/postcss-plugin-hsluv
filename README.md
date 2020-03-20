# postcss-plugin-hsluv

> PostCSS plugin for HSLuv color model functions

- [HSL vs HSLuv comparison](https://www.hsluv.org/comparison/)
- [Color spaces for Human Beings](https://www.boronine.com/2012/03/26/Color-Spaces-for-Human-Beings/)

| HSL Lightness                             | HSLuv Lightness                               |
| ----------------------------------------- | --------------------------------------------- |
| ![hsl](./documentation/hsl-lightness.png) | ![hsluv](./documentation/hsluv-lightness.png) |

---

## Usage

```sh
npm install postcss-plugin-hsluv
```

#### `postcss.config.js`

```js
module.exports = {
  plugins: {
    'postcss-plugin-hsluv': {}
  }
}
```

## Example

### Input

```css
div {
  background: hsluv(120, 50%, 50%);
  color: hsluv(120, 50%, 85%);
}
```

## Todo

- [ ] Transform to HSL instead of hex
- [ ] Support for alpha values
- [x] Tests

## Acknowledgements

Full credit for HSLuv color model and its design goes to [hsluv/shluv](https://github.com/hsluv/hsluv/) and its maintainers. This postcss plugin merely uses the javascript implementation from the repository.
