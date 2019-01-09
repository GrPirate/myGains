import * as _ from './isAny'

// Is the given value `NaN`?
const isNaN = function(obj) {
  return _.isNumber(obj) && isNaN(obj)
}

export default isNaN
