const fs = require('fs')
const quickSort = require('./quickSort')
const unsortArray = require('./array')

/**
 * 测试快速排序
 */
console.time('quickSort')
const sortedArray = quickSort(unsortArray)
console.timeEnd('quickSort')

fs.writeFileSync('./array.json', JSON.stringify(sortedArray))