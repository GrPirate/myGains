const toString = Object.prototype.toString

const isAny = function (name) {
  return function (obj) {
    return toString.call(obj) === `[object ${name}]`
  }
}

export const isArguments = isAny('Arguments')
export const isFunction = isAny('Function')
export const isString = isAny('String')
export const isNumber = isAny('Number')
export const isDate = isAny('Date')
export const isRegExp = isAny('RegExp')
export const isError = isAny('Error')
export const isSymbol = isAny('Symbol')
export const isMap = isAny('Map')
export const isWeakMap = isAny('WeakMap')
export const isSet = isAny('Set')
export const isWeakSet = isAny('WeakSet')
