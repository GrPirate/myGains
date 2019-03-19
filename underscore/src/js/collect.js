import cb from '@utils/cb'
import isArrayLike from '@utils/isArrayLike'
import keys from './keys'

const collect = function(obj, iteratee, context) {
  iteratee = cb(iteratee, context)
  let _keys = !isArrayLike(obj) && keys(obj)
  let length = (_keys || obj).length
  let results = Array(length)

  for (let index = 0; index < length; index++) {
    let currentKey = _keys ? _keys[index] : index
    results[index] = iteratee(obj[currentKey], currentKey, obj)
  }
  return results
}

export default collect
