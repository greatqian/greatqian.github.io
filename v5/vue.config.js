// vue.config.js
const path = require('path')

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    open: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve("src/assets/images"),
        '@': path.resolve("src")
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname,"./src/assets/constants.scss"),
      ]
    }
  }
}
 
 