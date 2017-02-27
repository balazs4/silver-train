const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'webpack.js'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'file-loader?name=[path][name].[ext]!extract-loader!html-loader!markdown-loader'
        ]
      }
    ]
  }
};
