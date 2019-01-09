import getLength from './getLength'
import cb from './cb'

// Generator function to create the findIndex and findLastIndex functions.
const createPredicateIndexFinder = function(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context)
    let length = getLength(array)
    let index = dir > 0 ? 0 : length - 1
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index
    }
    return -1
  }
}

export default createPredicateIndexFinder
