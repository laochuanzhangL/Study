### async 函数
- 一个语法糖 是异步操作更简单
- 返回值 返回值是一个 promise 对象
   - return 的值是 promise resolved 时候的 value
   - Throw 的值是 Promise rejected 时候的 reason
```c
async function test() {
  return true
}
const p = test()
console.log(p) // 打印出一个promise，状态是resolved，value是true

//  Promise {<fulfilled>: true}
//   [[Prototype]]: Promise
//   [[PromiseState]]: "fulfilled"
//   [[PromiseResult]]: true

p.then((data) => {
  console.log(data) // true
})

```

```c
async function test() {
  throw new Error('error')
}
const p = test()
console.log(p) // 打印出一个promise，状态是rejected，value是error
p.then((data) => {
  console.log(data) //打印出的promise的reason 是error
})
```
### await 函数

- 只能出现在 async 函数内部或最外层
- 等待一个 promise 对象的值
- await 的 promise 的状态为 rejected，后续执行中断

await 可以 await promise 和非 promsie，如果非 primse，例如：await 1 就返回 1

![](https://cdn.nlark.com/yuque/0/2022/webp/2976158/1657074829694-4d4af52e-4242-471d-b504-671fbc191b81.webp#clientId=ufda96a44-9224-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u181c81c0&margin=%5Bobject%20Object%5D&originHeight=648&originWidth=2620&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u21d287db-8487-4d1b-8f2a-d3af7060ea6&title=)

await 为等待 promise 的状态是 resolved 的情况
```c
async function async1() {
  console.log('async1 start')
  await async2() // await为等待promise的状态，然后把值拿到
  console.log('async1 end')
}
async function async2() {
  return Promsie.resolve().then(_ => {
    console.log('async2 promise')
  })
}
async1()
/*
打印结果
async1 start
async2 promise
async1 end
*/
```
await 为等待 promise 的状态是 rejected 的情况
```c
async function f() {
  await Promise.reject('error')
  //后续代码不会执行
  console.log(1)
  await 100
}

// 解决方案1
async function f() {
  await Promise.reject('error').catch(err => {
    // 异常处理
  })
  console.log(1)
  await 100
}

// 解决方案2
async function f() {
  try {
    await Promise.reject('error')
  } catch (e) {
    // 异常处理
  } finally {
  }
  console.log(1)
  await 100
}

```
### async 函数实现原理
实现原理：Generator+自动执行器
async 函数是 Generator 和 Promise 的语法糖
