/**
 * 快速排序
 * @param {*} unsortArray 待排序的数组
 * @param {*} sorting 比较两个数的大小
 */
const quickSort = function (unsortArray, sorting = defaultSort) {
  const sortedArray = [...unsortArray]

  /**
   * 选取任意位置的值作为pivotValue（基准），将数组重新排列到基准值两边
   * @param {*} start 数组起始索引
   * @param {*} end 数组末尾索引
   */
  const recursiveSort = (start, end) => {
    if (end - start < 1) return

    const pivotValue = sortedArray[end]
    let splitIndex = start

    for (let i = start; i < end; i++) {
      const sort = sorting(sortedArray[i], pivotValue)

      if (sort === -1) {
        [sortedArray[splitIndex], sortedArray[i]] = [sortedArray[i], sortedArray[splitIndex]]
        splitIndex++
      }
    }

    sortedArray[end] = sortedArray[splitIndex];
    sortedArray[splitIndex] = pivotValue;

    recursiveSort(start, splitIndex - 1)
    recursiveSort(splitIndex + 1, end)
  }
  recursiveSort(0, unsortArray.length - 1)
  return sortedArray
}

/**
 * 比较两个数字的大小
 * @param {*Number} a 
 * @param {*Number} b 
 */
const defaultSort = function (a, b) {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

module.exports = quickSort