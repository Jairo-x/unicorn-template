const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

const plugins = []
if (IS_PROD) {
  plugins.push('transform-remove-console')
}

// plugins.push([
//   'import',
//   {
//     libraryName: 'ant-design-vue',
//     libraryDirectory: 'es',
//     style: false // `style: true` 会加载 less 文件
//   }
// ])

module.exports = {
  plugins: plugins,
  presets: ['@vue/cli-plugin-babel/preset']
}