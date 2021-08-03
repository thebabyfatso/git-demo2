const fs = require("fs");
let path = "C:\\Users\\dongdong\\Pictures\\Saved Pictures\\风灵玉秀.jpg";
// 创建一个可以写入的流，写入到文件 output.txt 中
const writerStream = fs.createWriteStream('fengliuyuxiu.jpg');
// 创建可读流
const readerStream = fs.createReadStream(path);

// 设置编码为 utf8。
// readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    console.info(chunk);
    writerStream.write(chunk);
});

readerStream.once('end',function(){
    console.log("没有更多的文件可读取了");
    // 标记文件末尾
    writerStream.end();
});

readerStream.once('error', function(err){
    console.log(err.stack);
});
// 处理流事件 --> finish、error
writerStream.once('finish', function() {
    console.log("写入完成。");
});

writerStream.once('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");