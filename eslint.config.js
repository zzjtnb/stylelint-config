// eslint.config.js
// 如果你的项目没有"type":"module"在其package.json文件中指定
// 那么eslint.config.js必须采用 CommonJS 格式

import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    unocss: true,
    formatters: {
      html: true,
    },
    // 忽略不需要解析的文件
    ignores: [
      '**/**/stats.html',
      'node_modules/**',
      'dist/**',
    ],
  },
  {
    // 通用规则
    rules: {
      'no-console': 'off',
    },
  },

)
