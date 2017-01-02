/**
 * Created by ouyangcharles on 2016/12/26.
 */

import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./build', {
  recurse: false,
});

const tasks = [
  'clean',
  'lint',
  'test',
];

gulp.task('default', tasks);