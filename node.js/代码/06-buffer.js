//创建6个子节的buffer
// let buf=Buffer.alloc(6)

// //fill
// buf.fill(102)
// console.log(buf)
// console.log(buf.toString())
// {/* <Buffer 31 32 33 31 32 33>
// 123123 */}

// //write
// buf.write('123',1,4)
// console.log(buf)
// console.log(buf.toString())

// {/* <Buffer 00 31 32 33 00 00>
// 123 */}

// //toString
// buf =Buffer.from('巴塞罗那')
// console.log(buf)
// console.log(buf.toString('utf-8',3,6))

// {/* <Buffer e5 b7 b4 e5 a1 9e e7 bd 97 e9 82 a3>
// 塞 */}

// //slice
// buf =Buffer.from('巴塞罗那')
// let b1=buf.slice(3,9)
// console.log(b1)
// console.log(b1.toString())
// {/* <Buffer e5 a1 9e e7 bd 97>
// 塞罗 */}

// //indexOf
// let buf =Buffer.from('巴塞罗那，巴萨竞技，巴西')
// console.log(buf)
// console.log(buf.indexOf('巴',5))//15

// console.log(buf.indexOf('2巴',5))//-1

// //copy
// let b1=Buffer.alloc(6)
// let b2=Buffer.from('梅西')

// b2.copy(b1,1,3,6)
// console.log(b1.toString())//梅西
// console.log(b2.toString())//梅西


// //concat
// let b1=Buffer.from('巴萨')
// let b2=Buffer.from('梅西')

// let b=Buffer.concat([b1,b2],9)
// console.log(b)
// console.log(b.toString())//巴萨梅

// let b1=Buffer.alloc(3)
// console.log(Buffer.isBuffer(b1))//true
// console.log(Buffer.isBuffer(123))//false