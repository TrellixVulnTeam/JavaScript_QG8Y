const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')// adiciona o ultimo elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento no indice 0
console.log(pilotos)

//splice pode adicionar e remover elementos
//adicionar:
pilotos.splice(2, 0, 'Bottas', 'Massa')//Eu selecionei o indice 2, nao removi ninguém e adicionei 2 elementos antes dele
console.log(pilotos)

//remover:
pilotos.splice(3, 1) //Escolhi o indice 3 e o removi
console.log(pilotos)
//slice:
console.log('Novo array:')
const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice 2 de pilotos
console.log(algunsPilotos1)

console.log('Novo Array:')
const algunsPilotos2 = pilotos.slice(1, 4)//novo array a partir do indice 1 até o indice 4(mas nao pega o indice 4)
console.log(algunsPilotos2)