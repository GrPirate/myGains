const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'underscore.min.js',
    library: '_',
    libraryTarget: 'umd'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@js': path.resolve('src/js'),
      '@utils': path.resolve('src/utils')
    }
  },
  plugins: [new UglifyJSPlugin()]
}
