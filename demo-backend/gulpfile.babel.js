/**
 * Created by 欧阳 超 on 2017/01/05.
 */

import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';

gulp.task('compile', () => {
  return gulp.src('app/index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('server', [
  'compile',
], () => {
  return nodemon({
    script: 'dist/index.js',
  });
});

gulp.task('default', [
  'compile',
  'server',
], () => {
});