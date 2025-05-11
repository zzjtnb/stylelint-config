# stylelint-config-zzjtnb

[![npm](https://img.shields.io/npm/v/stylelint-config-zzjtnb?color=a1b858&label=)](https://npmjs.com/package/stylelint-config-zzjtnb)

**简体中文 | [English](/packages/README.md)**

> 一个平衡各方面需求的Stylelint配置，专为现代CSS、SCSS、Vue 3和UnoCSS设计。

## 功能特点

- 基于`stylelint-config-standard`和`stylelint-config-standard-scss`标准配置
- 支持Vue单文件组件中的SCSS样式（扩展`stylelint-config-recommended-vue/scss`）
- 支持HTML文件中的样式（扩展`stylelint-config-html`）
- 采用`stylelint-config-clean-order`进行逻辑属性分组和排序
- 完全兼容UnoCSS和TailwindCSS
- 为现代开发提供合理的默认设置

## 安装

```bash
# npm
npm install stylelint-config-zzjtnb --save-dev

# yarn
yarn add stylelint-config-zzjtnb -D

# pnpm
pnpm add stylelint-config-zzjtnb -D
```

## 使用方法

在`.stylelintrc.js`文件中添加以下内容：

```js
module.exports = {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    // 你的自定义规则（可选）
  }
}
```

如果你使用ESM：

```js
export default {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    // 你的自定义规则（可选）
  }
}
```

### VS Code推荐设置

1. 安装[Stylelint扩展](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

2. 在`.vscode/settings.json`中添加以下配置：

```json
{
  "css.validate": false,
  "scss.validate": false,
  "stylelint.validate": ["css", "scss", "vue", "html"],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  }
}
```

## 包含内容

该配置：

- 使用`stylelint-config-clean-order`进行逻辑CSS属性分组和排序（放置在extends数组的最后，确保排序规则不被其他配置覆盖）
- 禁用属性组之间的额外空行（通过设置`declaration-empty-line-before`和`at-rule-empty-line-before`为`never`）
- 扩展了CSS和SCSS的官方标准
- 支持Vue单文件组件样式，具有正确的语法检测
- 针对UnoCSS和现代CSS功能优化了规则
- 允许使用常见的CSS容器、at规则和嵌套功能
- 支持最新的CSS伪类和伪元素

### 自定义属性排序

默认情况下，我们使用`stylelint-config-clean-order`进行逻辑CSS属性分组和排序。该插件会尝试在属性组之间添加额外的空行，但我们的配置通过以下设置禁用了这种行为：

```js
'declaration-empty-line-before': 'never',
'at-rule-empty-line-before': 'never'
```

如果你想启用这些额外的空行，可以在你的配置中覆盖这些规则。

## 特性详解

### Vue 3支持

- 完整支持Vue 3 `<script setup>`和组合式API
- 支持CSS变量绑定`v-bind()`
- 支持深度选择器`::v-deep`和插槽选择器`::v-slotted`
- 支持安全区域函数`v-safe-area-inset-*`

### UnoCSS支持

- 完整支持`@apply`、`@screen`、`@layer`等指令
- 支持`theme()`函数和动态主题变量
- 支持UnoCSS属性选择器和特殊伪类
- 支持容器查询`@container-queries`
- 放宽命名规则，允许使用原子类名

### SCSS优化

- 支持复杂嵌套和Sass内置模块
- 放宽混合器和变量命名限制
- 允许使用各种颜色函数格式
- 支持SCSS运算符和函数
- 支持CSS新的嵌套语法特性

## 许可证

[MIT 许可证](LICENSE) &copy; 2022 [争逐](https://zzjtnb.com)
