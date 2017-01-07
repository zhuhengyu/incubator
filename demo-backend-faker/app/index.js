/**
 * Created by 欧阳 超 on 2017/01/05.
 */

import express from 'express';
import faker from 'faker';

const app = express();

app.get('/', (req, res) => {
  const name = faker.name.findName();
  const age = 13;
  res.send(JSON.stringify({
    name,
    age,
  }));
}).listen(7000, () => {
});