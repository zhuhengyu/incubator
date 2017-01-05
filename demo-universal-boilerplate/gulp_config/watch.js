/**
 * Created by 欧阳 超 on 2017/01/04.
 */

import gulp from 'gulp';
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
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(all_resources, [
    'livereload',
    'bundle',
  ]);
});