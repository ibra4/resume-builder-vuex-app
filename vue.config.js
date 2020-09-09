const path = require('path');

module.exports = {
  lintOnSave: true,
  filenameHashing: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      module.exports = {
        mode: 'development',
        entry: {
          index: './src/App.vue'
        },
        output: {
          filename: 'main.min.js',
          path: path.resolve(__dirname, 'dist'),
        },
      };
    } else {
      // mutate for development...
    }
    config.optimization.delete('splitChunks')
  }
};