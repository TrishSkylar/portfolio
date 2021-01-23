const path = require('path');

/* Plugins */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RobotstxtWebpackPlugin = require('robotstxt-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

/* env */
require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[fullhash].min.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: [ '.js', '.jsx' ]
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '../images',
            outputPath: 'images'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|webp)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '../fonts',
            outputPath: 'fonts'
          }
        }]
      },
      {
        test: /\.js$/i,
        enforce: 'pre',
        use: [ 'source-map-loader' ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        extractComments: true
      }),
      new CssMinimizerPlugin({
        sourceMap: true,
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true
              }
            }
          ]
        }
      }),
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      inject: true
    }),
    new RobotstxtWebpackPlugin(),
    new SourceMapDevToolPlugin()
  ]
};