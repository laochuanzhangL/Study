const http = require("http");
var fs = require("fs");

var server = http.createServer();

var wwwDir = "E:/node_study/node_begin/resource";
server.on("request", function (req, res) {
  var url = req.url;
  var filePath = "/index.html";
  if (url !== "/") {
    filePath = url;
  }
  fs.readFile(wwwDir + filePath, function (err, data) {
    if (err) {
      return res.end("404 Not Found");
    }
    res.end(data);
  });
  console.log(filePath, wwwDir + filePath);
});

server.listen(3000, function () {
  console.log("begin....");
});
