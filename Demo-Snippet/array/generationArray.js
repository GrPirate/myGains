/**
 * 生成随机数数组
 */
const fs = require('fs')
const { randomSort } = require('./index')

// const newArray = new Array(10000000)
// const array = []

console.time('array')
const array = []
for (let i = 0; i< 100000; i++) {
  array.push(i + 1)
}
console.timeEnd('array') // 35.393(100000)

console.time('newArray')
const newArray = new Array(2)
for (let i = 0, len = newArray.length; i < len; i++) {
  newArray[i] = i + 1
}
console.timeEnd('newArray') // 9.303ms(100000)

console.time('sort')
const sortArray = randomSort(newArray)
console.timeEnd('sort')

const exportContent = `module.exports = ${JSON.stringify(sortArray)}`

fs.writeFileSync('./array.js', exportContent)
