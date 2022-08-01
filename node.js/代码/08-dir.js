const fs = require("fs")

//access
// fs.access("a.txt", (err) => {
//   if (err) console.log(err)
//   else console.log("有权限")
// })

// //stat
// fs.stat('a.txt',(err,statObj)=>{
//     console.log(statObj.size)
//     console.log(statObj.isFile())
//     console.log(statObj.isDirectory())
// })

// //mkdir
// fs.mkdir("a/b/c",{recursive:true}, (err) => {
//   if (!err) console.log("创建成功")
//   else console.log(err)
// })

//rmdir
// fs.rmdir("a", { recursive: true }, (err) => {
//   if (!err) console.log("删除成功")
//   else console.log(err)
// })

//readdir
// fs.readdir("a/b", (err, file) => {
//   console.log(file)
// })

// fs.unlink("a.txt", (err) => {
//   if (!err) console.log("删除成功")
//   console.log(err)
// })        
