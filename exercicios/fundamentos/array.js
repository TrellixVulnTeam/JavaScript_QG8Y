const valores = [1, 3, 5, 7, 9]
console.log(valores[1], valores[3])
valores[5] = 4 //estou adicionando o indice 5 com o valor 4
console.log(valores[1], valores[3])
console.log(valores)
console.log(valores.length)//saber quantos indices tem no vetor
valores.push({id: 3}, false, null, 'teste') //Adicionando itens ao final no vetor
console.log(valores)
console.log(valores.pop()) //removendo o ultimo item
delete valores[1] // deletando o indice 1
console.log(valores)
console.log(typeof valores)