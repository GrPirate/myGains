/**
 * 将 Buffer 转换为 JSON 对象
 * 语法
 * 将 Node Buffer 转换为 JSON 对象的函数语法格式如下：
 * buf.toJSON()
 */
var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);

console.log(json);