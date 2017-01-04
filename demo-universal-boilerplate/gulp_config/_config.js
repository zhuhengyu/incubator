/**
 * Created by ouyangcharles on 2016/12/28.
 */

import webpack from 'webpack';

const PROD = process.env.NODE_ENV === 'production';

const config = {
  // is production environment?
  PROD,
  // all html files
  html: [
    'app/**/*.html',
  ],
  // css files
  css: [
    'app/**/*.css',
  ],
  // javascript files except test files
  js: [
    'app/**/*.js',
    '!app/**/*.test.js'
  ],
  // test files
  test: [
    'app/**/*.test.js'
  ],
  // output path
  output: PROD ? 'build' : 'dist',
  // webpack configuration
  webpack_config: {
    entry: './app/index.js',
    output: {
      filename: 'bundle.js',
    },
    plugins: [new webpack.optimize.UglifyJsPlugin()],
  },
};

export default config;