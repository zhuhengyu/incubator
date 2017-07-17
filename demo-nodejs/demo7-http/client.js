/**
 * Created by ouyangcharles on 2016/12/24.
 */

const http = require('http');

http.request({
  host: 'localhost',
  port: '3000',
  path: '/json',
}, (res) => {
  res.on('data', (data) => {
    console.log(data.toString());
  });
}).end();