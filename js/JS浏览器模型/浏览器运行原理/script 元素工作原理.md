
## script 元素工作原理

浏览器加载 JavaScript 脚本，主要通过`<script>`元素完成。正常的网页加载流程是这样的。

1. 浏览器一边下载 HTML 网页，一边开始解析。也就是说，不等到下载完，就开始解析。
1. 解析过程中，浏览器发现`<script>`元素，就暂停解析，把网页渲染的控制权转交给 JavaScript 引擎。
1. 如果`<script>`元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
1. JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。


### script 标签放在页面底部的原因

**加载外部脚本时，浏览器会暂停页面渲染，等待脚本下载并执行完成后，再继续渲染**。（原因是 JavaScript 代码可以修改 DOM，所以必须把控制权让给它，否则会导致复杂的线程竞赛的问题）。

**如果外部脚本加载时间过长，那么浏览器就会一直等待脚本下载完成，就会造成网页长时间失去响应**，为了避免此情况，较好的做法是将`<script>`标签都放在页面底部。这样即使遇到脚本失去响应，网页主体的渲染也已经完成。

脚本文件都放在网页尾部加载，还有一个好处。**因为在 DOM 结构生成之前就调用 DOM 节点，JavaScript 会报错**，如果脚本都在网页尾部加载，就不存在这个问题，因为这时 DOM 肯定已经生成了。


### defer 属性

为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对`<script>`元素加入`defer`属性。它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。

```javascript
<script src="a.js" defer></script>
```

上面代码中，只有等到 DOM 加载完成后，才会执行`a.js`和`b.js`。

`defer`属性的运行流程如下。

1. 浏览器开始解析 HTML 网页。
1. 解析过程中，发现带有`defer`属性的`<script>`元素。
1. 浏览器继续往下解析 HTML 网页，同时并行下载`<script>`元素加载的外部脚本。
1. 浏览器完成解析 HTML 网页，此时再回过头执行已经下载完成的脚本。


### async 属性

解决“阻塞效应”的另一个方法是对`<script>`元素加入`async`属性。

```javascript
<script src="a.js" async></script>
<script src="b.js" async></script>
```

`async`属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。

1. 浏览器开始解析 HTML 网页。
1. 解析过程中，发现带有`async`属性的`script`标签。
1. 浏览器继续往下解析 HTML 网页，同时并行下载`<script>`标签中的外部脚本。
1. 脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。
1. 脚本执行完毕，浏览器恢复解析 HTML 网页。

`async`属性可以保证脚本下载的同时，浏览器继续渲染。需要注意的是，一旦采用这个属性，就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本。另外，使用`async`属性的脚本文件里面的代码，不应该使用`document.write`方法。

`defer`属性和`async`属性到底应该使用哪一个？

一般来说，如果脚本之间没有依赖关系，就使用`async`属性，如果脚本之间有依赖关系，就使用`defer`属性。如果同时使用`async`和`defer`属性，后者不起作用，浏览器行为由`async`属性决定。
