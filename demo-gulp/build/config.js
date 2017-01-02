/**
 * Created by ouyangcharles on 2016/12/28.
 */

const config = {
  app: {
    js: [
      'app/**/*.js',
      '!app/**/*.test.js'
    ],
    test: [
      'app/**/*.test.js'
    ],
  },
  output: [
    'dist',
  ],
};

export default config;