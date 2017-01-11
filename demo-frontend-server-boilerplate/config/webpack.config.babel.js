/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const modules = {};
fs.readdirSync('node_modules')
  .filter(_ => ['.bin'].indexOf(_) === -1)
  .forEach(_ => modules[_] = `commonjs ${_}`);

const webpack_config = {
  entry: {
    client: './app/client.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  target: 'node',
  externals: modules,
  plugins: [
    new HtmlWebpackPlugin({
      chunks: [
        'client',
      ],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
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
    }, {
      test: /.jsx$/,
      loader: 'babel-loader',
      query: {
        compact: false,
      },
    },],
  },
};

export default webpack_config;