/*o hoisting é o processo de mover as declarações para o topo. Que topo? o topo do escopo. ... Se analisarmos sem muito esforço já dá pra ver que ele declara nossas variáveis no início do escopo e, no nosso, caso quando o log do console vai ser printado ele está undefined ainda.*/
console.log(`a = ${a}`)
var a = 2
console.log(`a = ${a}`)

console.log(`b = ${b}`)
let b = 2
console.log(`b = ${b}`)