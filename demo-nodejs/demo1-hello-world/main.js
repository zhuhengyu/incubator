/**
 * Created by ouyangcharles on 2016/12/23.
 */

const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  response.end('Hello World');
}).listen(3000);

console.log('Listening Port 3000');