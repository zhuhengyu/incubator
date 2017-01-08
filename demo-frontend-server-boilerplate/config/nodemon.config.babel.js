/**
 * Created by 欧阳 超 on 2017/01/08.
 */

const nodemon_config = {
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
};

export default nodemon_config;