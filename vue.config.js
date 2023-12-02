const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: "/Vue-Chat/",
  

  configureWebpack: {
    resolve: {
      alias: {
        '@src': path.join(__dirname, 'src')
      }
    }
  }
})
