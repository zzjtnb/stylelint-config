<h1 align="center">stylelint-config-zzjtnb</h1>

<p align="center">
  <a href="https://npmjs.com/package/stylelint-config-zzjtnb"><img src="https://img.shields.io/npm/v/stylelint-config-zzjtnb?color=a1b858&label=npm" alt="npm version"></a>
  <a href="https://npmjs.com/package/stylelint-config-zzjtnb"><img src="https://img.shields.io/npm/dm/stylelint-config-zzjtnb?color=50a8d8" alt="npm downloads"></a>
  <a href="https://github.com/zzjtnb/stylelint-config/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/stylelint-config-zzjtnb?color=blue" alt="license"></a>
  <a href="https://github.com/zzjtnb/stylelint-config"><img src="https://img.shields.io/github/stars/zzjtnb/stylelint-config?style=social" alt="GitHub stars"></a>
</p>

<p align="center">
  <strong><a href="/packages/README.zh-CN.md">简体中文</a> | English</strong>
</p>

<p align="center">
  <strong>✨ A powerful yet elegant Stylelint config ✨</strong>
</p>

<p align="center">
  <em>Crafted for modern CSS workflows with Vue 3, SCSS, and UnoCSS</em>
</p>

<br>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-requirements">Requirements</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-customization">Customization</a>
</p>

<br>

## ✨ Features

<table>
<tr>
<td width="50%" valign="top">

🎨 <strong>Modern CSS Support</strong>

- ✅ Latest CSS standards & best practices
- 🎯 Logical property ordering
- 🧹 Clean, consistent code style
- 🚀 Optimized for performance

</td>
<td width="50%" valign="top">

🔥 <strong>Framework Ready</strong>

- 💚 Vue 3 SFC with `<style>` blocks
- 🎨 SCSS/Sass syntax support
- ⚡ UnoCSS & Tailwind friendly
- 📄 HTML inline styles

</td>
</tr>
</table>

🛠️ <strong>Built on Solid Foundations</strong>

| Package | Purpose |
|---------|---------|
| `stylelint-config-standard` | CSS best practices |
| `stylelint-config-standard-scss` | SCSS/Sass support |
| `stylelint-config-recommended-vue` | Vue 3 SFC support |
| `stylelint-config-html` | HTML inline styles |
| `stylelint-config-clean-order` | Logical property ordering |

## 📋 Requirements

| Package | Version | Compatibility |
|---------|---------|---------------|
| **Stylelint** | `>=16.19.1` | ✅ Compatible with all 16.x and beyond |

## 📦 Installation

```bash
# 📦 npm
npm install stylelint stylelint-config-zzjtnb -D

# 🧶 yarn
yarn add stylelint stylelint-config-zzjtnb -D

# 🚀 pnpm (recommended)
pnpm add stylelint stylelint-config-zzjtnb -D
```

> [!TIP]
> Make sure `stylelint` version is `>=16.19.1` for the best experience!

## 🚀 Usage

Create a `.stylelintrc.js` file in your project root:

<strong>CommonJS</strong>

```js
module.exports = {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    // 🎨 Add your custom rules here (optional)
  }
}
```

<strong>ESM</strong>

```js
export default {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    // 🎨 Add your custom rules here (optional)
  }
}
```

> [!NOTE]
> That's it! 🎉 Your styles are now protected by a comprehensive linting setup.

### 💻 VS Code Setup (Recommended)

<details>
<summary>🔧 Click to expand VS Code configuration</summary>

<br>

**Step 1:** Install the official [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

**Step 2:** Add this to your `.vscode/settings.json`:

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
> Now enjoy auto-formatting on save! 🎉

</details>

## 📖 What's Inside?

<details>
<summary>🎯 Click to expand the full feature list</summary>

<br>

🧩 <strong>Configuration Highlights</strong>

| Feature | Description |
|---------|-------------|
| 🎨 Property Ordering | Logical grouping via `stylelint-config-clean-order` |
| 🧹 Clean Formatting | No extra empty lines between property groups |
| 📐 Standard Rules | Official CSS & SCSS standards built-in |
| 💚 Vue Support | Proper syntax detection for SFC `<style>` blocks |
| ⚡ Modern CSS | UnoCSS, Tailwind, container queries, nesting |
| 🎭 Pseudo Elements | Latest CSS pseudo-classes and elements |
| 🔧 Customizable | Easy to extend with your own rules |

🎨 <strong>Smart Defaults Example</strong>

```css
/* ✅ Properties are automatically ordered logically */
.component {
  /* Positioning */
  position: relative;
  top: 0;

  /* Box Model */
  display: flex;
  width: 100%;
  padding: 1rem;

  /* Typography */
  font-size: 1rem;
  color: #333;

  /* Visual */
  background: white;
  border-radius: 8px;
}
```

</details>

## 🎨 Customization

<details>
<summary>⚙️ Adjust property spacing</summary>

<br>

By default, we keep your code **compact and clean** by removing extra empty lines between property groups.

If you prefer **spaced-out** properties, add this to your config:

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
<summary>🎯 Override any rule</summary>

<br>

```js
module.exports = {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    // Turn off specific rules
    'color-hex-length': null,

    // Adjust rule severity
    'declaration-block-no-duplicate-properties': 'warning',

    // Configure rule options
    'selector-max-id': [1, { severity: 'warning' }],
  }
}
```

> [!NOTE]
> Check the [Stylelint rules documentation](https://stylelint.io/user-guide/rules/) for all available options.

</details>

## 💖 Why This Config?

| | | |
|:---:|---|---|
| ⚡ | **Fast Setup** | One line to install, zero config to start |
| 🎯 | **Opinionated** | Carefully crafted defaults based on real-world usage |
| 🔧 | **Flexible** | Easy to customize and extend for your needs |
| 🌟 | **Modern** | Built for Vue 3, UnoCSS, and cutting-edge CSS |

## 📄 License

[MIT License](LICENSE) &copy; 2022-PRESENT [争逐](https://zzjtnb.com)

<br>

<p align="center">
  <sub>Made with ❤️ by <a href="https://github.com/zzjtnb">@zzjtnb</a></sub>
  <br>
  <sub>If this project helped you, consider <a href="https://github.com/zzjtnb/stylelint-config">giving it a ⭐️</a></sub>
</p>
