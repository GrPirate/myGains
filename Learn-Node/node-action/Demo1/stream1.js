/**
 * 创建http服务，将图片流到客户端
 */
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'one.jpg' });
    fs.createReadStream('./one.jpg').pipe(res);
}).listen(3001);

console.log('Server running at http://localhost:3001/');