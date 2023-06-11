const extensions = [
  // https://github.com/Microsoft/vscode/blob/master/extensions/html/package.json
  '.html',
  '.htm',
  '.shtml',
  '.xhtml',
  '.xht',
  '.mdoc',
  '.jsp',
  '.asp',
  '.aspx',
  '.jshtm',
  '.volt',
  '.ejs',
  '.rhtml',
]
const files = extensions.flatMap(ext => [`*${ext}`, `**/*${ext}`])
module.exports = {
  overrides: [
    {
      files,
      customSyntax: 'postcss-html',
    },
  ],
}
