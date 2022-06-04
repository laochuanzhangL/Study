服务端发送的数据其实是utf8编码的内容<br />但是浏览器并不知道你是utf6编码的内容<br />浏览器在不知道服务器想要内容的编码的情况下会**按照当前操作系统的默认编码去解析**<br />中文操作系统默认是gbk<br />**解决方法就是告诉浏览器我给你发送到内容是什么编码的**<br />在Http协议中，Content-Type就是告知对方我给你发送的数据是什么类型的

```javascript
server.on('request',function(req,res){
var url=req.url
if(url==='/plain')
	res.setHeader('Content-Type', 'text/plain; charest=utf-8')
  res.end//只能识别普通文本
  if(url==='/hello')
	res.setHeader('Content-Type', 'text/html; charest=utf-8')
  res.end//能识别html标签 
})
```
```javascript
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

```
[https://tool.oschina.net/commons](https://tool.oschina.net/commons)
可以通过此网站查询content-type对应内容的写法<br />**对于文本类型的数据，最好都加上编码，防止中文解析乱码问题**<br />通过网络发送文件：<br />发送到并不是文件，本质上讲发送到是文件的内容<br />当浏览器收到服务器响应内容之后，就会根据你的Content-Type进行对应的解析处理


