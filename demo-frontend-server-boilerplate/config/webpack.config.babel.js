/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const modules = {};
fs.readdirSync('node_modules')
  .filter(_ => [
    '.bin',
    'react',
    'react-dom',
    'object-assign',
    'react-router',
    'redux',
    'react-redux',
    'redux-observable',
    'setimmediate',
    'rxjs',
    'invariant',
    'warning',
    'hoist-non-react-statics',
    'query-string',
    'strict-uri-encode',
    'symbol-observable',
  ].indexOf(_) === -1)
  .forEach(_ => modules[_] = `commonjs ${_}`);

const plugins = [];
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  chunks: [
    'client',
  ],
  template: path.resolve(__dirname, '..', 'app', 'index.html'),
  minify: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  },
});
const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  compress: {
    warnings: false
  }
});
const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  }
});
plugins.push(htmlWebpackPlugin);
plugins.push(uglifyJsPlugin);
plugins.push(productionPlugin);

const loaders = [];
loaders.push({
  test: /(\.js$|\.jsx?$)/,
  loader: 'babel-loader',
  exclude: /(node_modules|bower_components)/,
  query: {
    presets: [
      'es2015',
      'react',
    ],
  },
});
loaders.push({
  test: /\.sass$/,
  loaders: [
    'style-loader',
    'css-loader',
    'sass-loader',
  ],
});

const webpack_config = {
  cache: true,
  entry: {
    client: './app/client.jsx',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  externals: modules,
  module: {
    loaders,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins,
};

export default webpack_config;
