const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry    : {index: path.join(__dirname, 'src', 'test.ts')},
  module   : {rules: [{test: /\.html$/, loader: 'html-loader'}]},
  plugins  : [new HtmlWebpackPlugin({template: path.join(__dirname, 'src', 'template.html'), filename: 'index.html'})],
  devServer: {watchFiles: path.join(__dirname, 'src'), port: 9000}
};