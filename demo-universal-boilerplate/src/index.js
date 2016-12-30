/**
 * Created by ouyangcharles on 2016/12/26.
 */

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello NodeJS');
}).listen(3000);