console.log(module);
console.log(__filename);
console.log(__dirname);
function printhello() {
console.log("时间停止的那一天");
}
//2秒后执行指定函数
// let t = setTimeout(printhello,2000);

//清楚指定定时器
// clearTimeout(t);

//每隔2秒执行之指定函数
// let interval = setInterval(printhello,2000);

//清楚指定定时器
// clearInterval(interval);

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");

setTimeout(printhello,2000);

console.timeEnd('获取数据');

console.info("程序执行完毕。")