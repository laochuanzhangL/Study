var http = require("http");

var server = http.createServer();

server.on("request", function (req, res) {
  console.log("收到请求了，请求路径是" + req.url);
  var url = req.url;
  if (url === "/") {
    res.end("index.page");
  } else if (url === "/login") {
    res.end("login page");
  }
});

server.listen(80, function () {
  console.log("服务器启动成功，可以访问了");
});
