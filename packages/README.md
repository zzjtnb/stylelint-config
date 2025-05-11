# stylelint-config-zzjtnb

[![npm](https://img.shields.io/npm/v/stylelint-config-zzjtnb?color=a1b858&label=)](https://npmjs.com/package/stylelint-config-zzjtnb)

**[简体中文](/packages/README.zh-CN.md) | English**

> Stylelint configuration aimed to have balanced aspects for Modern CSS, SCSS, Vue 3, and UnoCSS.

## Features

- Based on `stylelint-config-standard` and `stylelint-config-standard-scss`
- Support for Vue SFC with SCSS (extends `stylelint-config-recommended-vue/scss`)
- Support for HTML files (extends `stylelint-config-html`)
- Logical property ordering with `stylelint-config-clean-order`
- Full UnoCSS and TailwindCSS compatibility
- Reasonable defaults for modern development

## Installation

```bash
# npm
npm install stylelint-config-zzjtnb --save-dev

# yarn
yarn add stylelint-config-zzjtnb -D

# pnpm
pnpm add stylelint-config-zzjtnb -D
```

## Usage

Add the following to your `.stylelintrc.js` file:

```js
module.exports = {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    // your custom rules here (optional)
  }
}
```

Or if you're using ESM:

```js
export default {
  extends: ['stylelint-config-zzjtnb'],
  rules: {
    // your custom rules here (optional)
  }
}
```

### Recommended Setup with VSCode

1. Install the [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

2. Add this to your `.vscode/settings.json`:

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

## What's Included

The configuration:

- Uses `stylelint-config-clean-order` for logical property order grouping (placed last in extends to ensure sorting rules are not overridden)
- Disables extra empty lines between property groups (by setting `declaration-empty-line-before` and `at-rule-empty-line-before` to `never`)
- Extends official standards for CSS and SCSS
- Supports Vue SFC styling with proper syntax detection
- Has rules optimized for UnoCSS and modern CSS features
- Allows common CSS container, at-rules, and nesting features
- Supports the latest CSS pseudo-classes and elements

### Custom Property Ordering

By default, we use `stylelint-config-clean-order` for logical CSS property grouping and ordering. This package also attempts to add extra empty lines between property groups, but our configuration disables this behavior by setting:

```js
'declaration-empty-line-before': 'never',
'at-rule-empty-line-before': 'never'
```

If you want to enable these extra empty lines, you can override these rules in your configuration.

## License

[MIT License](LICENSE) &copy; 2022 [争逐](https://zzjtnb.com)
