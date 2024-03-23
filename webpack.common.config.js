const {VueLoaderPlugin} = require("vue-loader");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  output : {
    path               : path.join(__dirname, 'dist'),
    filename           : '[name].js',
    library            : 'vue-components',
    libraryTarget      : 'umd',
    libraryExport      : 'default',
    globalObject       : 'this'
  },
  module : {
    rules: [
      {test: /\.(scss|css)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']},
      {test: /\.ts$/, loader: 'ts-loader', options: {appendTsSuffixTo: [/\.vue$/]}, exclude: /node_modules/},
      {test: /\.vue$/, loader: 'vue-loader'}
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].css'}),
    new FileManagerPlugin({events: {onStart: {delete: ['dist']}}}),
    new VueLoaderPlugin()
  ],
  resolve: {extensions: ['.tsx', '.ts', '.js']}
};