/**
 * Created by ouyangcharles on 2016/12/24.
 */

const fs = require('fs');

const frs = fs.createReadStream('input.txt');
const fws1 = fs.createWriteStream('output1.txt', {flags: 'a+'});
const fws2 = fs.createWriteStream('output2.txt');

frs.on('data', (chunk) => {
  fws1.write(`chunk: ${chunk.toString()}\n`);
});

frs.pipe(fws2);