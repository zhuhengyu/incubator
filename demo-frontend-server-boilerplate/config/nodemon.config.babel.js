/**
 * Created by 欧阳 超 on 2017/01/08.
 */

const nodemon_config = {
  script: 'server/server.js',
  watch: [
    'app/**/*.js',
    '!app/**/*.test.js',
    'app/**/*.jsx',
    'server.js',
  ],
  env: {
    NODE_ENV: 'development',
  },
  tasks: [
    'server',
    'webpack',
  ],
  stdout: false,
};

export default nodemon_config;