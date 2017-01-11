/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import fs from 'fs';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const modules = {};
fs.readdirSync('node_modules')
  .filter(_ => ['.bin'].indexOf(_) === -1)
  .forEach(_ => modules[_] = `commonjs ${_}`);

const webpack_config = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
  },
  target: 'node',
  externals: modules,
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        compact: false,
      },
    },],
  },
};

export default webpack_config;