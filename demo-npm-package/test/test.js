/**
 * Created by 欧阳超 on 2017/02/24
 */

const { curry } = require('../dist/index');

const plus = curry((x, y, z) => x + y + z);

console.log(plus(1, 2, 3));
console.log(plus(1, 2)(3));
console.log(plus(1)(2)(3));