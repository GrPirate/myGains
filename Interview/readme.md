# 1、this指向问题

```javascript
var a = 3

var foo = function () {
  console.log(this.a)
}

var obj1 = {
  a: 5,
  fun: function (fn) {
    fn()
  }
}

var obj2 = {
  a: 5,
  fun: foo
}

obj1.fun(foo) // 3

obj2.fun() // 5
```

# js数据类型

* undefined
* Null
* String
* Boolean
* Number
