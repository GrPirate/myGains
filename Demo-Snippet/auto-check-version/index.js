import semver from 'semver'
import superagent from 'superagent'
import { version as currentVersion } from '../../package.json' // 当前项目的版本号

export default function autoUpdater (callback) {
  superagent
  .get('https://raw.githubusercontent.com/vesparny/marky/master/package.json') // 获取线上最新版本号
  .end((err, res) => {
    if (err || !res.ok) {
      callback(err)
    } else {
      try {
        const newVersion = JSON.parse(res.text).version
        if (semver.gt(newVersion, currentVersion)) {// 比较版本号大小
          callback(null, newVersion) // 线上版本大于当前版本，触发回调函数
        }
      } catch (err) {
        callback(err)
      }
    }
  })
}