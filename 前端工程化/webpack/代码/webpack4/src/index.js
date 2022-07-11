import _ from "lodash"
import "./style/index.css"
// import moment from 'moment'
function createDomElemete() {
  let dom = document.createElement("div")
  dom.innerHTML = _.join(["123", "hsfa", "messi"])
  dom.classList.add("box")
  return dom
}
let divDom = createDomElemete()

// let time=moment().endOf('day').fromNow();
// console.log(time)
// console.log(DEV);
// console.log(typeof(FLAG))
// console.log(EXPORESSION)

// let xhr=new XMLHttpRequest();
// //访问http://localhost:8080  webpack-dev-server的服务
// xhr.open('GET','/user',true)

// xhr.onload=function(){
//   console.log(xhr.response)
// }
// xhr.send()