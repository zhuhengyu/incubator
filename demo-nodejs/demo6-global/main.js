/**
 * Created by ouyangcharles on 2016/12/24.
 */

setTimeout(() => {
  console.log(__filename);
}, 1e3);

let i = 0;
const interval = setInterval(() => {
  if (i++ < 10) {
    console.log(`${i}: ${__dirname}`);
  } else {
    clearInterval(interval);
  }
}, 1e2);