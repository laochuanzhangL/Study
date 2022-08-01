Function.prototype.myBind = function (thisArg, ...argsArray) {
  if (typeof this !== "function") throw new TypeError()
  let self = this
  let args = [...Array.from(argsArray)]
  return function () {
    return self.apply(thisArg, args)
  }
}
function test(a, b, c) {
  console.log(a, b, c)
  console.log(this)
  return "123"
}
const result = test(1, 23, 4)
const bound = test.myBind({ name: "fenfe" }, 6, 43, 45)
const boundResykt = bound()
console.log(result)
console.log(boundResykt)
