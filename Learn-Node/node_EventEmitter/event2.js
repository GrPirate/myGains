var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function () {
  console.log('监听器listener执行。');
}

// 监听器 #2
var listener2 = function () {
  console.log('监听器listener2执行。');
}

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件。");

// 处理connection事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件。");

console.log("程序执行完毕。");