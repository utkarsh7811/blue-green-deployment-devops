const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from Version 1 (BLUE)");
}).listen(8080);