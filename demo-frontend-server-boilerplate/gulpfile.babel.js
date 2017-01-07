/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import fs from 'fs';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack_stream from 'webpack-stream';

const modules = {};
fs.readdirSync('node_modules')
  .filter(_ => ['.bin'].indexOf(_) === -1)
  .forEach(_ => modules[_] = `commonjs ${_}`);

console.log(modules);

gulp.task('webpack', () => {
  gulp.src('app/app.js')
    .pipe(plumber())
    .pipe(webpack_stream({
      entry: './app/app.js',
      output: {
        filename: 'bundle.js',
      },
      target: 'node',
      externals: modules,
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['webpack'], () => {
});