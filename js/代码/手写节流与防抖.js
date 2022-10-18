var myThrrottle = (fn, delay) => {
  var preTime = Data.now()
  return function () {
    let nowTime = Data.now()
    if (nowTime - preTime >= delay) {
      preTime = Data.now()
      return fn.apply(this, arguments)
    }
  }
}

var myDebance = (fn, wait) => {
  var timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}
