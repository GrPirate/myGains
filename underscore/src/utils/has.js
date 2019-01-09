const hasOwnProperty = Object.prototype.hasOwnProperty
const has = function(obj, path) {
  return obj != null && hasOwnProperty.call(obj, path)
}

export default has
