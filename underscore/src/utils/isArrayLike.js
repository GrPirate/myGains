import getLength from './getLength'

// Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1
const isArrayLike = function(collection) {
  const length = getLength(collection)
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX
}

export default isArrayLike
