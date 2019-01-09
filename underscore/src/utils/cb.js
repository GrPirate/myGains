//生成回调的内部函数，可应用于集合中的每个元素，返回所需的结果-“标识”、任意回调、属性匹配程序或属性访问器。
import * as _ from '../js/isAny'
import isObject from '../js/isObject'
import optimizeCb from './optimizeCb'
import iteratee from '../js/iteratee'
import identity from '../js/identity'
import builtinIteratee from './builtinIteratee'
import property from '../js/property'
import isArray from '@js/isArray'
import matcher from '@js/matcher'

const cb = function (value, context, argCount) {
  if (iteratee !== builtinIteratee) return iteratee(value, context)
  if (value == null) return identity
  if (_.isFunction(value)) return optimizeCb(value, context, argCount)
  if (isObject(value) && !isArray(value)) return matcher(value)
  return property(value)
}

export default cb