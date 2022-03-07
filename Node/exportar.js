console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome:'teste'
}
console.log(module.exports )

module.exports = {
    piblico: true
}
//Então sempre que você precisar atribui um novo objeto para ser exportado. Você obrigatoriamente tem que usar móbile ponto exportes.

//se você quiser o objeto que já veio criado desde o início ou no começo do arquivo. Pode usar o this, pode usar os exportes pode usar usando o modulle.exportes