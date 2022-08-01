Function.prototype.myApply = function (thisArg, argArray) {
  if (typeof this !== "function") {
    throw new  TypeError("类型错误")
  }
  if (this === undefined || this === null) {
    thisArg = window
  }else thisArg=Object(thisArg)
  thisArg.func = this
  let result
  if (argArray && typeof argArray === "object")
    result = thisArg.func(...Array.from(argArray))
  // 此处使用 Array.from 包裹让其支持形如 { length: 1, 0: 1 } 这样的类数组对象，直接对 argsArray 展开将会执行出错
  else result = thisArg.func()
  delete thisArg.func
  return result
}
let arr = [1, 2, 3]
console.log(Object.prototype.toString.myApply(arr))
console.log(Object.prototype.toString.myApply(arr))
