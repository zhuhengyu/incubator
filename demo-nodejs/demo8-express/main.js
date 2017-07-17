/**
 * Created by ouyangcharles on 2016/12/24.
 */

const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello Express');
  next();
});

app.listen(3000);