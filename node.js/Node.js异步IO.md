# 为什么需要异步IO
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2976158/1658324520096-6f8b0ec6-713f-4d8c-952c-9311fd8844c2.png#clientId=u17d8be8b-5ca5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=558&id=uf0cfda7b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=697&originWidth=1216&originalType=binary&ratio=1&rotation=0&showTitle=false&size=124625&status=done&style=none&taskId=u6db33358-9d99-497d-a30b-6f9ab6249d1&title=&width=972.8)
同步执行任务的时间为 t1+t2
而异步执行任务的时间一定会小于 t1+t2SS
非阻塞IO：IO操作在进程响应之后开始工作，此时CPU的时间片可以拿出来去进行其他IO操作的响应，那么立刻返回的并不是业务层所需要的数据，而是当前的调用状态。而为了能返回需要的数据就会有引用程序对IO操作进行轮询来判断IO操作是否以及工作完成，在代码层面依旧是同步的效果
而我们需要的无须主动判断的非阻塞IO，也就是说在IO操作被进程响应之后，进程就去响应其他的IO操作，而当IO操作工作完成后，就会发出某种信号让进程来将响应的数据传回

# libuv
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2976158/1658325828067-7fd752a6-fdbf-4967-b906-fe666f1dd8ef.png#clientId=u1dace543-e321-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=543&id=azR3y&margin=%5Bobject%20Object%5D&name=image.png&originHeight=679&originWidth=1472&originalType=binary&ratio=1&rotation=0&showTitle=false&size=240972&status=done&style=none&taskId=ubf3a983a-e218-4204-bff1-76308ab909b&title=&width=1177.6)
代码运行后，会进入libuv·，会对当前环运行环境进行判断 ，然后调用对用的异步IO库


# 异步IO的实现
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2976158/1658325937815-4215223f-c7bc-4c45-b162-b0739261505a.png#clientId=u1dace543-e321-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=627&id=uc85eccd8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=784&originWidth=1475&originalType=binary&ratio=1&rotation=0&showTitle=false&size=269050&status=done&style=none&taskId=u08592138-ed38-4487-bd3b-4ced12d4f3b&title=&width=1180)
IO操作：当libuv接受到异步操作的请求后，多路分解器就会开始工作，会找到当前平台可用的IO接口，然后等待IO操作结束后，将任务添加到事件队列当中，在这个过程中事件循环是一直工作的，在之后会依据相应的顺序在事件队列中取出事件，并且交给主线程执行
事件驱动在上述过程中是有人发布了事件，订阅这个事件的人在接受到具体的消息发布之后就会执行订阅时所注册的应用程序
# 总结

1. IO是任何引用程序的瓶颈所在（十分消耗时间）
1. 采用异步IO可以提高性能，无需原地等待结果返回
1. IO操作在操作系统级别上是有对应解决的，libuv库是对这些方法进行封装，做到跨平台的效果
1. Nodejs单线程配合事件驱动架构及libuv实现了异步IO



