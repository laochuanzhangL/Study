function create(fn, ...args) {
  let obj = {}
  obj = Object.create(fn.prototype)
  let res = fn.apply(obj, args)
  return res instanceof Object ? res : obj
}
function Person(name) {
  this.name = name
}
const person1 = new Person("lucas")

// 使用手写的new，即create
const person2 = create(Person, 223)

console.log(person1.name)//lucas
console.log(person2.name)//223
