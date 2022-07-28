const EventEmitter = require("events")

const myEvent = new EventEmitter()

myEvent.on("事件", () => {
  console.log("事件第一次执行")
})

myEvent.on("事件", () => {
  console.log("事件第二次执行")
})

myEvent.emit("事件")
