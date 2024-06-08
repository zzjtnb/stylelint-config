const { antfu } = require('@antfu/eslint-config')

module.exports = antfu(
  {
    vue: true,
    typescript: true,
    formatters: true,
    ignores: [
      'README.md',
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'unused-imports/no-unused-vars': 'off',
      'n/prefer-global/buffer': 'off',
      'n/prefer-global/process': 'off',
    },

  },
)
