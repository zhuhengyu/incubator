/**
 * Created by 欧阳 超 on 2017/01/05.
 */

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';
import livereload from 'gulp-livereload';

gulp.task('compile', () => {
  return gulp.src('app/index.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist'));
});

gulp.task('livereload', () => {
  gulp.src('dist/index.js')
    .pipe(plumber())
    .pipe(livereload())
    .pipe(plumber.stop());
});

gulp.task('server', () => {
  livereload.listen();
  nodemon({
    script: 'dist/index.js',
    watch: [
      'app/index.js',
    ],
    env: {
      NODE_ENV: 'development',
    },
    tasks: [
      'compile'
    ],
    stdout: false,
  }).on('readable', () => {
    setTimeout(() => {
      gulp.src('dist/index.js')
        .pipe(plumber())
        .pipe(livereload())
        .pipe(plumber.stop());
    }, 1e3);
  });
});

gulp.task('watch', () => {
  // gulp.watch([
  //   'app/**/*.js'
  // ], [
  //   'compile',
  // ]);
});

gulp.task('default', [
  'compile',
  'server',
  'watch',
], () => {
});