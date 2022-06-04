同源政策规定，AJAX 请求只能发给同源的网址，否则就报错。<br />除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制。

- JSONP
- WebSocket
- CORS


# 1.JSONP
JSONP 是服务器与客户端跨源通信的常用方法。最大特点就是**简单易用，没有兼容性问题，老式浏览器全部支持，服务端改造非常小**。<br />做法如下：<br />第一步，网页添加一个<script>元素，向服务器请求一个脚本，这不受同源政策限制，可以跨域请求。
```javascript
<script src="http://api.foo.com?callback=bar"></script>
```
注意，请求的脚本网址有一个callback参数（?callback=bar），用来告诉服务器，客户端的回调函数名称（bar）。

第二步，服务器收到请求后，拼接一个字符串，将 JSON 数据放在函数名里面，作为字符串返回（bar({...})）。

第三步，客户端会将服务器返回的字符串，作为代码解析，因为浏览器认为，这是<script>标签请求的脚本内容。这时，客户端只要定义了bar()函数，就能在该函数体内，拿到服务器返回的 JSON 数据。

下面看一个实例。首先，网页动态插入<script>元素，由它向跨域网址发出请求。
```javascript
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};
```
上面代码通过动态添加<script>元素，向服务器example.com发出请求。注意，该请求的查询字符串有一个callback参数，**用来指定回调函数的名字，这对于 JSONP 是必需的**。

服务器收到这个请求以后，**会将数据放在回调函数的参数位置**返回。
```javascript
foo({
  'ip': '8.8.8.8'
});
```
由于<script>元素请求的脚本，**直接作为代码运行**。这时，**只要浏览器定义了foo函数，该函数就会立即调用**。**作为参数的 JSON 数据被视为 JavaScript 对象，而不是字符串，因此避免了使用JSON.parse的步骤。**

# 2.WebSocket
WebSocket 是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。该协议**不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。**

下面是一个例子，浏览器发出的 WebSocket 请求的头信息（摘自[维基百科](https://en.wikipedia.org/wiki/WebSocket)）。
```javascript
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```
上面代码中，有一个字段是Origin，表示该请求的请求源（origin），即发自哪个域名。

正是因为有了Origin这个字段，所以 WebSocket 才没有实行同源政策。因为服务器可以根据这个字段，判断是否许可本次通信。如果该域名在白名单内，服务器就会做出如下回应。
```javascript
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

# 3.CORS
CORS 是跨源资源分享（Cross-Origin Resource Sharing）的缩写。它是 W3C 标准，属于跨源 AJAX 请求的根本解决方法。相比 JSONP 只能发GET请求，CORS 允许任何类型的请求。
