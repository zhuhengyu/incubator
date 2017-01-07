/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack_stream from 'webpack-stream';
import nodemon from 'gulp-nodemon';

import config from './webpack.config.babel';

gulp.task('webpack', () => {
  gulp.src('app/app.js')
    .pipe(plumber())
    .pipe(webpack_stream(config))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', ['webpack'], () => {
  nodemon({
    script: 'dist/bundle.js',
    watch: [
      'app/**/*.js',
      '!app/**/*.test.js'
    ],
    env: {
      NODE_ENV: 'production',
    },
    tasks: [
      'webpack',
    ],
    stdout: false,
  }).on('restart', () => {
    setTimeout(() => {

    })
  });
});

gulp.task('default', ['webpack', 'nodemon'], () => {
});