const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }
  status = PENDING
  reason = null
  value = null
  // 存储成功回调函数
  onFulfilledCallbacks = []
  // 存储失败回调函数
  onRejectedCallbacks = []
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason)
      }
    }
  }
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(value)
      }
    }
  }
  static reject = (reason) => {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }
  static resolve = (param) => {
    if (param instanceof MyPromise) {
      return param
    }
    return new MyPromise((resolve, reject) => {
      resolve(param)
    })
  }
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason
          }
    const promise = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 创建一个微任务等待 promise2 完成初始化
        queueMicrotask(() => {
          // 获取成功回调函数的执行结果
          try {
            const x = onFulfilled(this.value)
            // 传入 resolvePromise 集中处理
            resolvePromise(promise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.status === REJECTED) {
        queueMicrotask(() => {
          // 获取成功回调函数的执行结果
          try {
            const x = onRejected(this.reason)
            resolvePromise(promise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            // 获取成功回调函数的执行结果
            try {
              const x = onFulfilled(this.value)
              // 传入 resolvePromise 集中处理
              resolvePromise(promise, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            // 获取成功回调函数的执行结果
            try {
              const x = onRejected(this.reason)
              resolvePromise(promise, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
      }
    })
    return promise
  }
  // catch(onRejected) {
  //   if (this.status === PENDING) {
  //     this.onRejectedCallbacks.push(onRejected)
  //   } else if (this.status === REJECTED) {
  //     onRejected(this.reason)
  //   }
  // }
}
function resolvePromise(promise, x, resolve, reject) {
  if (x === promise) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    )
  } else {
    // 判断x是不是 MyPromise 实例对象
    if (x instanceof MyPromise) {
      // 执行 x，调用 then 方法，目的是将其状态变为 fulfilled 或者 rejected
      // x.then(value => resolve(value), reason => reject(reason))
      // 简化之后
      x.then(resolve, reject)
    } else {
      // 普通值
      resolve(x)
    }
  }
}

module.exports = MyPromise
