/**
 * Created by 欧阳 超 on 2017/01/08.
 */

const nodemon_config = {
  script: 'dist/server/app.js',
  watch: [
    'dist/**/*',
  ],
  env: {
    NODE_ENV: 'development',
  },
  tasks: [],
  stdout: false,
};

export default nodemon_config;