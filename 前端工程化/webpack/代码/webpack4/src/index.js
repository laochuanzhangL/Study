import _ from "lodash"
import "./style/index.css"
import $ from "jquery"
function createDomElemete() {
  let dom = document.createElement("div")
  dom.innerHTML = _.join(["123", "hsfa", "messi"])
  dom.classList.add("box")
  return dom
}
let divDom = createDomElemete()
import { a } from "@/b"
document.body.appendChild(divDom)

class Temp {
  show() {
    console.log("this.Age :", this.Age)
  }
  get Age() {
    return this._age
  }
  set Age(val) {
    this._age = val + 1
  }
}
console.log($)
console.log(a)
let t = new Temp()
t.Age = 19

t.show()
