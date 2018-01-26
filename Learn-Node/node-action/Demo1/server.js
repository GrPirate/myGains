var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(3001);
console.log('server running at http://localhost:3001/');


/*<================>*/

var http = require('http');
var server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');
})
server.listen(3001);
console.log('server running at http://localhost:3001/');