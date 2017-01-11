/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack_stream from 'webpack-stream';
import nodemon from 'gulp-nodemon';
import eslint from 'gulp-eslint';
import mocha from 'gulp-mocha';
import babel from 'gulp-babel';
import gulpSequence from 'gulp-sequence';
import livereload from 'gulp-livereload';
import del from 'del';

import nodemon_config from './config/nodemon.config.babel';
import webpack_config from './config/webpack.config.babel';

gulp.task('clean', () => {
  del('dist');
});

gulp.task('lint', () => {
  return gulp.src([
    'app/**/*.js',
    '!app/**/*.test.js',
  ])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(plumber.stop());
});

gulp.task('test', () => {
  return gulp.src([
    'app/**/*.test.js',
  ])
    .pipe(plumber())
    .pipe(babel({
      'presets': [
        'babel-preset-power-assert'
      ],
    }))
    .pipe(gulp.dest('temp'))
    .pipe(mocha())
    .once('end', () => {
      del('temp');
    })
    .pipe(plumber.stop());
});

gulp.task('webpack', () => {
  return gulp.src([
    'app/server.js',
  ])
    .pipe(plumber())
    .pipe(webpack_stream(webpack_config))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', () => {
  livereload.listen({
    port: 35729,
  });
  return nodemon(nodemon_config)
    .on('restart', () => {
      setTimeout(() => {
        gulp.src('dist/server.js')
          .pipe(plumber())
          .pipe(livereload())
          .pipe(plumber.stop());
      }, 8e2);
    });
});

gulp.task('default', gulpSequence([
  'clean',
], [
  'lint',
], [
//   'test',
// ], [
  'webpack',
], [
  'nodemon',
]));