const { recebeViagem } = require("./model/ViagemDto")

const obj = JSON.parse('{"teste":"2"}')
console.log(obj.teste)

console.log(JSON.parse(JSON.stringify(recebeViagem)))
