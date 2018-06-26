const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

module.exports = {
  entry: {
    loader: './src/scripts/loader.js',
    app: './src/scripts/app.js',
    background: './src/scripts/background.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'extension'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'loader.html',
    }),
    new CopyWebpackPlugin([
      { from: 'src/manifest.json', to: path.resolve(__dirname, 'extension') },
      { from: 'src/app.html', to: path.resolve(__dirname, 'extension') },
    ])
  ],
};