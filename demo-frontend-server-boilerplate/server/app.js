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

// let's mock up some data
// BEGIN
const user1 = {
  id: '1',
  name: 'Zhao',
  age: '25'
};
const user2 = {
  id: '2',
  name: 'Qian',
  age: '24'
};
const user3 = {
  id: '3',
  name: 'Sun',
  age: '23'
};
const user4 = {
  id: '4',
  name: 'Li',
  age: '22'
};
const users = [user1, user2, user3, user4];
// END

// static files
app.use(express.static(path.resolve(__dirname, '..', 'client')));

// default file
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

app.get('/data/user', (req, res) => {
  res.send(JSON.stringify(users));
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