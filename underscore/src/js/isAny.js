const toString = Object.prototype.toString

const anyMap = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet']

const isAny = function (name) {
  return function (obj) {
    return toString.call(obj) === `[object ${name}]`
  }
}

const defaultIsAny = {}

anyMap.map(name => {
  defauultIsAny[`is${name}`] = isAny(name)
})

export default defaultIsAny
