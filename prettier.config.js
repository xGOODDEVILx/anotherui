/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 80,
  endOfLine: 'auto',
  tailwindFunctions: ['clsx', 'cva', 'cn', 'classNames'],
};

export default config;
