var fs = require("fs"); //引入fs核心模块
fs.readFile("/txt.md", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString()); //data为机器码，所以需要toString()方法进行转换
  }
});

/* fs.writeFile("/txt.md", "你好，我是js", function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("文件写入成功");
  }
}); */
