var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var cache = {};

var server = http.createServer(function (request, response) {
    var filePath = false;

    if (request.url == '/') {
        filePath = 'public/index.html';
    } else {
        filePath = 'public' + request.url;
    }

    var absPath = './' + filePath;
    serveStatic(response, cache, absPath);
});

server.listen(3000, function () {
    console.log("Server listening on port 3000.");
})

/**
 * 文件不存在时发送404服务
 * @param {*} response 
 */
function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Error 404: resource not found.');
    response.end();
}

/**
 * 发送文件内容
 * @param {*} response 
 * @param {*} filePath 
 * @param {*} fileContents 
 */
function sendFile(response, filePath, fileContents) {
    response.writeHead(200, { 'Content-Type': mime.lookup(path.basename(filePath)) });
    response.end(fileContents);
}

/**
 * 检查文件是否缓存，如果是则从缓存文件读取，否则从文件系统中读取
 * @param {*} response 
 * @param {*} cache 
 * @param {*} absPath 
 */
function serveStatic(response, cache, absPath) {
    if (cache[absPath]) {// 检查文件是否缓存在内存中
        sendFile(response, absPath, cache[absPath]);// 从内存中返回文件
    } else {
        fs.exists(absPath, function (exists) {// 检查文件是否存在
            if (exists) {
                fs.readFile(absPath, function (err, data) {// 从硬盘中读取文件
                    if (err) {
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data);// 从硬盘中读取文件并返回
                    }
                });
            } else {
                send404(response);// 发送HTTP 404响应
            }
        })
    }
}