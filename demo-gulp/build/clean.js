/**
 * Created by ouyangcharles on 2016/12/26.
 */

import gulp from 'gulp';
import del from 'del';

import config from './config';

const {output} = config;

gulp.task('clean', () => {
  del(output);
});