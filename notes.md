The default branch has been renamed!
If you have a local clone, you can update it by running the following commands.

```
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```

create a new repository on the command line

```bash
echo "# stylelint-config" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/zzjtnb/stylelint-config.git
git push -u origin master
```

push an existing repository from the command line

```bash
git remote add origin https://github.com/zzjtnb/stylelint-config.git
git branch -M master
git push -u origin master
```

建立软链接
>windows cmd

```bash
mklink
# MKLINK [[/D] | [/H] | [/J]] Link Target

#         /D      创建目录符号链接。默认为文件
#                 符号链接。
#         /H      创建硬链接而非符号链接。
#         /J      创建目录联接。
#         Link    指定新的符号链接名称。
#         Target  指定新链接引用的路径
#                 (相对或绝对)
```

创建目录符号链接.默认为文件

```bash
mklink /d .\README.md .\packages\README.md
```

删除的话直接删除 Link(.\README.md)

查看所有配置

```bash
# Print the configuration for the given file
# 打印给定文件的配置
stylelint --print-config file.js > stylelintconifg.json
```

```bash
stylelint --print-config file.css > ./tests/config/css.json
stylelint --print-config file.scss > ./tests/config/scss.json
stylelint --print-config file.vue > ./tests/config/vue.json
```
