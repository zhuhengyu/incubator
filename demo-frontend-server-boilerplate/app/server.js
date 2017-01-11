/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  // res.send(path.resolve(__dirname, 'index.html'));
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(9000, () => {
});