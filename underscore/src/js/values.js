import keys from './keys'

const values = function(obj) {
  let _keys = keys(obj)
  let length = _keys.length
  let values = Array(length)
  for (let i = 0; i < length; i++) {
    values[i] = obj[_keys[i]]
  }
  return values
}

export default values
