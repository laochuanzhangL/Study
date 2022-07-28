// let a=[1,3,4]
// function f(arr){
//   arr[0]=1000
//   arr=[4,6,8]
//   return arr
// }
// let b=f(a)
// console.log(a)
// console.log(b)

// let arr=[1,2,3]
// console.log(arr.constructor)

// function Fn() {}

// Fn.prototype = new Array()

// var f = new Fn()

// console.log(f.constructor === Fn) // false
// console.log(f.constructor === Array) // true

let arr=[1,2,3]
console.log(arr.constructor==Array)
console.log(arr.constructor==arr.__proto__.constructor)
