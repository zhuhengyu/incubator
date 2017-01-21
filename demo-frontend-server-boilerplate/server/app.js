/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// static files
app.use(express.static(path.resolve(__dirname, '..', 'client')));

// default file
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

app.get('/data/user', (req, res) => {
  // let's mock up some data
  // BEGIN
  const user1 = {
    name: 'Zhao',
    age: '25'
  };
  const user2 = {
    name: 'Qian',
    age: '24'
  };
  const user3 = {
    name: 'Sun',
    age: '23'
  };
  const user4 = {
    name: 'Li',
    age: '22'
  };
  // END
  res.send(JSON.stringify([user1, user2, user3, user4]));
});

app.put('/data/user', (req, res) => {
  console.log(JSON.stringify(req.body));
  res.send(JSON.stringify(JSON.stringify(req.query)));
});

app.delete('/data/user', (req, res) => {
  res.send(JSON.stringify(JSON.stringify(req.query)));
});

app.listen(9000, () => {
});