const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve timer")
    console.log("timer1")
  }, 0)
  resolve("resolve1")
  resolve("resolve2")
  
})
  .then((res) => {
    console.log(res)
    setTimeout(() => {
      console.log("timer2")
    }, 1000)
  })
  .finally(() => {
    console.log("finally")
  })
