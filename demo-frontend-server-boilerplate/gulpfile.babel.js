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
import babel from 'gulp-babel';
import runSequence from 'run-sequence';

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

gulp.task('test', () => {
  gulp.src([
    'app/**/*.test.js',
  ])
    .pipe(plumber())
    .pipe(babel({
      presets: [
        'es2015'
      ],
    }))
    .pipe(espower())
    .pipe(mocha())
    .pipe(plumber.stop());
});

gulp.task('webpack', () => {
  gulp.src([
    'app/app.js'
  ])
    .pipe(plumber())
    .pipe(webpack_stream(webpack_config))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', () => {
  nodemon(nodemon_config).on('restart', () => {
    setTimeout(() => {

    });
  });
});

gulp.task('default', () => {
  runSequence('test', 'lint', 'webpack', 'nodemon');
});