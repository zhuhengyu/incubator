/**
 * Created by ouyangcharles on 2017/01/04.
 */

import gulp from 'gulp';
import livereload from 'gulp-livereload';

import config from './_config';
import './bundle';

const {
  html,
  css,
  js,
} = config;

const all_resources = html.concat(css).concat(js);

gulp.task('watch', () => {
  livereload.listen({
    basePath: 'dist',
  });
  gulp.watch(all_resources, [
    'bundle',
  ]);
});