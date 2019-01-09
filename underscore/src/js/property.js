import isArray from './isArray'
import shallowProperty from '../utils/shallowProperty'
import deepGet from '../utils/deepGet'

const property = function (path) {
  if (!isArray(path)) {
    return shallowProperty(path)
  }
  return function(obj) {
    return deepGet(obj, path)
  }
}

export default property
