/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import db from './database';

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

app.get('/data/users', (req, res) => {
  res.send(JSON.stringify(db.users));
});

app.put('/data/users', (req, res) => {
  const user = Object.assign({}, {
    id: db.generateUuid(),
  }, req.body);
  res.send(user);
  // res.sendStatus(404);
});

app.delete('/data/users/:id', (req, res) => {
  res.send(JSON.stringify(JSON.stringify(req.params.id)));
});

app.listen(9000, () => {
});