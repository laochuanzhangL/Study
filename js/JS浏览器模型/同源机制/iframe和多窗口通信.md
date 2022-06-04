iframe元素可以在当前网页之中，嵌入其他网页。每个iframe元素形成自己的窗口，即有自己的window对象。iframe窗口之中的脚本，可以获得父窗口和子窗口。但是，只有在同源的情况下，父窗口和子窗口才能通信；如果跨域，就无法拿到对方的 DOM。<br />比如，父窗口运行下面的命令，如果iframe窗口不是同源，就会报错。
```javascript
document
.getElementById("myIFrame")
.contentWindow
.document
// Uncaught DOMException: Blocked a frame from accessing a cross-origin frame.
```
上面命令中，父窗口想获取子窗口的 DOM，因为跨域导致报错。<br />反之亦然，子窗口获取主窗口的 DOM 也会报错。

如果两个窗口一级域名相同，只是二级域名不同，那么设置上一节介绍的document.domain属性，就可以规避同源政策，拿到 DOM。

对于完全不同源的网站，目前有两种方法，可以解决跨域窗口的通信问题。

- 片段识别符（fragment identifier）
- 跨文档通信API（Cross-document messaging）

# 1.片段识别符
片段标识符（fragment identifier）指的是，**URL 的#号后面的部分**，比如http://example.com/x.html#fragment的#fragment。**如果只是改变片段标识符，页面不会重新刷新。**

父窗口可以把信息，写入子窗口的片段标识符。

```javascript
var src = originURL + '#' + data;
document.getElementById('myIFrame').src = src;
```

上面代码中，父窗口把所要传递的信息，写入 iframe 窗口的片段标识符。<br />子窗口通过监听hashchange事件得到通知。

```javascript
window.onhashchange = checkMessage;

function checkMessage() {
  var message = window.location.hash;
  // ...
}
```
同样的，子窗口也可以改变父窗口的片段标识符。

```javascript
parent.location.href = target + '#' + hash;
```


# 2.window.postMessage()
上面的这种方法属于破解，HTML5 为了解决这个问题，引入了一个全新的API：**跨文档通信 API**（Cross-document messaging）。

这个 API 为window对象新增了一个window.postMessage方法，**允许跨窗口通信，不论这两个窗口是否同源**。举例来说，父窗口aaa.com向子窗口bbb.com发消息，调用postMessage方法就可以了。
```javascript
// 父窗口打开一个子窗口
var popup = window.open('http://bbb.com', 'title');
// 父窗口向子窗口发消息
popup.postMessage('Hello World!', 'http://bbb.com');
```
postMessage方法的第一个参数是**具体的信息内容**，第二个参数是**接收消息的窗口的源（origin）**，即**“协议 + 域名 + 端口”**。**也可以设为*，表示不限制域名，向所有窗口发送。**

 子窗口向父窗口发送消息的写法类似。
```javascript
// 子窗口向父窗口发消息
window.opener.postMessage('Nice to see you', 'http://aaa.com');
```
父窗口和子窗口都可以通过message事件，监听对方的消息。
```javascript
// 父窗口和子窗口都可以用下面的代码，
// 监听 message 消息
window.addEventListener('message', function (e) {
  console.log(e.data);
},false);
```
message事件的参数是事件对象event，提供以下三个属性。

- event.source：发送消息的窗口
- event.origin: 消息发向的网址
- event.data: 消息内容

下面的例子是，子窗口通过event.source属性引用父窗口，然后发送消息。
```javascript
window.addEventListener('message', receiveMessage);
function receiveMessage(event) {
  event.source.postMessage('Nice to see you!', '*');
}
```
上面代码有几个地方需要注意。首先，**receiveMessage函数里面没有过滤信息的来源，任意网址发来的信息都会被处理**。其次，**postMessage方法中指定的目标窗口的网址是一个星号，表示该信息可以向任意网址发送**。通常来说，这两种做法是不推荐的，因为**不够安全，可能会被恶意利用**。

event.origin属性可以过滤不是发给本窗口的消息。

# <br />
