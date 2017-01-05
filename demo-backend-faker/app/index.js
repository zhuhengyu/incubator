/**
 * Created by 欧阳 超 on 2017/01/05.
 */

// const http = require('http');
//
// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain',
//   });
//   res.end(JSON.stringify({
//     foo: 'foo',
//     bar: 'bar',
//   }));
// }).listen(7000);

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(JSON.stringify({
    foo: 'foo',
    bar: 'bar',
  }));
});