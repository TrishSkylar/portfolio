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
        SERVICE_ID: JSON.stringify(process.env.SERVICE_ID),
        TEMPLATE_ID: JSON.stringify(process.env.TEMPLATE_ID),
        USER_ID: JSON.stringify(process.env.USER_ID)
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].min.css',
    })
  ]
});