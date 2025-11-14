import parentConfig from '@robinbobin/ts-eslint-prettier/eslint.config.mjs'

export default [
  ...parentConfig,
  {
    ignores: ['dist']
  }
]
