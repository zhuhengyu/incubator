/**
 * Created by 欧阳 超 on 2017/01/13
 */

import path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import del from 'del';
import eslint from 'gulp-eslint';
import webpack_stream from 'webpack-stream';

gulp.task('clean', ()=>{
  return del('dest');
});

gulp.task('lint', ()=>{
  return gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(plumber.stop());
});

gulp.task('default', [
  'clean', 'lint'
], ()=>{
  return gulp.src('src/main.js')
    .pipe(plumber())
    .pipe(webpack_stream({
      cache: true,
      entry: {
        main: './src/main.js',
      },
      output: {
        path: path.resolve(__dirname, 'dest'),
        filename: '[name].js',
      },
      module: {
        loaders: [{
          test: /(\.js$|\.jsx?$)/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/,
          query: {
            presets: [
              'es2015',
            ],
          },
        },],
      },
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dest'));
});

