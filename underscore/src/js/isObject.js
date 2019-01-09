const isObject = function (obj) {
  let type = typeof obj
  return type === 'function' || type === 'object' && !!obj
}

export default isObject
