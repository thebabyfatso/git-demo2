// 引入 events 模块
const events = require('events');
// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter();

// 创建事件处理程序
const connectHandler = function connected() {
    console.log('连接成功。');

    // 触发 data_received 事件 ,并设置时间
    setTimeout(function () {
        eventEmitter.emit('data_received');
    }, 5000);
};

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection');

console.log("程序执行完毕。");