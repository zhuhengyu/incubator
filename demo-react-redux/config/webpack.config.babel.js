/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HappyPack from 'happypack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

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
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  // Can be `server`, `static` or `disabled`.
  // In `server` mode analyzer will start HTTP server to show bundle report.
  // In `static` mode single HTML file with bundle report will be generated.
  // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
  analyzerMode: 'server',
  // Port that will be used in `server` mode to start HTTP server.
  analyzerPort: 8888,
  // Path to bundle report file that will be generated in `static` mode.
  // Relative to bundles output directory.
  reportFilename: 'report.html',
  // Automatically open report in default browser
  openAnalyzer: true,
  // If `true`, Webpack Stats JSON file will be generated in bundles output directory
  generateStatsFile: true,
  // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
  // Relative to bundles output directory.
  statsFilename: 'stats.json',
  // Options for `stats.toJson()` method.
  // For example you can exclude sources of your modules from stats file with `source: false` option.
  // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
  statsOptions: null,
  // Log level. Can be 'info', 'warn', 'error' or 'silent'.
  logLevel: 'info'
});
plugins.push(htmlWebpackPlugin);
plugins.push(uglifyJsPlugin);
plugins.push(productionPlugin);
// plugins.push(bundleAnalyzerPlugin);
// plugins.push(commonsChunkPlugin);
// plugins.push(happyPackPlugin);

const loaders = [];
// loaders.push({
//   test: /(\.js$|\.jsx$)/,
//   loader: 'happypack/loader',
//   exclude: /(node_modules|bower_components)/,
// });
loaders.push({
  test: /(\.js$|\.jsx$)/,
  loader: 'babel-loader',
  exclude: /(node_modules|bower_components)/,
  // include: path.resolve(__dirname, '..', 'app'),
  query: {
    presets: [
      'react',
      'es2015',
    ],
  },
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
