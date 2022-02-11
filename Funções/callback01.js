/*A ideia do callback é passar uma função para outra função, e quando um determinado evento acontecer, essa função que foi passada, é disparada e chamada de volta. essa função callback pode ser dispadada uma ou mais vezes*/

const fabricante =['Mercedes', 'Audi', 'BMW', 'Fiat']
function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricante.forEach(imprimir) /*O forEach é uma função de fabricantes e fabricantes é um arrey. Então, pra cada elemento do array ele chama a função imprimir. Fazendo isso, o forEach vai passar como parâmetro o nome e o indice do elemento que ele esta procurando*/

console.log('Outro exemplo')
fabricante.forEach(function(fabricante){
    console.log(fabricante)
})

console.log('Outro exemplo')
fabricante.forEach(fabricante => console.log(fabricante))

/*O evento que aconteceu nessas funçoes foi o loop em que ao encontrar um novo elemento no array, a função callback disparava passando o nome do elemento e o indice */