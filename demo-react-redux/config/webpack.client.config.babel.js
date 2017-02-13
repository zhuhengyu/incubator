/**
 * Created by 欧阳 超 on 2017/01/07.
 */

// import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import HappyPack from 'happypack';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const modules = {
  'jquery': 'jQuery',
};
// const modules = {};
// fs.readdirSync('node_modules')
//   .filter(_ => [
//     'jquery',
//   ].indexOf(_) !== -1)
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
// const commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
//   name: 'lib',
//   minChunks: module => {
//     const userRequest = module.userRequest;
//     if (typeof userRequest !== 'string') {
//       return false;
//     }
//     return userRequest.indexOf('bower_components') >= 0 ||
//       userRequest.indexOf('node_modules') >= 0 ||
//       userRequest.indexOf('libraries') >= 0;
//   }
// });
// const happyPackPlugin = new HappyPack({
//   loaders: [{
//     path: 'babel-loader',
//     query: {
//       presets: [
//         'react',
//         'es2015',
//       ],
//     },
//   }],
// });
// const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
//   analyzerMode: 'server',
//   analyzerPort: 8888,
//   reportFilename: 'report.html',
//   openAnalyzer: true,
//   generateStatsFile: true,
//   statsFilename: 'stats.json',
//   statsOptions: null,
//   logLevel: 'info'
// });
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

const webpack_client_config = {
  cache: true,
  entry: {
    client: './client/client.jsx',
  },
  target: 'web',
  // devtool: 'source-map',
  // devtool: 'eval-source-map',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: '[name].js',
    // filename: '[chunkhash].js',
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

export default webpack_client_config;