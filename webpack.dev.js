const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const Dotenv = require('dotenv-webpack');

module.exports = merge(webpackCommon, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
});