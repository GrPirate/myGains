import extendOwn from './extendOwn'
import isMatch from './isMatch'

const matches = function (attrs) {
  attrs = extendOwn({}, attrs)
  return function(obj) {
    return isMatch(obj, attrs)
  }
}

export default matches
