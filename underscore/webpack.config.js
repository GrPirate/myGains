const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: '.src/index.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'underscore.js',
    library: '_',
    libraryTarget: 'umd'
  },
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ],
  plugins: [
    new UglifyJSPlugin()
  ]
}