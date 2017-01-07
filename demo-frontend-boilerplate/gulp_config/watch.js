/**
 * Created by 欧阳 超 on 2017/01/04.
 */

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import connect from 'gulp-connect';

import config from './_config';
import './bundle';

const {
  html,
  css,
  js,
} = config;

const all_resources = html.concat(css).concat(js);

gulp.task('livereload', ['bundle'], () => {
  gulp.src(all_resources)
    .pipe(plumber())
    .pipe(connect.reload())
    .pipe(plumber.stop());
});

gulp.task('watch', () => {
  gulp.watch(all_resources, [
    'livereload',
    'bundle',
  ]);
});