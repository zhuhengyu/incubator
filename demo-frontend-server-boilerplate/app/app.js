/**
 * Created by 欧阳 超 on 2017/01/07.
 */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(9000, () => {
});