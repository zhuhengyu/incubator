/**
 * Created by ouyangcharles on 2017/01/04.
 */

import gulp from 'gulp';
import webpack from 'webpack-stream';
import livereload from 'gulp-livereload';
import cond from 'gulp-cond';

import config from './_config';

const {
  PROD,
  html,
  css,
  js,
  output,
  webpack_config,
} = config;

// gulp.task('html', () => {
//   gulp.src(html)
//     .pipe(gulp.dest(output));
// });
//
// gulp.task('css', () => {
// });

gulp.task('bundle', [], () => {
  gulp.src(html)
    .pipe(gulp.dest(output))
    .pipe(cond(!PROD, livereload({start: !PROD})));
  gulp.src(css)
    .pipe(gulp.dest(output))
    .pipe(cond(!PROD, livereload({start: !PROD})));
  gulp.src(js)
    .pipe(cond(!PROD, livereload({start: !PROD})));
  gulp.src(webpack_config.entry)
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest(output));
});