const path = require('path');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.dev');

const options = {
  host: process.env.HOST,
  port: process.env.PORT,
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, 'build'),
  compress: true,
  hot: true
};

webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);

const server = new webpackDevServer(compiler, options);

const { port, host } = options;

server.listen(port, host, () => console.log('DEV SERVER RUNNING'));