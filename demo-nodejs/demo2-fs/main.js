/**
 * Created by ouyangcharles on 2016/12/23.
 */

const fs = require('fs');

const data = fs.readFileSync('input.txt');
console.log(`Sync: ${data.toString()}`);

fs.readFile('input.txt', (err, data) => {
  console.log(`ASync: ${data.toString()}`);
});

fs.writeFile('output.txt', 'Hello NodeJS', (err) => {
  if (err) {
    throw err;
  }
});