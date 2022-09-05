function extend(p, c) {
  c = c || {}
  for (let item in p) {
    c[item] = p[item]
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
extend(Person, programer)
programer.name // poetry
programer.address.home // home
programer.address.home = "house" //house
Person.address.home // house
