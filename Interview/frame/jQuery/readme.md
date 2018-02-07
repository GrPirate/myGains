# jQuery源码学习

1. 使用`$(selector)`创建jQuery对象，实际是jQuery内部返回了一个使用new构造函数的方式创建了一个jQuery的实例

```javascript
(function(){
  var jQuery = function (selector, context){
    // ...
    return new jQuery.fn.init(selector, context); // 构造实例是交给了 jQuery.fn.init() 方法去完成
  }

  jQuery.fn = jQuery.prototype = {// 将jQuery原型赋值为新的变量fn
    // ...
    init: function(selector, context){

    }
    // ...
  }

  jQuery.fn.init.prototype = jQuery.prototype; // 将jQuery原型属性挂载到其init属性上,使用 new jQuery.fn.init() 生成的对象就能够访问到 jQuery.fn 上的所有原型方法。
})
```