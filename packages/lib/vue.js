const extensions = [
  // https://v3.vuejs.org/api/sfc-spec.html
  '.vue',
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
