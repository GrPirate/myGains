import isArrayLike from './isArrayLike'
import keys from '@js/keys'
import optimizeCb from './optimizeCb'

const createReduce = function(dir) {
  let reducer = function(obj, iteratee, memo, initial) {
    let _keys = !isArrayLike(obj) && keys(obj)
    let length = (_keys || obj).length
    let index = dir > 0 ? 0 : length - 1

    if (!initial) {
      memo = obj[_keys ? _keys[index] : index]
      index += dir
    }

    for (; index >= 0 && index < length; index += dir) {
      let currentKey = _keys ? _keys[index] : index
      memo = iteratee(memo, obj[currentKey], currentKey, obj)
    }

    return memo
  }

  return function(obj, iteratee, memo, context) {
    let initial = arguments.length >= 3
    return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial)
  }
}

export default createReduce
