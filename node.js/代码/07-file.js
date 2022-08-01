const fs = require("fs")
const path = require("path")

// //readFile
// fs.readFile(path.resolve("test.txt"), "utf-8", (err, data) => {
//   console.log(err)
//   console.log(data)
// })

// //writeFile
// fs.writeFile("test.txt", "hello node.j212s", {
//     mode:438,
//     flag:'r+'
// },(err, data) => {
//   if (!err) {
//     fs.readFile("test.txt", "utf-8", (err, data) => {
//       console.log(err)
//       console.log(data)
//     })
//   }
// })

// //appendFile
// fs.appendFile("test.txt", "hello", (err) => {
//     console.log("写入成功")
// })

//copyFile
// fs.copyFile('test.txt','data.txt',(err)=>{
//     console.log("拷贝")
// })

// //watchFile
// fs.watchFile('test.txt',{interval:20}, (curr,prev)=>{
//     if(curr.mtime!==prev.mtime){
//         console.log("文件修改过")
//         fs.unwatchFile('test.txt')
//     }
// })

// //open与close
// fs.open(path.resolve("test.txt"), "r", (err, fd) => {
//     console.log(fd)
//     fs.close(fd,err=>{
//       console.log('关闭')
//     })
//   })
// const buf=Buffer.alloc(10)
// fs.open("test.txt", "r", (err, rfd) => {
//   fs.read(rfd,buf,1,4,3,(err,readBytes,data)=>{
//     console.log(readBytes)
//     console.log(data)
//     console.log(data.toString())
//   })
// })

// //write
// const buf = Buffer.from("1234567890")
// fs.open("b.txt", "w", (err, wfd) => {
//   fs.write(wfd, buf, 1, 4, 0, (err, written, buffer) => {
//     console.log(written) //写入的长度
//     fs.close(wfd)
//   })
// })

// const buf = Buffer.alloc(100)
// let readOffset = 0
// const len = Buffer.length
// fs.open("b.txt", "r", (err, rfd) => {
//   fs.open("a.txt", "w", (err, wfd) => {
//     function next() {
//       fs.read(rfd, buf, 0, len, readOffset, (err, readBytes) => {
//         if (!readBytes) {
//           fs.close(rfd)
//           fs.close(wfd)
//           console.log("拷贝完成")
//           return
//         }
//         readOffset += readBytes
//         fs.write(wfd, buf, 0, readBytes, (err, written) => {
//           next()
//         })
//       })
//     }
//     next()
//   })
// })
