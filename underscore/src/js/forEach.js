import optimizeCb from '@utils/optimizeCb'
import keys from './keys'
import isArrayLike from '@utils/isArrayLike'

const forEach = function(obj, iteratee, context) {
  iteratee = optimizeCb(iteratee, context)
  let i, length
  if (isArrayLike(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj)
    }
  } else {
    let _keys = keys(obj)
    for (i = 0, length = keys.length; i < length; i++) {
      iteratee(obj[keys[i]], keys[i], obj)
    }
  }
  return obj
}

export default forEach
