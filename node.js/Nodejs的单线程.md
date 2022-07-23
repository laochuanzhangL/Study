所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。Node 单线程指的是 Node 在执行程序代码时，**主线程是单线程**。
# 单线程如何实现高并发
**异步非阻塞IO配合事件回调通知**
当多个请求执行时是不用阻塞的，会由上向下去执行，然后等待libuv库完成工作后根据顺序通知响应的事件回调，去触发执行回调
而在libuv存在一个线程池（下图右侧）
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2976158/1658561005121-7ebe9220-37c6-4577-890e-b356e602ac98.png#clientId=u1e70b1a5-7073-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=532&id=u2cc66946&margin=%5Bobject%20Object%5D&name=image.png&originHeight=665&originWidth=1473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=239663&status=done&style=none&taskId=uc3e4f2a5-2cdb-4900-bef2-d31b8c15855&title=&width=1178.4)

单线程不能用来处理CPU高密集型的服务
```javascript
const http=require('http')

function sleepTime(time){
    const sleep=Date.now()+time*1000
    while(Date.now()<sleep){}
    return 
}
sleepTime(4)//用来模拟CPU高密集型服务
const server=http.createServer((req,res)=>{
    res.end('server starting......')
})

server.listen(8080,()=>{
    console.log('服务启动了')
})
```

1. 虽然nodejs是单线程，但是可以实现高并发请求
1. nodejs主线程是单线程，V8中的主线程用来执行代码为单线程，所有的网络请求或者异步任务都交给了内部的线程池去实现，本身只负责不断的往返调度，由事件循环不断驱动事件执行。
1. 不能处理CPU高密集型的服务，上述代码中因为sleepTime的占用，后序代码就无法运行
