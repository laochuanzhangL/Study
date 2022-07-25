//1.资源 cpu 内存
// console.log(process.memoryUsage())
// {
//     rss: 20320256,//当前常驻内存
//     heapTotal: 4476928,//脚本申请内存大小
//     heapUsed: 2703072,//脚本使用内存大小
//     external: 889742,//表示底层 C++代码占用的内存
//     arrayBuffers: 9898//独立空间大小不占用V8的内存，缓冲区大小
// }

// console.log(process.cpuUsage())
//{ user: 46000, system: 15000 }用户和操作系统占用的时间片段

//2 运行环境、node环境、cpu架构、用户环境、系统平台

// console.log(process.cwd())//当前工作目录
// console.log(process.version)//Node版本
// console.log(process.versions)//V8 libuv等的版本版本
// console.log(process.arch)//电脑的操作系统
// console.log(process.env)//包含生存环境
// console.log(process.env.PATH)//环境变量
// console.log(process.env.USERPROFILE)//本机管理员目录
// console.log(process.platform)

//运行状态：启动参数、PID、运行时间
// console.log(process.argv)
// [
//     'D:\\node\\node.exe',//启动的node
//     'E:\\前端学习笔记\\node.js\\代码\\05-process.js',//文件所在路径
//     '1',//启动时传入的参数
//     '2'//启动时传入的参数
//   ]

// console.log(process.pid)//进程ID

// console.log(process.uptime())//运行的时间

// 4 事件监听

// process.on('beforeExit',(code)=>{
//     console.log('before exit'+code)
// })
// process.exit()//关闭进程 后序所有代码不会执行
// //在此处时也不会有输出值 因为exit事件没有注册
// //不会执行before 因为是主动退出，并没有按照流程走
// process.on('exit',(code)=>{
//     console.log('exit'+code)
// })//回调只能有同步代码。不能有异步代码

// console.log("代码执行完了")
// // 代码执行完了
// // before exit0
// // exit0

// 5 标准输入 输出 错误
// console.log=function(data){
//     process.stdout.write('---'+data+'\n')//一个流stream
// }
// console.log(12)

// const fs = require("fs")

// //创造可读流读出test.txt，然后通过pipe(管道)流向标准输出
// fs.createReadStream("test.txt").pipe(process.stdout)

// process.stdin.pipe(process.stdout)//输入流流向输出


// 可以用来监听写入事件
// process.stdin.setEncoding('utf-8')
// process.stdin.on('readable',()=>{
//     let chunk=process.stdin.read()
//     if(chunk!==null){
//         process.stdout.write(chunk)
//     }
// })

