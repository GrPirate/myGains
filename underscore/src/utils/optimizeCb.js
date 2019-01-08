// 内部函数，该函数返回传入回调的有效版本(对于当前引擎)，以便在其他下划线函数中重复应用。
const optimizeCb = function (func, context, argCount) {
  if (context === void 0) return func
  switch (argCount == null ? 3 : argCount) {
    case 1: return function (value) {
      return func.call(context, value)
    }
    // 2个参数的情况被省略了，因为我们没有使用它。
    case 3: return function (value, index, collection) {
      return func.call(context, value, index, collection)
    }
    case 4: return function (accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection)
    }
  }
  return func.apply(context, arguments)
}

export default optimizeCb