
const fs = require('fs')

// 读取
fs.readFile('./test.json', (err, data) => {
  if (err) console.error(err)
  let datas = JSON.parse(data.toString())
  datas.map(item => {
    item.tags = Array.from(new Set(item.tags))
    return item
  })
  // 写入
  fs.writeFileSync('./output.json', JSON.stringify(datas))
  console.log(datas)
})
