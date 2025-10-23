# 📦 发布指南

本文档详细介绍如何发布 `stylelint-config-zzjtnb` 到 npm。

> [!NOTE]
> **本项目使用 `pnpm release` 进行一键发布**
>
> 这是最推荐、最简单的发布方式，会自动完成版本更新、打标签、推送和发布等所有步骤。

## 📋 目录

- [前置要求](#前置要求)
- [发布流程](#发布流程)
- [版本规范](#版本规范)
- [发布检查清单](#发布检查清单)
- [手动发布](#手动发布)
- [自动化发布](#自动化发布)
- [回滚版本](#回滚版本)
- [常见问题](#常见问题)

---

## 前置要求

### 1️⃣ 环境要求

```bash
# Node.js 版本
node >= 22

# pnpm 版本
pnpm >= 9
```

### 2️⃣ NPM 账号配置

> [!WARNING]
> **重要：如果你设置了国内镜像（如淘宝镜像），发布会失败！**
>
> 国内镜像是只读的，不支持 `npm publish`。发布前必须切换回官方源。

**检查当前 npm 源：**

```bash
# 查看当前使用的 registry
npm config get registry

# 如果显示淘宝或其他镜像源，需要切换
# https://registry.npmmirror.com/  (淘宝镜像)
# https://registry.npm.taobao.org/ (淘宝镜像旧地址)
```

#### 方法一：临时切换到官方源（推荐）

```bash
# 发布时临时使用官方源
cd packages
npm publish --registry https://registry.npmjs.org/

# 或者在根目录
pnpm -r publish --registry https://registry.npmjs.org/
```

#### 方法二：永久切换回官方源

```bash
# 切换到官方源
npm config set registry https://registry.npmjs.org/

# 验证是否切换成功
npm config get registry
# 应该输出: https://registry.npmjs.org/

# 登录 npm
npm login

# 检查登录状态
npm whoami
```

#### 方法三：使用 .npmrc 配置（最佳实践）

在项目根目录创建或编辑 `.npmrc` 文件：

```ini
# 日常使用淘宝镜像（快速）
registry=https://registry.npmmirror.com/

# 发布时使用官方源
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

然后发布时：

```bash
# 发布时指定官方源
npm publish --registry https://registry.npmjs.org/
```

**登录验证：**

```bash
# 确保已登录官方 npm
npm login --registry https://registry.npmjs.org/

# 检查登录状态
npm whoami --registry https://registry.npmjs.org/
```

### 3️⃣ GitHub 权限

- 确保你有仓库的 push 权限
- 确保你有创建 tag 和 release 的权限

### 4️⃣ 本地检查

```bash
# 确保工作区干净
git status

# 确保在主分支
git checkout master

# 拉取最新代码
git pull origin master

# 安装依赖
pnpm install

# 运行 lint
pnpm lint

# 运行测试
pnpm test
```

---

## 发布流程

### 🚀 完整发布流程（推荐）

这是最简单、最推荐的发布方式，一条命令完成所有操作：

```bash
# 🎯 一键发布 (会自动完成以下所有步骤)
pnpm release
```

#### 📦 命令拆解

`pnpm release` 实际执行的完整命令是：

```bash
bumpp package.json packages/package.json --commit --push --tag && pnpm -r publish
```

> [!TIP]
> **如果你使用了国内镜像**，需要修改 `package.json` 中的发布命令：
>
> ```json
> "release": "bumpp package.json packages/package.json --commit --push --tag && pnpm -r publish --registry https://registry.npmjs.org/"
> ```
>
> 或者在发布前临时切换回官方源。

**详细拆解：**

<table>
<tr>
<th>步骤</th>
<th>命令部分</th>
<th>说明</th>
</tr>
<tr>
<td>1️⃣</td>
<td><code>bumpp</code></td>
<td>版本管理工具，用于更新版本号</td>
</tr>
<tr>
<td>2️⃣</td>
<td><code>package.json packages/package.json</code></td>
<td>指定要更新版本号的文件（根目录和 packages 目录）</td>
</tr>
<tr>
<td>3️⃣</td>
<td><code>--commit</code></td>
<td>自动创建 git commit（提交信息：<code>chore: release v0.0.8</code>）</td>
</tr>
<tr>
<td>4️⃣</td>
<td><code>--push</code></td>
<td>自动推送 commit 到远程仓库</td>
</tr>
<tr>
<td>5️⃣</td>
<td><code>--tag</code></td>
<td>自动创建并推送 git tag（格式：<code>v0.0.8</code>）</td>
</tr>
<tr>
<td>6️⃣</td>
<td><code>&&</code></td>
<td>逻辑与，前面命令成功后才执行后面的命令</td>
</tr>
<tr>
<td>7️⃣</td>
<td><code>pnpm -r publish</code></td>
<td>递归发布所有 workspace 包到 npm（<code>-r</code> = recursive）</td>
</tr>
</table>

#### 🔄 执行流程图

```text
开始执行 pnpm release
        ↓
┌───────────────────────────────────────┐
│ bumpp (版本管理)                       │
├───────────────────────────────────────┤
│ 1. 交互式选择版本类型                  │
│    - patch (0.0.7 → 0.0.8)            │
│    - minor (0.0.7 → 0.1.0)            │
│    - major (0.0.7 → 1.0.0)            │
│    - 或自定义版本号                    │
│                                       │
│ 2. 更新文件版本号                      │
│    ✓ package.json                     │
│    ✓ packages/package.json            │
│                                       │
│ 3. 创建 git commit                    │
│    ✓ 提交信息: chore: release v0.0.8  │
│                                       │
│ 4. 创建 git tag                       │
│    ✓ 标签名称: v0.0.8                 │
│                                       │
│ 5. 推送到 GitHub                      │
│    ✓ git push origin master           │
│    ✓ git push origin v0.0.8           │
└───────────────────────────────────────┘
        ↓
┌───────────────────────────────────────┐
│ pnpm -r publish (发布到 npm)          │
├───────────────────────────────────────┤
│ 6. 递归查找 workspace 中的包          │
│    ✓ 找到 packages/package.json       │
│                                       │
│ 7. 发布到 npm                         │
│    ✓ npm publish packages/            │
│    ✓ 包名: stylelint-config-zzjtnb    │
└───────────────────────────────────────┘
        ↓
┌───────────────────────────────────────┐
│ GitHub Actions (自动触发)              │
├───────────────────────────────────────┤
│ 8. 检测到新 tag (v0.0.8)              │
│                                       │
│ 9. 运行 Release workflow              │
│    ✓ 安装依赖                         │
│    ✓ 运行 changelogithub              │
│    ✓ 生成 Changelog                   │
│    ✓ 创建 GitHub Release              │
└───────────────────────────────────────┘
        ↓
     发布完成！
```

#### ⚙️ 等价的手动命令

如果要手动执行，等价于：

```bash
# 1. 更新版本号
bumpp package.json packages/package.json

# 2. 创建 commit 和 tag
git add .
git commit -m "chore: release v0.0.8"
git tag v0.0.8

# 3. 推送
git push origin master
git push origin v0.0.8

# 4. 发布到 npm
cd packages
npm publish
```

#### 📊 执行结果

成功执行后，你将看到：

- ✅ 两个 `package.json` 文件的版本号已更新
- ✅ Git 仓库有新的 commit 和 tag
- ✅ GitHub 上可以看到新的 commit 和 tag
- ✅ npm 上可以下载到新版本
- ✅ GitHub Releases 页面有新的发布记录和 Changelog

---

## 版本规范

本项目遵循 [语义化版本（SemVer）](https://semver.org/lang/zh-CN/)规范：

### 版本格式

```text
主版本号.次版本号.修订号 (MAJOR.MINOR.PATCH)
```

### 版本类型

| 类型 | 说明 | 示例 | 使用场景 |
|------|------|------|----------|
| **patch** | 修订号 | `0.0.7` → `0.0.8` | 🐛 Bug 修复、文档更新、小优化 |
| **minor** | 次版本号 | `0.0.7` → `0.1.0` | ✨ 新功能、向后兼容的改进 |
| **major** | 主版本号 | `0.0.7` → `1.0.0` | 💥 破坏性变更、重大重构 |

### 常见场景示例

```bash
# 修复 bug、更新文档
pnpm release  # 选择 patch → 0.0.7 → 0.0.8

# 添加新规则、新特性
pnpm release  # 选择 minor → 0.0.7 → 0.1.0

# API 重大改动、不兼容更新
pnpm release  # 选择 major → 0.0.7 → 1.0.0
```

---

## 发布检查清单

在发布前，请确保完成以下检查：

### ✅ 代码质量

- [ ] 所有代码已提交
- [ ] 通过 ESLint 检查 (`pnpm lint:eslint`)
- [ ] 通过 Stylelint 检查 (`pnpm lint:stylelint`)
- [ ] 通过所有测试 (`pnpm test`)
- [ ] 文档已更新（README.md）

### ✅ 版本信息

- [ ] 版本号符合语义化版本规范
- [ ] CHANGELOG 准备就绪（自动生成）
- [ ] 依赖版本已检查并更新

### ✅ 构建和测试

- [ ] 本地构建成功
- [ ] 在干净环境中测试安装

### ✅ Git 状态

- [ ] 在正确的分支上（通常是 `master`）
- [ ] 已同步远程仓库最新代码
- [ ] 工作区干净（无未提交的更改）

---

## 手动发布

如果需要更细粒度的控制，可以分步执行：

### 步骤 1：更新版本

```bash
# 只更新版本号（不提交、不推送、不发布）
pnpm bumpp

# 或指定版本类型
pnpm bumpp --patch   # 0.0.7 → 0.0.8
pnpm bumpp --minor   # 0.0.7 → 0.1.0
pnpm bumpp --major   # 0.0.7 → 1.0.0

# 或直接指定版本号
pnpm bumpp 1.2.3
```

### 步骤 2：提交和打标签

```bash
# 提交版本更改
git add .
git commit -m "chore: release v0.0.8"

# 创建 tag
git tag v0.0.8

# 推送到远程
git push origin master
git push origin v0.0.8
```

### 步骤 3：发布到 npm

```bash
# 进入 packages 目录发布
cd packages
npm publish

# 或使用 pnpm 从根目录发布
pnpm -r publish
```

---

## 自动化发布

### GitHub Actions 自动发布

当推送带有 `v*` 前缀的 tag 时，GitHub Actions 会自动：

1. 生成 Changelog
2. 创建 GitHub Release
3. 关联 Changelog

**触发方式：**

```bash
# 创建并推送 tag
git tag v0.0.8
git push origin v0.0.8
```

**查看发布状态：**

访问 [GitHub Actions](https://github.com/zzjtnb/stylelint-config/actions) 查看工作流运行状态。

### 📝 重要说明：Changelog 在哪里？

> [!IMPORTANT]
> **Changelog 不会在本地生成！** 它是在 GitHub Release 页面上自动创建的。

**查看 Changelog 的步骤：**

1. 执行 `pnpm release` 后，等待 1-2 分钟
2. 访问 [GitHub Releases 页面](https://github.com/zzjtnb/stylelint-config/releases)
3. 查看最新的 Release，里面包含自动生成的 Changelog

**如果想在本地生成 CHANGELOG.md：**

```bash
# 安装 changelogithub
npm install -g changelogithub

# 设置 GitHub Token
export GITHUB_TOKEN=your_github_token

# 生成 changelog
npx changelogithub
```

这会在本地创建一个 CHANGELOG.md 文件（可选）。

---

## 回滚版本

如果发布出现问题，可以回滚：

### 1️⃣ 撤销 npm 发布

```bash
# ⚠️ 警告：只能在发布后 72 小时内撤销
npm unpublish stylelint-config-zzjtnb@0.0.8

# 或弃用某个版本（推荐）
npm deprecate stylelint-config-zzjtnb@0.0.8 "This version has been deprecated"
```

### 2️⃣ 删除 Git Tag

```bash
# 删除本地 tag
git tag -d v0.0.8

# 删除远程 tag
git push origin :refs/tags/v0.0.8
```

### 3️⃣ 回滚 Git 提交

```bash
# 回滚到上一个版本
git reset --hard HEAD~1

# 强制推送（⚠️ 谨慎使用）
git push origin master --force
```

### 4️⃣ 删除 GitHub Release

在 GitHub 上手动删除对应的 Release：
`https://github.com/zzjtnb/stylelint-config/releases`

---

## 常见问题

### ❓ 发布失败：403 Forbidden

**原因：** npm 权限不足或未登录

**解决：**

```bash
npm whoami  # 检查登录状态
npm login   # 重新登录
```

### ❓ 发布失败：npm ERR! code E404 或 npm ERR! 404 Not Found

**原因：** 使用了国内镜像源（淘宝镜像等），不支持 publish

**解决：**

```bash
# 检查当前源
npm config get registry

# 如果不是官方源，临时切换
npm publish --registry https://registry.npmjs.org/

# 或永久切换
npm config set registry https://registry.npmjs.org/
npm login
```

### ❓ 发布成功但在 npm 上搜索不到

**原因：**

1. 刚发布，npm 还在同步（通常 5-10 分钟）
2. 本地配置了国内镜像，淘宝镜像同步延迟

**解决：**

```bash
# 1. 等待几分钟后再试

# 2. 直接访问官方 npm 查看
# https://www.npmjs.com/package/stylelint-config-zzjtnb

# 3. 使用官方源安装测试
npm install stylelint-config-zzjtnb --registry https://registry.npmjs.org/
```

### ❓ 发布失败：Version already exists

**原因：** 该版本号已经在 npm 上存在

**解决：**

```bash
# 使用新的版本号
pnpm bumpp
```

### ❓ Git tag 已存在

**原因：** 本地或远程已有同名 tag

**解决：**

```bash
# 删除本地 tag
git tag -d v0.0.8

# 删除远程 tag
git push origin :refs/tags/v0.0.8

# 重新创建
git tag v0.0.8
git push origin v0.0.8
```

### ❓ pnpm 发布失败：No workspaces found

**原因：** pnpm workspace 配置问题

**解决：**

```bash
# 检查 pnpm-workspace.yaml
cat pnpm-workspace.yaml

# 或直接进入包目录发布
cd packages
npm publish
```

### ❓ 如何发布测试版本？

```bash
# 发布 beta 版本
pnpm bumpp --preid beta
# 例如：0.0.7 → 0.0.8-beta.0

# 发布到 npm 的 next tag
cd packages
npm publish --tag next

# 用户安装测试版本
npm install stylelint-config-zzjtnb@next
```

### ❓ 如何验证发布是否成功？

```bash
# 1. 检查 npm 版本
npm view stylelint-config-zzjtnb version

# 2. 检查 npm 包信息
npm view stylelint-config-zzjtnb

# 3. 在新项目中测试安装
mkdir test-install
cd test-install
npm init -y
npm install stylelint-config-zzjtnb

# 4. 检查 GitHub Release
# 访问 https://github.com/zzjtnb/stylelint-config/releases
```

---

## 🎯 快速参考

### 常用命令

```bash
# 🚀 完整发布流程（推荐）
pnpm release

# 📝 只更新版本号
pnpm bumpp

# 🔍 检查代码
pnpm lint:check

# 🧪 运行测试
pnpm test

# 📦 查看包信息
npm view stylelint-config-zzjtnb

# 🏷️ 查看所有版本
npm view stylelint-config-zzjtnb versions
```

### 版本选择指南

```text
┌─────────────────┬──────────┬─────────────────────┐
│ 变更类型        │ 版本类型 │ 示例                │
├─────────────────┼──────────┼─────────────────────┤
│ Bug 修复        │ patch    │ 0.0.7 → 0.0.8       │
│ 文档更新        │ patch    │ 0.0.7 → 0.0.8       │
│ 小优化          │ patch    │ 0.0.7 → 0.0.8       │
├─────────────────┼──────────┼─────────────────────┤
│ 新功能          │ minor    │ 0.0.7 → 0.1.0       │
│ 新规则          │ minor    │ 0.0.7 → 0.1.0       │
│ 向后兼容的改进  │ minor    │ 0.0.7 → 0.1.0       │
├─────────────────┼──────────┼─────────────────────┤
│ 破坏性变更      │ major    │ 0.0.7 → 1.0.0       │
│ API 重大改动    │ major    │ 0.0.7 → 1.0.0       │
│ 不兼容更新      │ major    │ 0.0.7 → 1.0.0       │
└─────────────────┴──────────┴─────────────────────┘
```

---

## 📚 相关资源

- [npm 发布文档](https://docs.npmjs.com/cli/v10/commands/npm-publish)
- [语义化版本规范](https://semver.org/lang/zh-CN/)
- [bumpp 文档](https://github.com/antfu/bumpp)
- [changelogithub 文档](https://github.com/antfu/changelogithub)

---

<p align="center">
  <sub>如有问题，请提交 <a href="https://github.com/zzjtnb/stylelint-config/issues">Issue</a></sub>
</p>
