# stylelint-config-zzjtnb

[![npm](https://img.shields.io/npm/v/stylelint-config-zzjtnb?color=a1b858&label=)](https://npmjs.com/package/stylelint-config-zzjtnb)

- Auto fix for formatting (aimed to be used standalone without Prettier)
- Lint for css,scss,vue,html,xml,svelte,astro,php

## Usage

### Install

```bash
pnpm add -D stylelint stylelint-config-zzjtnb
```

>stylelint.config.js

For all:

```js
module.exports = {
  extends: [
    'stylelint-config-zzjtnb',
  ],
  rules: {},
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint:stylelint": "stylelint \"**/*.{css,scss,vue,html,xml,svelte,astro,php}\"",
    "lint:stylelint-fix": "stylelint \"**/*.{css,scss,vue,html,xml,svelte,astro,php}\" --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  },
  "stylelint.validate": [
    "css", "scss", "vue", "html", "xml", "svelte", "astro", "php"
  ]
}
```

### Related

- [eslint-config-zzjtnb](https://www.npmjs.com/package/eslint-config-zzjtnb)

## License

[MIT](./LICENSE) License &copy; 2022 [争逐](https://zzjtnb.com)
