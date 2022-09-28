const fs = require("fs");
const http = require("http");

var server = http.createServer();

server.on("request", function (req, res) {
  var url = req.url;
  if (url === "/img") {
    fs.readFile("./resource/1.jpeg", function (err, data) {
      if (err) {
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("文件读取失败");
      } else {
        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
      }
    });
  }
});

server.listen(8000, function () {
  console.log("服务器已经启动");
});
