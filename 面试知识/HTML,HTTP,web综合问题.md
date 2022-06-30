
### 1.<img>的title和alt有什么区别
- title通常当鼠标滑动到元素上的时候显示
- alt是<img>的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析

### <br />2. HTTP的几种请求方法用途

- GET方法
   - 发送一个请求来取得服务器上的某一资源
- POST方法
   - 向URL指定的资源提交数据或附加新的数据
- PUT方法
   - 跟POST方法很像，也是想服务器提交数据。但是，它们之间有不同。PUT指定了资源在服务器上的位置，而POST没有
- HEAD方法
   - 只请求页面的首部
- DELETE方法
   - 删除服务器上的某资源
- OPTIONS方法
   - 它用于获取当前URL所支持的方法。如果请求成功，会有一个Allow的头包含类似“GET,POST”这样的信息
- TRACE方法
   - TRACE方法被用于激发一个远程的，应用层的请求消息回路
- CONNECT方法
   - 把请求连接转换到透明的TCP/IP通道

### 3.从浏览器地址栏输入url到显示页面的步骤

#### 基础版本

- 浏览器根据请求的URL交给DNS域名解析，找到真实IP，向服务器发起请求；
- 服务器交给后台处理完成后返回数据，浏览器接收文件（HTML、JS、CSS、图象等）；
- 浏览器对加载到的资源（HTML、JS、CSS等）进行语法解析，建立相应的内部数据结构（如HTML的DOM）；
- 载入解析到的资源文件，渲染页面，完成。

#### 详细版本

1. 在浏览器地址栏输入URL
1. 浏览器查看**缓存**，如果请求资源在缓存中并且新鲜，跳转到转码步骤
   1. 如果资源未缓存，发起新请求
   1. 如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。
   1. 检验新鲜通常有两个HTTP头进行控制Expires和Cache-Control：
      - HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期
      - HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大新鲜时间
3. 浏览器**解析URL**获取协议，主机，端口，path
3. 浏览器**组装一个HTTP（GET）请求报文**
3. 浏览器**获取主机ip地址**，过程如下：
   1. 浏览器缓存
   1. 本机缓存
   1. hosts文件
   1. 路由器缓存
   1. ISP DNS缓存
   1. DNS递归查询（可能存在负载均衡导致每次IP不一样）
6. **打开一个socket与目标IP地址，端口建立TCP链接**，三次握手如下：
   1. 客户端发送一个TCP的**SYN=1，Seq=X**的包到服务器端口
   1. 服务器发回**SYN=1， ACK=X+1， Seq=Y**的响应包
   1. 客户端发送**ACK=Y+1， Seq=Z**
7. TCP链接建立后**发送HTTP请求**
7. 服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序
7. 服务器检查**HTTP请求头是否包含缓存验证信息**如果验证缓存新鲜，返回**304**等对应状态码
7. 处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作
7. 服务器将**响应报文通过TCP连接发送回浏览器**
7. 浏览器接收HTTP响应，然后根据情况选择**关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下**：
   1. 主动方发送**Fin=1， Ack=Z， Seq= X**报文
   1. 被动方发送**ACK=X+1， Seq=Z**报文
   1. 被动方发送**Fin=1， ACK=X， Seq=Y**报文
   1. 主动方发送**ACK=Y， Seq=X**报文
13. 浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同
13. 如果资源可缓存，**进行缓存**
13. 对响应进行**解码**（例如gzip压缩）
13. 根据资源类型决定如何处理（假设资源为HTML文档）
13. **解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本**，这些操作没有严格的先后顺序，以下分别解释
13. **构建DOM树**：
   1. **Tokenizing**：根据HTML规范将字符流解析为标记
   1. **Lexing**：词法分析将标记转换为对象并定义属性和规则
   1. **DOM construction**：根据HTML标记关系将对象组成DOM树
19. 解析过程中遇到图片、样式表、js文件，**启动下载**
19. 构建**CSSOM树**：
   1. **Tokenizing**：字符流转换为标记流
   1. **Node**：根据标记创建节点
   1. **CSSOM**：节点创建CSSOM树
