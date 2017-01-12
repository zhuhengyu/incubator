/**
 * Created by 欧阳 超 on 2017/01/08.
 */

// import path from 'path';

const nodemon_config = {
  script: 'server/server.js',
  watch: [
    'dist/**/*',
    'server/**/*',
  ],
  env: {
    NODE_ENV: 'development',
  },
  tasks: [],
  stdout: false,
};

export default nodemon_config;