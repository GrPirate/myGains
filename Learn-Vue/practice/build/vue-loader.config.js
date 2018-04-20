module.exports = isDev => {
  return {
    preserveWhitepace: true, // 自动删除末尾空格
    extractCSS: !isDev
    // cssModules: {
    //   // 配置使用css module，使用$style在template中使用
    //   localIdentName: isDev
    //     ? '[path]-[name]-[hash:base64:5]'
    //     : '[hash:base64:5]',
    //   camelCase: true
    // }
    // hotReload: false, // 根据环境变量生成
  }
}
