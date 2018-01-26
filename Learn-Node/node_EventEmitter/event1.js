var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function (arg1, arg2) {
  console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function (arg1, arg2) {
  console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', "arg1 参数", "arg2 参数");

/**
 * 此例中emitter为事件'someEvent'事件注册了两个事件监听器，然后出发了'someEvent'
 * 结果：两个事件监听器的回调函数被先后调用
 */