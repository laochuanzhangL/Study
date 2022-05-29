
## 前端路由实现方式
路由需要实现三个功能：

1. 当浏览器地址变化时，切换页面；
1. 点击浏览器后退，前进按钮，网页内容发生变化；
1. 刷新浏览器，页面加载内容对应当前路由对应的地址；

在单页面web网页中，单纯的浏览器地址改变，网页不会重载，如单纯的hash值改变，网页是不会变化的，因此我们的路由需要监听事件，并利用js实现动态改变网页。

- hash 模式：监听浏览器地址hash值变化，并执行相应的js切换。
- history 模式：利用H5 history API实现url地址改变，网页内容改变。

## hash模式
使用window.location.hash 属性和window.onhashchange事件。可以监听浏览器hash值得变化，去执行相应的js切换网页。
hash路由实现原理：

1. hash 指的是地址中 # 号以及后面的字符。称为散列值。
1. 散列值不会随请求发送到服务器端的，**所以改变hash,不会重新加载界面**。
1. 监听onhashchange事件，hash改变时，可以通过window.location.hash来获取和设置hash值。
1. location.hash值的变化直接反应在浏览器的地址栏。

## history模式
我们使用history首先应该了解`window.history`对象。它表示的是当前窗口的浏览历史，当发生改变时，只会改变路径，不会刷新界面。
History对象就是一个堆栈。
方法：
`History.back`：移动上一个网址，等同于浏览器的后退。
`History.forward`:移动到下一个网址，等同于浏览器前进。
`History.go`:接受一个参数，以当前网页为基准，来进行跳转。默认history.go(0),刷新当前界面。
`history.go`(1) 相当与`history.forward`();
`History.pushState`():往history堆栈中添加一条记录。不会刷新界面，只会导致History对象变化，地址栏发生变化。
`History.replaceState()`:是替换当前history堆栈中最上层的记录。也是不会刷新界面，只会是Histoty对象变化，地址栏发生变化。
每当history对象发生变化，就会触发popstate事件： `window.addEventListener("popstate",function(){})`
只调用`pushState`或者`replaceState`是不会触发改事件的，只有调用`back,forward,go`才会触发该事件。
至此我们也能想到`BrowserHisory`是怎么利用History的API来实现url改变，网页内容发生改变。

## 区别
**底层原理不一样：**
BrowserRouter调用的是H5 history API,低版本兼容性问题。
HashRouter 使用的是URL哈希值
**地址栏表现形式不一样：**
BrowserRouter的路径：localhost:3000/demo/a
HashRouter的路径：localhost:3000/#/demo/a
**刷新后对路由state参数的影响**
BrowserRouter没有任何影响，因为state保存在history对象中。
HashRouter刷新后会导致路由state参数的丢失！！！
官方会更推荐使用browserRouter，貌似是因为其构建于H5的History API，比起hashRouter，它多出了更多的方法操控url。
