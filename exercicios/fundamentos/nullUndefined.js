let valor // não inicializada
console.log(valor) /*O resultado é undefined pois a variavel não contem nenhum valor por nao ser inicializada*/

valor = null /*null significa dizer que ela nao tem nenhum valor primitivo e tambem nao esta apontando para nenhum endereço de memoria*/
console.log(valor)

const produto = {}
console.log(produto.preco) // vai ser undefined pois o preco nao esta definido dentro do produto
console.log(produto)
produto.preco = 4.56
console.log(produto)

produto.preco = undefined // evitar usar undefined. Ao inves disso, recomenda-se usar a funcao delete
console.log(produto)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(produto)

