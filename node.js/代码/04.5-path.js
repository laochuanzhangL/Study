const fs = require("fs")
const path = require("path")

//获取路径中的基本名称
// console.log(__filename)//E:\前端学习笔记\node.js\代码\04.5-path.js
// console.log(path.basename(__filename))//04.5-path.js
// console.log(path.basename(__filename,'.js'))//04.5-path
// console.log(path.basename(__filename,'.css'))//04.5-path.js
// console.log(path.basename('/a/b/c'))//c
// console.log(path.basename('/a/b/c/'))//c

//获取路径中目录名称
// console.log(path.dirname(__filename))
// console.log(path.dirname('/a/b/c'))
// console.log(path.dirname('/a/b/c/'))

// //获取路径中扩展名称
// console.log(path.extname(__filename))//.js
// console.log(path.extname('/a/b'))//空
// console.log(path.extname('/a/b/index.html.js.css'))//css
// console.log(path.extname('/a/b/index.html.js.'))//.

//解析路径
// let obj = path.parse("./a/b/c")
// console.log(obj)
// {
//     root: '/', //根路径
//     dir: '/a/b/c',//文件目录的路径
//     base: 'index.html',//文件名称+后缀
//     ext: '.html',//后缀
//     name: 'index'//文件名称
// }

//序列化路径
// const obj = path.parse("./a/b/c")
// console.log(path.format(obj))

//判断当前路径是否为绝对路径
// console.log(path.isAbsolute('./a'))
// console.log(path.isAbsolute('/a'))
// console.log(path.isAbsolute('////a'))

// console.log(path.join('a/b','c','index.html'))//a\b\c\index.html
// console.log(path.join('/a/b','c','index.html'))//\a\b\c\index.html
// console.log(path.join('/a/b','c','../','index.html'))//\a\b\index.html
// console.log(path.join(''))//.

// console.log(path.normalize(''))
// console.log(path.normalize('a/b/c/d'))
// console.log(path.normalize('a///b/c../d'))
// console.log(path.normalize('a//\b/\\c../d'))

//resolve
// console.log(path.resolve())//E:\前端学习笔记\node.js\代码
// console.log(path.resolve('a','b'))//E:\前端学习笔记\node.js\代码\a\b
// console.log(path.resolve('a','/b'))//E:\b
// console.log(path.resolve('/a','b'))//E:\a\b
// console.log(path.resolve('/a','/b'))//E:\b
// //常用
// console.log(path.resolve('index.js'))//E:\前端学习笔记\node.js\代码\index.js

fs.open(path.resolve("test.txt"), "r", (err, fd) => {
  console.log(fd)
  fs.close(fd,err=>{
    console.log('关闭')
  })
})

