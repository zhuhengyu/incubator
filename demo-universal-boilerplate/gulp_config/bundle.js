/**
 * Created by 欧阳 超 on 2017/01/04.
 */

import path from 'path';
import gulp from 'gulp';
import htmlmin from 'gulp-html-minifier';
import webpack from 'webpack-stream';
import * as _webpack from 'webpack';

import config from './_config';
import './test';

const {
  html,
  css,
  output,
} = config;

// webpack configuration
const webpack_config = {
  entry: path.join(__dirname, '../app/index.js'),
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new _webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [{
      test: /\.sass$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        compact: false,
      },
    },],
  },
};

gulp.task('bundle', ['test'], () => {
  gulp.src(html)
    .pipe(htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest(output));
  gulp.src(webpack_config.entry)
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest(output));
});