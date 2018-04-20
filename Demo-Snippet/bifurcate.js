const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

const arr = ['beep', 'boop', 'foo', 'bar']
const filter = [true, false, true, true]
const res = bifurcate(arr, filter)

console.log(res)