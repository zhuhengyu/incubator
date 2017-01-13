/**
 * Created by 欧阳 超 on 2017/01/13
 */

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import del from 'del';

gulp.task('clean', ()=>{
  del('dest');
});

gulp.task('default', [
  'clean',
], ()=>{
  gulp.src('src/main.js')
    .pipe(plumber())
    .pipe(babel({
      presets: [
        'es2015',
      ],
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dest'));
});

