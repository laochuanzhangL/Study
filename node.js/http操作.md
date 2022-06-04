http模块可以构建一个Web服务器
```javascript
var http = require("http");
//1.加载http核心模块

var server = http.createServer();
//2.创建一个Web服务器
//返回一个Server实例

server.on("request", function (request, response) {
  console.log("收到了客户端的请求");
  response.write(request.url);
  response.end();
  //可以直接response.end(request.url)
});

//3.当客户端请求过来，会自动触发服务器的request请求事件，然后执行第二个参数：回调处理
//request 请求事件处理函数需要接受两个参数：
//   Request 请求对象
//        请求对线可以用来获取客户端的一些请求信息，例如请求路径等
//   Response 响应对象
//         响应对象用来向客户端发送响应消息
//         response对象有个write方法，可以给客户端发送响应数据
//         writ可以使用多次，但是需要一个end来结束响应，否则浏览器会一直等待

server.listen(3000, function (Request, Response) {
  console.log("服务器启动成功了");
});
//4.绑定端口号，启动服务器

```
res.end()响应内容只能是**二进制数据或者字符串**

**数字 对象 数组 布尔值等不能响应**
