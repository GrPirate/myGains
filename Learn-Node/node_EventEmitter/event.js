var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

// 注册'some_event'事件的监听器
event.on('some_event', function () {
  console.log('some_event 事件触发');
});
setTimeout(function () {
  // 调用'some_event'的监听器
  event.emit('some_event');
}, 1000);
