// Is a given value an array?
// Delegates to ECMA5's native Array.isArray

const nativeIsArray = Array.isArray
const toString = Object.prototype.toString
const isArray =
  nativeIsArray ||
  function(obj) {
    return toString.call(obj) === '[object Array]'
  }

export default isArray
