/*O map serve para mapear os elementos de um array para outro só que com os dados transformados. Por exemplo: Se você tem um array com 3 elementos 1, 2, 3 e quer transformar eles em seu dobro, o map vai fazer outro array com o dobro deles */

const nuns = [1, 2, 3, 4, 5]
//For com propósito
let resultado = nuns.map(function(e){
    return e * 2
})
console.log(resultado)

const mult10 = e => e * 10
const triplo = e => e * 3
const paraDinhiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nuns.map(mult10).map(triplo).map(paraDinhiro)
console.log(' ')
console.log(resultado)