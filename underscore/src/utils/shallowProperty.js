const shallowProperty = function (key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key]
  }
}

export default shallowProperty
