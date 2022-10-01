// This is a workaround to make following prettier plugins compatible with each other.
// See: https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1024722576

const tailwindcss = require('prettier-plugin-tailwindcss')
const organizeImports = require('prettier-plugin-organize-imports')

module.exports = {
  ...tailwindcss,
  parsers: {
    ...tailwindcss.parsers,
    ...Object.keys(organizeImports.parsers).reduce((acc, key) => {
      acc[key] = {
        ...tailwindcss.parsers[key],
        preprocess(code, options) {
          return organizeImports.parsers[key].preprocess(code, options)
        },
      }
      return acc
    }, {}),
  },
}
