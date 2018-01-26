/**
 * 从缓冲区读取数据
 * buf.toString([encoding[, start[, end]]])
 */
var buf = new Buffer(26);
for (var i = 0; i < 26; i++){
  buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString('base64'));
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde