module.exports = {
  // 你可以继承一个已存在的配置数组,数组中的每个项都优先于前一项.
  // 因此第二项覆盖第一项中的规则,第三项覆盖第一项和第二项中的规则,依此类推,最后一项覆盖其他所有内容
  extends: [
    'stylelint-config-idiomatic-order',
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-html',
  ],
  rules: {},
  ignoreFiles: [
    '**/dist/**/*',
    '**/**/stats.html',
  ],
  overrides: [
    {
      files: ['*.md', '**/*.md'],
      customSyntax: 'postcss-markdown',
    },
  ],
}