21. [根据DOM树和CSSOM树构建渲染树(opens new window)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction):
   1. 从DOM树的根节点遍历所有**可见节点**，不可见节点包括：1）script,meta这样本身不可见的标签。2)被css隐藏的节点，如display: none
   1. 对每一个可见节点，找到恰当的CSSOM规则并应用
   1. 发布可视节点的内容和计算样式
22. **js解析如下**：
   1. 浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时**document.readystate为loading**
   1. HTML解析器遇到**没有async和defer的script时**，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。**同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容**
   1. 当解析器遇到设置了**async**属性的script时，开始下载脚本并继续解析文档。脚本会在它**下载完成后尽快执行**，但是**解析器不会停下来等它下载**。异步脚本**禁止使用document.write()**，它们可以访问自己script和之前的文档元素
   1. 当文档完成解析，document.readState变成interactive
   1. 所有**defer**脚本会**按照在文档出现的顺序执行**，延迟脚本**能访问完整文档树**，禁止使用document.write()
   1. 浏览器**在Document对象上触发DOMContentLoaded事件**
   1. 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些**内容完成载入并且所有异步脚本完成载入和执行**，document.readState变为complete，window触发load事件
23. **显示页面**（HTML解析过程中会逐步显示页面）

### 4.HTTP状态码及其含义

- 1XX：信息状态码
   - 100 Continue 继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
- 2XX：成功状态码
   - 200 OK 正常返回信息
   - 201 Created 请求成功并且服务器创建了新的资源
   - 202 Accepted 服务器已接受请求，但尚未处理
- 3XX：重定向
   - 301 Moved Permanently 请求的网页已永久移动到新位置。
   - 302 Found 临时性重定向。
   - 303 See Other 临时性重定向，且总是使用 GET 请求新的 URI。
   - 304 Not Modified 自从上次请求后，请求的网页未修改过。
- 4XX：客户端错误
   - 400 Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
   - 401 Unauthorized 请求未授权。
   - 403 Forbidden 禁止访问。
   - 404 Not Found 找不到如何与 URI 相匹配的资源。
- 5XX: 服务器错误
   - 500 Internal Server Error 最常见的服务器端错误。
   - 503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。


### 5.html5有哪些新特性、移除了那些元素？

- HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加
   - 新增选择器 document.querySelector、document.querySelectorAll
   - 拖拽释放(Drag and drop) API
   - 媒体播放的 video 和 audio
   - 本地存储 localStorage 和 sessionStorage
   - 离线应用 manifest
   - 桌面通知 Notifications
   - 语意化标签 article、footer、header、nav、section
   - 增强表单控件 calendar、date、time、email、url、search
   - 地理位置 Geolocation
   - 多任务 webworker
   - 全双工通信协议 websocket
   - 历史管理 history
   - 跨域资源共享(CORS) Access-Control-Allow-Origin
   - 页面可见性改变事件 visibilitychange
   - 跨窗口通信 PostMessage
   - Form Data 对象
   - 绘画 canvas
- 移除的元素：
   - 纯表现的元素：basefont、big、center、font、 s、strike、tt、u
   - 对可用性产生负面影响的元素：frame、frameset、noframes
- 支持HTML5新标签：
   - IE8/IE7/IE6支持通过document.createElement方法产生的标签
   - 可以利用这一特性让这些浏览器支持HTML5新标签
   - 浏览器支持新标签后，还需要添加标签默认的样式
- 当然也可以直接使用成熟的框架、比如html5shim

**如何区分 HTML 和 HTML5**

- DOCTYPE声明、新增的结构元素、功能元素


### 6 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

- cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）
- cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递
- sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存
- 存储大小：
   - cookie数据大小不能超过4k
   - sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大
- 有期时间：
   - localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
   - sessionStorage 数据在当前浏览器窗口关闭后自动删除
   - cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

### 7 WEB标准以及W3C标准是什么?

- 标签闭合、标签小写、不乱嵌套、使用外链css和js、结构行为表现的分离

