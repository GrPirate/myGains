const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')

const res= RGBToHex(255, 165, 57)

console.log(res)

/**
 * padStart: 字符串前填充字符串
 * string.padStart(maxLength, fillString = '')
 * > 'x'.padStart(3, '0')
 * '00x'
 */

 /**
 * padEnd: 字符串后填充字符串
 * string.padEnd(maxLength, fillString = '')
 * > 'x'.padEnd(3, '0')
 * 'x00'
 */