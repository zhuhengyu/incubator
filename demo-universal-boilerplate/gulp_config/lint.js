/**
 * Created by 欧阳 超 on 2016/12/28.
 */

import gulp from 'gulp';
import eslint from 'gulp-eslint';

import config from './_config';

const {
  js,
} = config;

gulp.task('lint', () => {
  gulp.src(js)
    .pipe(eslint())
    .pipe(eslint.format());
});