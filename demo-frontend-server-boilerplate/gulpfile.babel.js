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
import uglify from 'gulp-uglify';
import gulpSequence from 'gulp-sequence';
import livereload from 'gulp-livereload';
import del from 'del';

import nodemon_config from './config/nodemon.config.babel';
import webpack_config from './config/webpack.config.babel';

gulp.task('clean', () => {
  del('dist');
  del('server');
});

gulp.task('lint', () => {
  return gulp.src([
    'app/**/*.js',
    'app/**/*.jsx',
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
  return gulp.src([])
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
    .on('readable', () => {
      setTimeout(() => {
        gulp.src(['server/server.js'])
          .pipe(plumber())
          .pipe(livereload())
          .pipe(plumber.stop());
      }, 8e2);
    });
});

gulp.task('server', () => {
  return gulp.src([
    'server.js',
  ])
    .pipe(plumber())
    .pipe(babel())
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(gulp.dest('server'));
});

gulp.task('watch:client', () => {
  return gulp.watch([
    'app/**/*.js',
    'app/**/*.jsx',
    '!app/**/*.test.js',
  ], [
    'webpack',
  ]);
});

gulp.task('watch:test', () => {
  return gulp.watch([
    'app/**/*.test.js',
  ], [
    'lint',
  ]);
});

gulp.task('watch:server', () => {
  return gulp.watch([
    'server.js',
  ], [
    'server',
  ]);
});

gulp.task('default', gulpSequence([
  'clean',
], [
  'lint',
], [
//   'test',
// ], [
  'server',
], [
  'webpack',
], [
  'nodemon',
], [
  'watch:client',
  'watch:test',
  'watch:server',
]));