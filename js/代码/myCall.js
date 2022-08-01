Function.prototype.myCall = function (thisArg, ...argArray) {
  if (!this instanceof Function) {
    throw new  TypeError("传入参数非函数")
  }
  if (thisArg === undefined || thisArg === null) {
    thisArg = window
  } else thisArg = Object(thisArg)
  thisArg.func = this
  let result
  if (argArray.length) result = thisArg.func(...argArray)
  else result = thisArg.func()
  delete thisArg.func
  return result
}
let arr = [12]
console.log(Object.prototype.toString.call(arr))
console.log(Object.prototype.toString.myCall(arr))
