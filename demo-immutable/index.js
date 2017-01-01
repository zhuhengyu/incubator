/**
 * Created by ouyangcharles on 2017/01/01.
 */

const Immutable = require('immutable');

const map1 = Immutable.Map({a: 1, b: 2, c: 3});
const map2 = map1.set('b', 50);
map1.get('b');
map2.get('b');

console.log(map1);
console.log(map2);
