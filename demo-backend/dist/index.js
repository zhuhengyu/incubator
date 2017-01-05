'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /**
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

app.get('/', function (req, res) {
  res.send(JSON.stringify({
    foo: 'foo',
    bar: 'bar'
  }));
});