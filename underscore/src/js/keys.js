import isObject from './isObject'
import has from '../utils/has'
import collectNonEnumProps from '../utils/collectNonEnumProps'

const nativeKeys = Object.keys
const hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString')
// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
const keys = function(obj) {
  if (!isObject(obj)) return []
  if (nativeKeys) return nativeKeys(obj)
  var keys = []
  for (var key in obj) if (has(obj, key)) keys.push(key)
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, keys)
  return keys
}

export default keys
