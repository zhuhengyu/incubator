/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HappyPack from 'happypack';

// const modules = {};
// fs.readdirSync('node_modules')
//   .filter(_ => [
//     '.bin',
//     'react',
//     'react-dom',
//     'object-assign',
//     'react-router',
//     'redux',
//     'react-redux',
//     'redux-observable',
//     'setimmediate',
//     'rxjs',
//     'invariant',
//     'warning',
//     'hoist-non-react-statics',
//     'query-string',
//     'strict-uri-encode',
//     'symbol-observable',
//   ].indexOf(_) === -1)
//   .forEach(_ => modules[_] = `commonjs ${_}`);

const plugins = [];
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  chunks: [
    'client',
    // 'lib',
  ],
  template: path.resolve(__dirname, '..', 'client', 'index.html'),
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
    NODE_ENV: JSON.stringify('development'),
  }
});
const commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'lib',
  minChunks: module => {
    const userRequest = module.userRequest;
    if (typeof userRequest !== 'string') {
      return false;
    }
    return userRequest.indexOf('bower_components') >= 0 ||
      userRequest.indexOf('node_modules') >= 0 ||
      userRequest.indexOf('libraries') >= 0;
  }
});
const happyPackPlugin = new HappyPack({
  loaders: [{
    path: 'babel-loader',
    query: {
      presets: [
        'react',
        'es2015',
      ],
    },
  }],
});
plugins.push(htmlWebpackPlugin);
plugins.push(uglifyJsPlugin);
plugins.push(productionPlugin);
// plugins.push(commonsChunkPlugin);
plugins.push(happyPackPlugin);

const loaders = [];
loaders.push({
  test: /(\.js$|\.jsx$)/,
  // loader: 'babel-loader',
  loader: 'happypack/loader',
  // include: path.resolve(__dirname, '..', 'app'),
  exclude: /(node_modules|bower_components)/,
  // query: {
  //   presets: [
  //     'react',
  //     'es2015',
  //   ],
  // },
});
loaders.push({
  test: /(\.sass$|\.css$)/,
  loaders: [
    'style-loader',
    'css-loader',
    'sass-loader',
  ],
});

const webpack_config = {
  cache: true,
  entry: {
    client: './client/client.jsx',
  },
  // devtool: 'source-map',
  // devtool: 'eval-source-map',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: '[name].js',
    // filename: '[chunkhash].js',
  },
  // externals: modules,
  module: {
    loaders,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins,
};

export default webpack_config;
