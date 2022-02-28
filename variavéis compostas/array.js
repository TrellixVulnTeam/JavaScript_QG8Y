console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('Bia', 'Carla', 'Ana') //essa é uma forma não tão recomendada para se criar um array
console.log(aprovados)
aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//undefined

aprovados[3] = 'paulo' //Aqui está adicionando, mas tbm serve para substítuir um elemento ja existente
aprovados.push('maria') //Adicionando no fim
console.log(aprovados.length)

aprovados[9] = 'rafael' //Como o ultimo elemento adicionado tinha o indice 4, dele até o indice 9, serão considerados undefined até que sejam substítuidos. Dessa forma, temos 10 elementos nesse array
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
aprovados[7] = 'miguel'
console.log(aprovados)
aprovados.sort() //essa funçao vai ordenar todos os elementos em ordem alfabética ou numérica
console.log('Depois da função sort')
console.log(aprovados)
delete aprovados[1] //vai deletar o indice 1, mas nao vai realocar o indice 2 no lugar do 1, ele vai dar o indice 1 como undefined
console.log(aprovados[1]) 
console.log(aprovados[2]) 

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Element1', 'Element2')/*serve para adicionar elementos em um determinado indice, remover elementos de um array. Como também serve para adicionar e remover elementos ao mesmo tempo */

//nesse caso ai, eu escolhi o indice 1, exclui ele e seu sucessor e adicionei mais dois elementos no lugar
console.log(aprovados)