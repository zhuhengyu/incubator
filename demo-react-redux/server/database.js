/**
 * Created by 欧阳 超 on 2017/01/22
 */

import faker from 'faker';
import _ from 'lodash';

const generateUuid = () => {
  return faker.random.id();
};

// let's mock up some data
// BEGIN
const ageFrom = 20;
const ageRange = 30;
const listCount = 45;
const users = [];
_.range(listCount).forEach(() => {
  users.push({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    age: ageFrom + Math.floor(Math.random() * ageRange),
  });
});
// END

const db = {
  users,
  generateUuid,
};

export default db;