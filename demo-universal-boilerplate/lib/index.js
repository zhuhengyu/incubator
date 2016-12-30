'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /**
                                     * Created by ouyangcharles on 2016/12/26.
                                     */

app.get('/', function (req, res) {
  res.send('Hello NodeJS');
}).listen(3000);