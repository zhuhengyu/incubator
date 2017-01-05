/**
 * Created by 欧阳 超 on 2016/12/28.
 */

import path from 'path';

const PROD = process.env.NODE_ENV === 'production';

const config = {
  // is production environment?
  PROD,
  // all html files
  html: [
    path.join(__dirname, '../app/**/*.html'),
  ],
  // css files
  css: [
    path.join(__dirname, '../app/**/*.css'),
    path.join(__dirname, '../app/**/*.sass'),
  ],
  // javascript files except test files
  js: [
    path.join(__dirname, '../app/**/*.js'),
    path.join(__dirname, '../!app/**/*.test.js'),
  ],
  // test files
  test: [
    path.join(__dirname, '../app/**/*.test.js'),
  ],
  // output path
  output: PROD ?
    path.join(__dirname, '../build') :
    path.join(__dirname, '../dist'),
};

export default config;