# 测试

```css
padding: 0;
margin: 0;
```

```bash
pnpm add -D postcss-html postcss-scss
```

1. **隐性依赖关系**
   - `stylelint-config-html` 包含 `postcss-html` 作为依赖
   - `stylelint-config-standard-scss` 包含 `postcss-scss` 作为依赖
   - `stylelint-config-recommended-vue/scss` 可能使用相关解析器

2. **依赖提升（hoisting）机制**
   - 在 npm/yarn/pnpm 中，依赖可能被提升到共享位置
   - 即使你没有显式安装，它们也被其他包安装并可用

3. **兼容性降级**
   - 当找不到特定解析器时，stylelint 有时会降级到内置解析器
   - 基本功能仍可用但可能缺少特定语法支持

虽然目前能工作，但显式安装这些依赖是更好的实践，这样可以：

- 确保版本一致性和兼容性
- 避免依赖其他包的隐性行为
- 防止未来依赖关系变化导致的问题

对于正式项目，建议将它们添加为明确的开发依赖。
