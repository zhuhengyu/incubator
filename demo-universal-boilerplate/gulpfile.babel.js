/**
 * Created by ouyangcharles on 2016/12/26.
 */

import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';

const config = {
  src: 'src/**/*.js',
  des: 'lib',
};

gulp.task('parse', () => {
  return gulp.src(config.src)
    .pipe(babel())
    .pipe(gulp.dest(config.des));
});

gulp.task('watch', () => {
  return gulp.watch(config.src, {
      verbose: true,
    })
    .pipe(babel())
    .pipe(gulp.dest(config.des));
});

gulp.task('default', ['parse']);
