/**
 * Created by 欧阳 超 on 2017/01/22
 */

import uuidV1 from 'uuid/v1';

const generateUuid = () => {
  return uuidV1();
};

// let's mock up some data
// BEGIN
const ageFrom = 20;
const ageRange = 30;
const users = [
  { id: generateUuid(), name: 'Zhao', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Qian', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Sun', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Li', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Zhou', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Wu', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Zheng', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Wang', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Feng', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Chen', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Chu', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Wei', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Jiang', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Shen', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Han', age: ageFrom + Math.floor(Math.random() * ageRange) },
  { id: generateUuid(), name: 'Yang', age: ageFrom + Math.floor(Math.random() * ageRange) },
];
// END

const db = {
  users,
  generateUuid,
};

export default db;