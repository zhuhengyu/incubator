'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateUuid = function generateUuid() {
  return (0, _v2.default)();
};

// let's mock up some data
// BEGIN
/**
 * Created by 欧阳 超 on 2017/01/22
 */

var user1 = {
  id: generateUuid(),
  name: 'Zhao',
  age: '25'
};
var user2 = {
  id: generateUuid(),
  name: 'Qian',
  age: '24'
};
var user3 = {
  id: generateUuid(),
  name: 'Sun',
  age: '23'
};
var user4 = {
  id: generateUuid(),
  name: 'Li',
  age: '22'
};
var users = [user1, user2, user3, user4];
// END

var db = {
  users: users,
  generateUuid: generateUuid
};

exports.default = db;