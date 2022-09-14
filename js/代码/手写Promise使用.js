const MyPromise = require("./手写Promise")

//同步
// const promise = new MyPromise((resolve, reject) => {
//   resolve("success")
//   reject("err")
// })

//异步
// const promise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success")
//   }, 1000)
// })
// promise.then((value) => {
//   console.log(1)
//   console.log("resolve", value)
// })

// promise.then((value) => {
//   console.log(2)
//   console.log("resolve", value)
// })

// promise.then((value) => {
//   console.log(3)
//   console.log("resolve", value)
// })

// const promise = new MyPromise((resolve, reject) => {
//   // 目前这里只处理同步的问题
//   resolve("success")
// })

// function other() {
//   return new MyPromise((resolve, reject) => {
//     resolve("other")
//   })
// }
// promise
//   .then((value) => {
//     console.log(1)
//     console.log("resolve", value)
//     return other()
//   })
//   .then((value) => {
//     console.log(2)
//     console.log("resolve", value)
//   })
// const p1 = promise.then((value) => {
//   console.log(1)
//   console.log("resolve", value)
//   return p1
// })

// // 运行的时候会走reject
// p1.then(
//   (value) => {
//     console.log(2)
//     console.log("resolve", value)
//   },
//   (reason) => {
//     console.log(3)
//     console.log(reason.message)
//   }
// )

// const promise = new MyPromise((resolve, reject) => {
//   resolve("success")
//   // throw new Error('执行器错误')
// })

// // 第一个then方法中的错误要在第二个then方法中捕获到
// promise
//   .then(
//     (value) => {
//       console.log(1)
//       console.log("resolve", value)
//       throw new Error("then error")
//     },
//     (reason) => {
//       console.log(2)
//       console.log(reason.message)
//     }
//   )
//   .then(
//     (value) => {
//       console.log(3)
//       console.log(value)
//     },
//     (reason) => {
//       console.log(4)
//       console.log(reason.message)
//     }
//   )
// test.js

MyPromise.resolve().then(() => {
    console.log(0);
    return MyPromise.resolve(4);
}).then((res) => {
    console.log(res)
})

