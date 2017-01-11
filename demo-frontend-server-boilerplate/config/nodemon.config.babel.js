/**
 * Created by 欧阳 超 on 2017/01/08.
 */

const nodemon_config = {
  script: 'dist/server.js',
  watch: [
    'app/**/*.js',
    '!app/**/*.test.js',
    'app/**/*.jsx',
  ],
  env: {
    NODE_ENV: 'development',
  },
  tasks: [
    'webpack',
  ],
  stdout: false,
};

export default nodemon_config;