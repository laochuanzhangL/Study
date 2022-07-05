import _ from "lodash"
import "./style/index.css"
import "./style/index.scss"
function createDomElemete() {
  let dom = document.createElement("div")
  dom.innerHTML = _.join(["123", "hsfa", "messi"])
  dom.classList.add("box")
  return dom
}
let divDom = createDomElemete()

document.body.appendChild(divDom)
