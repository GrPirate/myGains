import cb from './cb'

const builtinIteratee = function (value, context) {
  return cb(value, context, Infinity)
}

export default builtinIteratee
