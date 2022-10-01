/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',

  plugins: [require('./.prettier-plugins-workaround.cjs')],

  overrides: [
    {
      files: '**/*.json',
      options: {
        printWidth: 80,
      },
    },
  ],
}
