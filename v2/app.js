const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from Version 2 (GREEN)");
}).listen(8080);