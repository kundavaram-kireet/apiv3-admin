/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [{
  test: /\.js$/,
   include: [
     path.resolve(__dirname, "src"),
     path.resolve(__dirname, "node_modules/react-native-navbar")
   ],
  loader: 'babel',
  query: { stage: 0, plugins: [] }
}]
  },
  plugins: [HtmlWebpackPluginConfig]
}
