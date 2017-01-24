/**
 * Created by 欧阳 超 on 2017/01/22
 */

import uuidV1 from 'uuid/v1';

const generateUuid = () => {
  return uuidV1();
};

// let's mock up some data
// BEGIN
const user1 = {
  id: generateUuid(),
  name: 'Zhao',
  age: '25'
};
const user2 = {
  id: generateUuid(),
  name: 'Qian',
  age: '24'
};
const user3 = {
  id: generateUuid(),
  name: 'Sun',
  age: '23'
};
const user4 = {
  id: generateUuid(),
  name: 'Li',
  age: '22'
};
const users = [user1, user2, user3, user4];
// END

const db = {
  users,
  generateUuid,
};

export default db;