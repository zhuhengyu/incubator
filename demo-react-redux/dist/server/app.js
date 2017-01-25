'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by 欧阳 超 on 2017/01/07.
 */

var app = (0, _express2.default)();

// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: false }));
// parse application/json
app.use(_bodyParser2.default.json());

// static files
app.use(_express2.default.static(_path2.default.resolve(__dirname, '..', 'client')));

// default file
app.get('/', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, '..', 'client', 'index.html'));
});

app.get('/data/users', function (req, res) {
  res.send(_database2.default.users);
});

app.put('/data/users', function (req, res) {
  var user = Object.assign({}, {
    id: _database2.default.generateUuid()
  }, req.body);
  console.log(user);
  res.send({ user: user });
  // res.sendStatus(404);
});

app.delete('/data/users/:id', function (req, res) {
  res.send({ id: req.params.id });
});

app.post('/data/users', function (req, res) {
  var user = req.body;
  res.send({ user: user });
});

app.listen(9000, function () {});