/**
 * 随机排序
 */
const randomSort = (array) => array.sort(() => 0.5 - Math.random())
module.exports = { randomSort }