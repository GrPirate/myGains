const http = require("http");

function a() {
  console.log("hello world");
}
var server = new http.Server();
server.on('request', (req, res) => {
  console.log(req.url);

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('hello we are family<br/>');
  res.end('server already end\n');
})

//显示了三次这也证明了TCP的三次握手
server.on('connection', () => {
  a();
});

server.on('close', () => {
  console.log('server will close');
});

//关闭服务为了触发close事件

// server.close();
server.listen(8080);




http.createServer(function (req, res) {
  res.writeHead(404, {
    "Content-Type": "text/plain"
  })
  res.write("we are is content");
  res.end("fdsa");

}).listen(3000);