### 8.xhtml和html有什么区别?

- 一个是功能上的差别
   - 主要是XHTML可兼容各大浏览器、手机以及PDA，并且浏览器也能快速正确地编译网页
- 另外是书写习惯的差别
   - XHTML 元素必须被正确地嵌套，闭合，区分大小写，文档必须拥有根元素

### 9.行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？行内元素和块级元素有什么区别？

- 行内元素有：a b span img input select strong
- 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4… p
- 空元素：<br> <hr> <img> <input> <link> <meta>
- 行内元素不可以设置宽高，不独占一行
- 块级元素可以设置宽高，独占一行

### 10.HTML全局属性(global attribute)有哪些
**全局属性**是所有 HTML 元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用。

- class:为元素设置类标识
- data-*: 为元素增加自定义属性
- draggable: 设置元素是否可拖拽
- id: 元素id，文档内唯一
- lang: 元素内容的的语言
- style: 行内css样式
- title: 元素相关的建议信息

### 11.Canvas和SVG有什么区别？

- svg绘制出来的每一个图形的元素都是独立的DOM节点，能够方便的绑定事件或用来修改。canvas输出的是一整幅画布
- svg输出的图形是矢量图形，后期可以修改参数来自由放大缩小，不会失真和锯齿。而canvas输出标量画布，就像一张图片一样，放大会失真或者锯齿

### 12.viewport
```javascript
 <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    // width    设置viewport宽度，为一个正整数，或字符串‘device-width’
    // device-width  设备宽度
    // height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置
    // initial-scale    默认缩放比例（初始缩放比例），为一个数字，可以带小数
    // minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
    // maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
    // user-scalable    是否允许手动缩放
```

- 延伸提问
   - 怎样处理 移动端 1px 被 渲染成 2px问题

**局部处理**

- meta标签中的 viewport属性 ，initial-scale 设置为 1
- rem按照设计稿标准走，外加利用transfrome 的scale(0.5) 缩小一倍即可；

**全局处理**

- mate标签中的 viewport属性 ，initial-scale 设置为 0.5
- rem 按照设计稿标准走即可


### <br />13 知道的网页制作会用到的图片格式有哪些？

- png-8、png-24、jpeg、gif、svg

但是上面的那些都不是面试官想要的最后答案。面试官希望听到是Webp,Apng。（是否有关注新技术，新鲜事物）

- **Webp**：WebP格式，谷歌（google）开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有JPEG的2/3，并能节省大量的服务器带宽资源和数据空间。Facebook Ebay等知名网站已经开始测试并使用WebP格式。
- 在质量相同的情况下，WebP格式图像的体积要比JPEG格式图像小40%。
- **Apng**：全称是“Animated Portable Network Graphics”, 是PNG的位图动画扩展，可以实现png格式的动态图片效果。04年诞生，但一直得不到各大浏览器厂商的支持，直到日前得到 iOS safari 8的支持，有望代替GIF成为下一代动态图标准


### 14.js请求有哪些地方会有缓存处理？
dns缓存，cdn缓存，浏览器缓存，服务器缓存

#### 

### 15。请你谈谈Cookie的弊端
cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的

- cookie的个数是有限制的
- 在有些浏览器中cookie会被清理
- cookie的大小有限制
- cookie如果被拦截了，就会被获得所有的session信息

### 16.git fetch和git pull的区别

- git pull：相当于是从远程获取最新版本并merge（合并）到本地
- git fetch：相当于是从远程获取最新版本到本地，不会自动merge（合并）


### 17.src与href的区别
**它们之间的主要区别可以用这样一句话来概括：src用于替代这个元素，而href用于建立这个标签与外部资源之间的关系。**<br />例如：<br />`<a href="www.xxx.com">\<\img src="1.jpg">\</a>`<br />a标签里面的内容是一张图片，a标签加上href属性将图片链接到了[www.xxx.com](https://link.jianshu.com?t=http://www.xxx.com)这个网站，但并未替换a标签里面的内容，而img标签的src属性则是将这个标签完全替换成了src里面的资源

