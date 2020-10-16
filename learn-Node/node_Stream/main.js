const fs = require('fs');

// 创建一个可读流
const readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
const writeStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取input.txt内容， 并将内容写入到 output.txt中
readerStream.pipe(writeStream);

console.log('程序执行完毕')