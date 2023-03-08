const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 禁用eslint
  lintOnSave: false,

  devServer: {
    proxy: {
      "/api": {

        // 本身是：8080/api/users/info
        // target  代表转发的目标服务器   4000/api/users/info
        // pathRewrite  4000/api/users/info    和真正的地方多了一个api，需要把/api去掉
        target: "http://localhost:4000",
        pathRewrite: { "^/api": "" },  //要看真正的后台接口路径当中有没有包含/api，有就不用去掉，没有就得去掉
        changeOrigin: true
      }
    }
  }

})


