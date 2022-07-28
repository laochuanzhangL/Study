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