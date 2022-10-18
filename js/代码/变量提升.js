function a() {
  console.log(123)
}
var a = 123
let arr = [1, 2, 3]
console.log(arr.constructor == Array) //true
console.log(arr.constructor == arr.__proto__.constructor) //true

