/**
 * Created by ouyangcharles on 2016/12/26.
 */

import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp_config', {
  recurse: false,
});

gulp.task('default', [
  'clean',
  'lint',
  'test',
  'server',
  'watch',
  'bundle',
], () => {
});