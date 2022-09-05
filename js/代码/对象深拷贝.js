function deepExtend(p, c) {
  c = c || {}
  for (let prop in p) {
    if (typeof p[prop] === "object") {
      c[prop] = p[prop].constructor === Array ? [] : {}
      deepExtend(p[prop], c[prop])
    } else {
      c[prop] = p[prop]
    }
  }
}
var Person = {
  name: "poetry",
  age: 18,
  address: {
    home: "home",
    office: "office",
  },
  sclools: ["x", "z"],
}

var programer = {
  language: "js",
}
deepExtend(Person, programer)
programer.address.home = "poetry"
console.log(Person.address.home)
// Person.address.home // home
