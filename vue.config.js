var path = require('path');

module.exports = {
  lintOnSave: true,
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.resolve.alias.set("@image", path.resolve(__dirname, "public/img"));
    config.resolve.alias.set("@dev", path.resolve(__dirname, "dev-server"));
  },
  configureWebpack: {
    entry: ["@babel/polyfill", "./src/main.js"],
    plugins: [],
  }
};
