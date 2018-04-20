# 自动检测版本Demo片段

## 依赖包

1. **superagent**

![Superagent](http://visionmedia.github.io/superagent/)是一个小型的、渐进的客户端HTTP请求库，Node.js模块具有相同的API，具有许多高级HTTP客户端功能。

2. **semver**

Semver是一个比较版本号大小的库

```javascript
const semver = require('semver')
 
semver.valid('1.2.3') // '1.2.3'
semver.valid('a.b.c') // null
semver.clean('  =v1.2.3   ') // '1.2.3'
semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true
semver.gt('1.2.3', '9.8.7') // false
semver.lt('1.2.3', '9.8.7') // true
semver.valid(semver.coerce('v2')) // '2.0.0'
semver.valid(semver.coerce('42.6.7.9.3-alpha')) // '42.6.7'
```
