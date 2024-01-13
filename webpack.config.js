const path = require('path');
const webpack = require('webpack');

// new webpack.ProvidePlugin({
//   identifier: 'module1',
//   // ...
// });

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      p5:'p5',
    })
  ]
}