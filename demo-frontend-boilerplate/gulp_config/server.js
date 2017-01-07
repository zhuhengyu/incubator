/**
 * Created by 欧阳 超 on 2017/01/04.
 */

import gulp from 'gulp';
import connect from 'gulp-connect';

gulp.task('server', () => {
  connect.server({
    root: 'dist',
    port: '8000',
    livereload: true,
  });
});