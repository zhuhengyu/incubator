/**
 * Created by ouyangcharles on 2016/12/23.
 */

console.log();
const buf1 = new Buffer([97, 98]);
console.log(buf1);
console.log(buf1.length);
console.log(buf1.toJSON());
console.log(buf1.toString());

console.log();
const buf2 = new Buffer('abcdefg');
console.log(buf2);
console.log(buf2.length);
console.log(buf2.toJSON());
console.log(buf2.toString());

console.log();
const buf3 = new Buffer(10);
const length3 = buf3.write('test');
console.log(buf3);
console.log(length3);
console.log(buf3.length);
console.log(buf3.toJSON());
console.log(buf3.toString());

console.log();
const buf4 = new Buffer('欧阳超，这只是个测试');
console.log(buf4);
console.log(buf4.length);
console.log(buf4.toJSON());
console.log(buf4.toString());

const buf5 = Buffer.concat([buf1, buf2]);
console.log(buf1.toString());
console.log(buf2.toString());
console.log(buf5.toString());

const buf6 = new Buffer(buf2.length);
buf2.copy(buf6);
console.log(buf6);