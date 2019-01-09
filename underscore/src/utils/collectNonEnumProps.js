import * as _ from '@js/isAny'
import has from './has'
import contains from '@js/contains'

const nonEnumerableProps = [
  'valueOf',
  'isPrototypeOf',
  'toString',
  'propertyIsEnumerable',
  'hasOwnProperty',
  'toLocaleString'
]

const collectNonEnumProps = function (obj, keys) {
  let nonEnumIdx = nonEnumerableProps.length
  let constructor = obj.constructor
  let proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto

  // Constructor is a special case.
  let prop = 'constructor'
  if (has(obj, prop) && !contains(keys, prop)) keys.push(prop)

  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx]
    if (prop in obj && obj[prop] !== proto[prop] && !contains(keys, prop)) {
      keys.push(prop)
    }
  }
}

export default collectNonEnumProps
