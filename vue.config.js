const { defineConfig } = require('@vue/cli-service')

// 按需引入element-plus webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, // 关闭eslint检查
   // axios 相关配置 
   devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:9009', // 配置后端服务器地址
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
  // 按需引入element-plus  配置
  configureWebpack:{ 
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
})
