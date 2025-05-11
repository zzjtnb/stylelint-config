module.exports = {
  // 你可以继承一个已存在的配置数组,数组中的每一项都优先于前一项.
  // 因此第二项覆盖第一项中的规则,第三项覆盖第一项和第二项中的规则,依此类推,最后一项覆盖其他所有内容
  // 该配置继承了多个预设，每个项目都优先于前一个

  /**
   * 继承的配置数组，按优先级从低到高排列
   * @type {string[]}
   * @property {string} 0 - stylelint-config-standard: 官方标准规则集，包含基础CSS规则
   * {@link https://github.com/stylelint/stylelint-config-standard}
   * @property {string} 1 - stylelint-config-standard-scss: 官方SCSS标准规则集，提供SCSS特有语法支持
   * {@link https://github.com/stylelint-scss/stylelint-config-standard-scss}
   * @property {string} 2 - stylelint-config-recommended-vue/scss: Vue组件中SCSS支持，处理Vue SFC语法和作用域样式
   * {@link https://github.com/ota-meshi/stylelint-config-recommended-vue}
   * @property {string} 3 - stylelint-config-html: 提供对HTML/XML等标记语言中样式的支持，放在Vue配置后面
   * 以确保HTML处理规则不会覆盖Vue特定规则，同时也处理非Vue模板
   * {@link https://github.com/ota-meshi/stylelint-config-html}
   * @property {string} 4 - stylelint-config-clean-order: 提供CSS属性的逻辑分组和排序规则
   * {@link https://github.com/kutsan/stylelint-config-clean-order}
   *
   * 注意：配置顺序很重要，stylelint-config-html 必须放在 Vue 配置之后，这样通用HTML规则不会覆盖Vue特有规则。
   * stylelint-config-clean-order 必须放在最后，以确保其属性排序和空行规则不被其他配置覆盖。
   * 参考 stylelint-config-html README: https://github.com/ota-meshi/stylelint-config-html#usage
   */
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html',
    'stylelint-config-clean-order',
  ],
  rules: {
    // 允许unocss常用指令
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        // UnoCSS核心指令
        'apply',
        'screen',
        'theme',
        'unocss',
        'layer',
        'variants',
        'responsive',
        'utilities',
        // UnoCSS扩展指令
        'uno',
        'unocss-variants',
        'unocss-apply',
        'container-queries',
        // Tailwind兼容指令
        'tailwind',
        'tailwindcss',
        // 容器查询
        'container',
        // 变体
        'variants',
        // SCSS指令
        'use',
        'forward',
        'import',
        'mixin',
        'include',
        'function',
        'extend',
        'error',
        'warn',
        'debug',
        'at-root',
        'if',
        'for',
        'each',
        'while',
        // 兼容编辑器插件的特殊写法
        /^apply$/,
      ],
    }],
    'scss/at-rule-no-unknown': [true, {
      ignoreAtRules: [
        // UnoCSS核心指令
        'apply',
        'screen',
        'theme',
        'unocss',
        'layer',
        'variants',
        'responsive',
        'utilities',
        // UnoCSS扩展指令
        'uno',
        'unocss-variants',
        'unocss-apply',
        'container-queries',
        // Tailwind兼容指令
        'tailwind',
        'tailwindcss',
        // 容器查询
        'container',
        // 变体
        'variants',
      ],
    }],
    // 允许特殊函数
    'function-no-unknown': [true, {
      ignoreFunctions: [
        // UnoCSS函数
        'theme',
        // Vue绑定函数
        'v-bind',
        // Vue 3安全区域函数
        'v-safe-area-inset-top',
        'v-safe-area-inset-bottom',
        'v-safe-area-inset-left',
        'v-safe-area-inset-right',
      ],
    }],
    // 放宽class命名，兼容unocss原子类
    'selector-class-pattern': null,
    // 允许 unocss @apply，不报废弃警告
    'at-rule-no-deprecated': null,
    // 放宽SCSS嵌套规则
    'scss/selector-no-redundant-nesting-selector': null,

    // 支持CSS嵌套新特性
    'selector-nested-pattern': null,
    // SCSS优化配置
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': null,
    'max-nesting-depth': null, // 允许更深层次的嵌套
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/operator-no-newline-after': null,
    'scss/operator-no-unspaced': null,
    // 兼容UnoCSS文本转换
    'value-keyword-case': null,
    // 放宽CSS变量命名规则
    'custom-property-pattern': null,
    // 兼容Vue 3深度选择器和插槽选择器
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: [
        // Vue 2/3深度选择器
        'deep',
        'v-deep',
        'global',
        // Vue 3插槽选择器
        'slotted',
        'v-slotted',
      ],
    }],
    // 支持Vue特殊伪类
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: [
        'deep',
        'global',
        'slotted',
        'export',
        'v-slotted',
        'uno',
        'uno-layer',
        // UnoCSS特殊伪类
        'p-4',
        'base',
        // 支持所有可能的形式
        /^[a-z0-9_-]+$/,
      ],
    }],
    // Vue 3 SFC中的属性选择器优化
    'selector-attribute-quotes': null,

    // 允许通用属性值，兼容theme函数和CSS变量
    'declaration-property-value-no-unknown': null,

    // 颜色函数相关规则
    'color-function-notation': null, // 允许传统和现代颜色函数
    'color-function-alias-notation': null, // 允许rgba和rgb
    'alpha-value-notation': null, // 允许百分比和小数形式的透明度
    // 当使用大量原子类时，可能导致特异性下降问题
    'no-descending-specificity': null,
    // UnoCSS生成的CSS可能很大，不要限制选择器数量
    'selector-max-universal': null,

    // 禁用属性排序，因为用户可能有自己的排序规则
    // 'order/properties-order': null,

    // 禁用声明间空行
    // stylelint-config-clean-order会重写declaration-empty-line-before和at-rule-empty-line-before两个规则，
    // 在属性组之间添加额外空行。设置为'never'可以禁用这些额外空行。
    // 'declaration-empty-line-before': 'never',
    // 'at-rule-empty-line-before': 'never',
  },
  ignoreFiles: [
    '**/dist/**/*',
    '**/**/stats.html',
    '**/node_modules/**/*',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
}
