/**
 * Created by ouyangcharles on 2016/12/28.
 */

import gulp from 'gulp';
import mocha from 'gulp-mocha';

import config from './_config';

const {
  test,
} = config;

gulp.task('test', () => {
  gulp.src(test, {
    read: false,
  }).pipe(mocha());
});