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
  // let's mock up some data
  // BEGIN
  const user1 = {
    name: 'Zhao',
    age: '25'
  };
  const user2 = {
    name: 'Qiao',
    age: '24'
  };
  // END
  res.send(JSON.stringify([user1, user2]));
});

app.listen(9000, () => {
});