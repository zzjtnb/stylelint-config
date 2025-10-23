<h1 align="center">stylelint-config-zzjtnb</h1>

<p align="center">
  <a href="https://npmjs.com/package/stylelint-config-zzjtnb"><img src="https://img.shields.io/npm/v/stylelint-config-zzjtnb?color=a1b858&label=npm" alt="npm version"></a>
  <a href="https://npmjs.com/package/stylelint-config-zzjtnb"><img src="https://img.shields.io/npm/dm/stylelint-config-zzjtnb?color=50a8d8" alt="npm downloads"></a>
  <a href="https://github.com/zzjtnb/stylelint-config/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/stylelint-config-zzjtnb?color=blue" alt="license"></a>
  <a href="https://github.com/zzjtnb/stylelint-config"><img src="https://img.shields.io/github/stars/zzjtnb/stylelint-config?style=social" alt="GitHub stars"></a>
</p>

<p align="center">
  <strong>简体中文 | <a href="/packages/README.md">English</a></strong>
</p>

<p align="center">
  <strong>✨ 强大而优雅的 Stylelint 配置 ✨</strong>
</p>

<p align="center">
  <em>专为 Vue 3、SCSS 和 UnoCSS 现代化工作流精心打造</em>
</p>

<br>

<p align="center">
  <a href="#-功能特点">功能特点</a> •
  <a href="#-依赖要求">依赖要求</a> •
  <a href="#-安装">安装</a> •
  <a href="#-使用方法">使用方法</a> •
  <a href="#-自定义配置">自定义配置</a>
</p>

<br>

## ✨ 功能特点

<table>
<tr>
<td width="50%" valign="top">

🎨 <strong>现代 CSS 支持</strong>

- ✅ 最新 CSS 标准和最佳实践
- 🎯 逻辑化属性排序
- 🧹 整洁一致的代码风格
- 🚀 性能优化

</td>
<td width="50%" valign="top">

🔥 <strong>框架兼容</strong>

- 💚 Vue 3 SFC `<style>` 块
- 🎨 SCSS/Sass 语法支持
- ⚡ UnoCSS & Tailwind 友好
- 📄 HTML 内联样式

</td>
</tr>
</table>

🛠️ <strong>坚实的基础</strong>

| 包 | 用途 |
|---------|---------|
| `stylelint-config-standard` | CSS 最佳实践 |
| `stylelint-config-standard-scss` | SCSS/Sass 支持 |
| `stylelint-config-recommended-vue` | Vue 3 SFC 支持 |
| `stylelint-config-html` | HTML 内联样式 |
| `stylelint-config-clean-order` | 逻辑属性排序 |

## 📋 依赖要求

| 包 | 版本 | 兼容性 |
|---------|---------|---------------|
| **Stylelint** | `>=16.19.1` | ✅ 兼容所有 16.x 及更高版本 |

## 📦 安装

```bash
# 📦 npm
npm install stylelint stylelint-config-zzjtnb -D

# 🧶 yarn
yarn add stylelint stylelint-config-zzjtnb -D

# 🚀 pnpm（推荐）
pnpm add stylelint stylelint-config-zzjtnb -D
```

> [!TIP]
> 确保 `stylelint` 版本 `>=16.19.1` 以获得最佳体验！

## 🚀 使用方法

在项目根目录创建 `.stylelintrc.js` 文件：

<strong>CommonJS</strong>

```js
module.exports = {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    // 🎨 在这里添加你的自定义规则（可选）
  }
}
```

<strong>ESM</strong>

```js
export default {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    // 🎨 在这里添加你的自定义规则（可选）
  }
}
```

> [!NOTE]
> 就这么简单！🎉 现在你的样式已经受到全面的 lint 保护了。

### 💻 VS Code 推荐设置

<details>
<summary>🔧 点击展开 VS Code 配置</summary>

<br>

**步骤 1：** 安装官方 [Stylelint 扩展](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

**步骤 2：** 在 `.vscode/settings.json` 中添加以下配置：

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

> [!TIP]
> 现在享受保存时自动格式化的便利！🎉

</details>

## 📖 包含内容

<details>
<summary>🎯 点击展开完整功能列表</summary>

<br>

🧩 <strong>配置亮点</strong>

| 功能 | 说明 |
|------|------|
| 🎨 属性排序 | 通过 `stylelint-config-clean-order` 进行逻辑分组 |
| 🧹 整洁格式 | 属性组之间无多余空行 |
| 📐 标准规则 | 内置官方 CSS & SCSS 标准 |
| 💚 Vue 支持 | SFC `<style>` 块的正确语法检测 |
| ⚡ 现代 CSS | UnoCSS、Tailwind、容器查询、嵌套 |
| 🎭 伪元素 | 最新的 CSS 伪类和伪元素 |
| 🔧 可定制 | 易于扩展自定义规则 |

🎨 <strong>智能默认值示例</strong>

```css
/* ✅ 属性会自动按逻辑顺序排列 */
.component {
  /* 定位 */
  position: relative;
  top: 0;

  /* 盒模型 */
  display: flex;
  width: 100%;
  padding: 1rem;

  /* 排版 */
  font-size: 1rem;
  color: #333;

  /* 视觉 */
  background: white;
  border-radius: 8px;
}
```

</details>

## 🎨 自定义配置

<details>
<summary>⚙️ 调整属性间距</summary>

<br>

默认情况下，我们通过移除属性组之间的额外空行，让你的代码**紧凑整洁**。

如果你更喜欢**带间距**的属性，可以在配置中添加：

```js
module.exports = {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    'declaration-empty-line-before': 'always',
    'at-rule-empty-line-before': 'always',
  }
}
```

</details>

<details>
<summary>🎯 覆盖任何规则</summary>

<br>

```js
module.exports = {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    // 关闭特定规则
    'color-hex-length': null,

    // 调整规则严重性
    'declaration-block-no-duplicate-properties': 'warning',

    // 配置规则选项
    'selector-max-id': [1, { severity: 'warning' }],
  }
}
```

> [!NOTE]
> 查看 [Stylelint 规则文档](https://stylelint.io/user-guide/rules/) 了解所有可用选项。

</details>

## 💖 为什么选择这个配置？

| | | |
|:---:|---|---|
| ⚡ | **快速设置** | 一行安装，零配置启动 |
| 🎯 | **有主见** | 基于实际使用精心打造的默认配置 |
| 🔧 | **灵活** | 易于根据需求自定义和扩展 |
| 🌟 | **现代化** | 为 Vue 3、UnoCSS 和前沿 CSS 而构建 |

## 📄 许可证

[MIT 许可证](LICENSE) &copy; 2022-PRESENT [争逐](https://zzjtnb.com)

<br>

<p align="center">
  <sub>用 ❤️ 制作 by <a href="https://github.com/zzjtnb">@zzjtnb</a></sub>
  <br>
  <sub>如果这个项目对你有帮助，不妨<a href="https://github.com/zzjtnb/stylelint-config">给个 ⭐️</a></sub>
</p>
