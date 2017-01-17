/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/data', (req, res) => {
  res.send(JSON.stringify({name: 'Zhao', age: 35}));
});

app.listen(9000, () => {
});