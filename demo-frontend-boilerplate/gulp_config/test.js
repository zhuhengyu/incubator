/**
 * Created by 欧阳 超 on 2016/12/28.
 */

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import mocha from 'gulp-mocha';

import config from './_config';

const {
  test,
} = config;

gulp.task('test', () => {
  gulp.src(test, {
    read: false,
  }).pipe(plumber())
    .pipe(mocha())
    .pipe(plumber.stop());
});