'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by 欧阳 超 on 2017/01/05.
 */

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  var name = _faker2.default.name.findName();
  var age = 13;
  res.send(JSON.stringify({
    name: name,
    age: age
  }));
}).listen(7000, function () {});