![image.png](https://cdn.nlark.com/yuque/0/2022/png/2976158/1658323278049-ee019202-2336-464d-ac2e-03619fa9a6e0.png#clientId=u5d51032f-cc80-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=407&id=u1e444e7e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=509&originWidth=1387&originalType=binary&ratio=1&rotation=0&showTitle=false&size=126112&status=done&style=none&taskId=u59fbc66d-fd54-4ab3-ac7c-64568ae6b9b&title=&width=1109.6)

IO操作时计算机操作过程中最缓慢的环节，如果有需要长时间的IO操作行为，那么后序的操作就无法得到及时的响应。
如果使用多进程的方法来解决此类问题，当有很多IO操作行为出现时，无法分出足够的进程进行响应，那么就会出现IO操作没有响应的情况，而进程被占用时间大多都是在等待IO操作完毕，所以可以让进程在等待IO操作完成的途中去进行其他IO操作的响应这就是 Reactor模式（应答者模式）就达到了单线程完成多线程以及非阻塞工作。

nodejs 就是基于Reactor模式,以及js语言本身的单进程，事件驱动的架构以及异步编程等特性实现单线程远离阻塞，通过异步非阻塞IO更好的利用CPU资源
