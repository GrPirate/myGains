/**
 * 创建长度为256字节的 buffer 实例
 * var buf = new Buffer("www.runoob.com", "utf-8");
 * utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。
 */
var buf = new Buffer(256);

/**
 * 写入缓冲区
 * buf.write(string[, offset[, length]][, encoding])
 */
var len = buf.write('hello world!!!');
console.log('写入字节数' + len);