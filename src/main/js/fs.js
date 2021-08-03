const fs = require("fs");

console.info("文件系统的处理过程：")
console.log("文件准备打开.....");
fs.open("input.txt", "r+", function (err, fd) {
    if (err) {
        console.error(err);
    }
    console.log("文件已经打开.....");
// 异步写入读取
    console.log("准备写入文件");
    fs.writeFile(fd, '我是通过fs.writeFile写入文件的内容', function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("--------我是分割线-------------")
        console.log("读取写入的数据！");
        fs.readFile(fd, function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("异步读取文件数据: " + data.toString());
        });
    });
    // 关闭文件
    fs.close(fd, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("文件关闭成功");
    });
});

console.log("程序继续执行.....");