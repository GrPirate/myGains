import isArrayLike from '../utils/isArrayLike'
import values from './values'
import indexOf from './indexOf'

// Determine if the array or object contains a given item (using `===`).
// Aliased as `includes` and `include`.
const include = function(obj, item, fromIndex, guard) {
  if (!isArrayLike(obj)) obj = values(obj)
  if (typeof fromIndex != 'number' || guard) fromIndex = 0
  return indexOf(obj, item, fromIndex) >= 0
}

export default include
