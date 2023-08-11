const config = {
  bracketSpacing: true,
  printWidth: 90,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'css',
  bracketSameLine: false,
  jsxSingleQuote: false,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  useTabs: false,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}

module.exports = config
