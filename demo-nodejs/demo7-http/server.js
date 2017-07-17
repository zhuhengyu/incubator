/**
 * Created by ouyangcharles on 2016/12/24.
 */

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  if (req.url === '/html') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.write('Error');
        res.end();
      } else {
        res.write(data.toString());
        res.end();
      }
    });
  } else if (req.url === '/json') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    console.log('ha');
    res.write(JSON.stringify({foo: 'bar'}));
    res.end();
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.write('Hello World');
    res.end();
  }
}).listen(3000);