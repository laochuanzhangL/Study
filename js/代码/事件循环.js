// console.log("script start") //1

// async function async1() {
//   await async2()
//   console.log("async1 end")
// }
// async function async2() {
//   console.log("async2 end")
// }
// async1()

// setTimeout(function () {
//   console.log("setTimeout")
// }, 0)

// new Promise((resolve) => {
//   console.log("Promise")
//   resolve()
// })
//   .then(function () {
//     console.log("promise1")
//   })
//   .then(function () {
//     console.log("promise2")
//   })

// console.log("script end")

// setTimeout(() => {
//   console.log("s1") //2
//   Promise.resolve().then(() => {
//     console.log("p1") //3
//   })
//   Promise.reject().catch(() => {
//     console.log("p2") //4
//   })
// })
// setTimeout(() => {
//   console.log("s2") //5
//   Promise.resolve().then(() => {
//     console.log("p3") //6
//   })
//   Promise.reject().catch(() => {
//     console.log("p4") //7
//   })
// })
// Promise.resolve().then(() => {
//   console.log("p3") //1
// })

// setTimeout(() => {
//   console.log("s1")
//   Promise.resolve().then(() => {
//     console.log("p1")
//   })
//   Promise.reject().catch(() => {
//     console.log("p2")
//   })
// })

// Promise.resolve.then(()=>{
//     console.log('p1')
//     setTimeout(()=>{
//         console.log('s2')
//     })
//     setTimeout(()=>{
//         console.log('s3')
//     })
// })

// setTimeout(()=>{
//     console.log('s1')
// })
// Promise.resolve().then(()=>{
//     console.log('p1')
// })

// console.log('start')

// process.nextTick(()=>{
//     console.log('tick')
// })

// setImmediate(()=>{
//     console.log('setImmediate')
// })
// console.log('end')

setTimeout(() => {
  console.log("s1")//4
  Promise.resolve().then(() => {
    console.log("p1")//6
  })
  process.nextTick(() => {
    console.log("t1")//5
  })
})

Promise.resolve().then(() => {
  console.log("p2")//3
})

console.log('start')//1

setTimeout(() => {
  console.log("s2")//7
  Promise.resolve().then(() => {
    console.log("p3")//9
  })
  process.nextTick(() => {
    console.log("t2")//8
  })
})

console.log('end')//2






var MyCircularQueue = function(k) {
    this.capacity = k + 1;
    this.elements = new Array(this.capacity).fill(0);
    this.rear = 0;
    this.front = 0;
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }
    this.elements[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.front = (this.front + 1) % this.capacity;
    return true;
};

MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.elements[this.front];
};

MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.elements[(this.rear - 1 + this.capacity) % this.capacity];
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.rear == this.front;
};

MyCircularQueue.prototype.isFull = function() {
    return ((this.rear + 1) % this.capacity) === this.front;
};

