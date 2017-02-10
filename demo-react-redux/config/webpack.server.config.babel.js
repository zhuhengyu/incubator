/**
 * Created by 欧阳 超 on 2017/02/10.
 */

import fs from 'fs';
import path from 'path';
import webpack from 'webpack';

let modules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    modules[mod] = 'commonjs ' + mod;
  });

const plugins = [];
const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  compress: {
    warnings: false
  }
});
plugins.push(uglifyJsPlugin);

const loaders = [];
loaders.push({
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /(node_modules|bower_components)/,
  query: {
    presets: [
      'es2015',
    ],
  },
});

const webpack_server_config = {
  cache: true,
  entry: {
    client: './server/app.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'app.js',
  },
  externals: modules,
  module: {
    loaders,
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins,
};

export default webpack_server_config;