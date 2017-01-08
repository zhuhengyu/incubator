/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack_stream from 'webpack-stream';
import nodemon from 'gulp-nodemon';
import eslint from 'gulp-eslint';
import mocha from 'gulp-mocha';
import espower from 'gulp-espower';

import nodemon_config from './config/nodemon.config.babel';
import webpack_config from './config/webpack.config.babel';

gulp.task('lint', () => {
  gulp.src([
    'app/**/*.js',
    '!app/**/*.test.js',
  ])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(plumber.stop());
});

gulp.task('test', ['lint'], () => {
  gulp.src([
    'app/**/*.test.js',
  ])
    .pipe(plumber())
    .pipe(espower())
    .pipe(gulp.dest('dist'))
    .pipe(mocha())
    .pipe(plumber.stop());
});

gulp.task('webpack', ['test'], () => {
  gulp.src([
    'app/app.js'
  ])
    .pipe(plumber())
    .pipe(webpack_stream(webpack_config))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', ['webpack', 'test', 'lint'], () => {
  nodemon(nodemon_config).on('restart', () => {
    setTimeout(() => {

    });
  });
});

gulp.task('default', [
  'lint',
  'test',
  'webpack',
  'nodemon',
], () => {
});