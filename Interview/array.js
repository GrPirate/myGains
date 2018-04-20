/**
 * 找出多重数组的最大值，组合成一个数组
 * 输入：
 * [
 *    [1,2,4,7],
 *    [5,67,12,70],
 *    [90,34,55,7,1],
 *    [30,2,56,100,33,66]
 * ]
 * 
 * 输出：
 * [7,70,90,100]
 */

function findMaxArray(arr) {
  return arr.reduce((initValue, currentValue) => {
    let res = Array.prototype.slice.call(initValue);
    res.push(Math.max.apply(null, currentValue));
    return res;
  }, [])
}

var a1 = [[1, 2, 4, 7], [5, 67, 12, 70], [90, 34, 55, 7, 1], [30, 2, 56, 100, 33, 66]];

var res1 = findMaxArray(a1);

console.log(res1);

/**
 * 数组去重
 */
function duplicate(arr){

}