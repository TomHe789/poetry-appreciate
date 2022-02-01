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
    // 代理设置
    proxy: {
      "/api": {
        target: "http://localhost:3200/", //源地址
        changeOrigin: true, //改变源
        pathRewrite: {
          "^/api": "", //路径重写
        },
      },
    },
  },
};
