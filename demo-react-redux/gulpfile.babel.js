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
import webpack_server_config from './config/webpack.server.config.babel';
import webpack_client_config from './config/webpack.client.config.babel';

gulp.task('clean', () => {
  del('dist');
});

gulp.task('lint', () => {
  const src = [
    'client/**/*.js',
    'client/**/*.jsx',
  ];
  return gulp.src(src)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(plumber.stop());
});

gulp.task('test', () => {
  const src = [
    'test/**/*.test.js',
  ];
  return gulp.src(src)
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

gulp.task('webpack.client', () => {
  return gulp.src([])
    .pipe(plumber())
    .pipe(webpack_stream(webpack_client_config))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist/client'));
});

gulp.task('webpack.server', () => {
  return gulp.src([])
    .pipe(plumber())
    .pipe(webpack_stream(webpack_server_config))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist/server'));
});

gulp.task('nodemon', () => {
  livereload.listen({
    port: 35729,
  });
  return nodemon(nodemon_config)
    .on('restart', () => {
      setTimeout(() => {
        gulp.src(['dist/server/app.js'])
          .pipe(plumber())
          .pipe(livereload())
          .pipe(plumber.stop());
      }, 1.3e3);
    });
});

gulp.task('watch:client', () => {
  return gulp.watch(
    [
      'client/**/*.js',
      'client/**/*.jsx',
      'client/**/*.sass',
      '!client/**/*.test.js',
    ], [
      'lint',
    ]);
});

gulp.task('watch:test', () => {
  return gulp.watch(
    [
      'client/**/*.test.js',
    ], [
      'lint',
    ]);
});

gulp.task('watch:server', () => {
  return gulp.watch(
    [
      'server.js',
    ], [
      'server',
    ]);
});

gulp.task('default', gulpSequence(
  [
    'clean',
  ], [
    'lint',
  ], [
    //   'test',
    // ], [
    'webpack.client',
    'webpack.server',
  ], [
    'nodemon',
    // ], [
    // 'watch:client',
    // 'watch:test',
    // 'watch:server',
  ]));