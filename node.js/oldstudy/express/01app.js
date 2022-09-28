//1.引包
var express = require("express");

//创建你的服务器引用程序 也就是 http.createServer
var app = express();

//当服务器收到get请求 / 的时候，执行回调处理函数
app.get("/", function (req, res) {
  res.send("helle express");
});

app.get("/about", function (req, res) {
  res.send("关于我");
});

//公开指定目录
//只要这么做了，就可以直接通过/public/xx的方式访问public目录下的所有资源
app.use("/public/", express.static("./public/"));

app.listen(3000, function () {
  console.log("app is running at port 3000");
});
