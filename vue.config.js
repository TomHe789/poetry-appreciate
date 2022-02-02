const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@src": path.join(__dirname, "src"),
      },
    },
  },
  devServer: {
    // 设置端口
    port: 3080,
    // 代理设置
    proxy: {
      "/api": {
        target: "http://localhost:3000/", //源地址
        changeOrigin: true, //改变源
        pathRewrite: {
          "^/api": "", //路径重写
        },
      },
    },
  },
};
