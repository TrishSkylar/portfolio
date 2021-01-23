const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');

module.exports = merge(webpackCommon, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'main',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        APP_NAME: JSON.stringify(process.env.APP_NAME)
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].min.css',
    })
  ]
});