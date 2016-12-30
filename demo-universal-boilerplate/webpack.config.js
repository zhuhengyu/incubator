/**
 * Created by ouyangcharles on 2016/12/26.
 */

import path from 'path';

export default {
  devtool: 'eval',
  entry: {
    public: './public/src/index'
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
    publicPath: 'public/dist'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'public/src')],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};