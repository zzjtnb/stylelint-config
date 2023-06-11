module.exports = {
  // 你可以继承一个已存在的配置数组,数组中的每一项都优先于下一项.
  // 所以,第一项覆盖所有,第二项覆盖除了第一项之外的所有项,最后一项被其他所有项覆盖,等等
  extends: [
    // 'stylelint-config-idiomatic-order',
    // 'stylelint-config-standard-scss',
    // require.resolve('./lib/index.js'),
    'stylelint-config-idiomatic-order',
    'stylelint-config-standard-scss',
    'stylelint-config-html',
  ],
  rules: {},
}
