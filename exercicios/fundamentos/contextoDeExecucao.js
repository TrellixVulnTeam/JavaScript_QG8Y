let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'Teste'

console.log(global.a)
console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca sem var ou let
abc = 5 //nao faça isso, é errado
console.log(global.abc)