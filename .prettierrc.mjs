/** @type {import('prettier').Config} */
const config = {
  printWidth: 120,
  semi: false,
  singleQuote: true,

  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],

  overrides: [
    {
      files: '**/*.json',
      options: {
        printWidth: 80,
      },
    },
  ],
}

export default config
