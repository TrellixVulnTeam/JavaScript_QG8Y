function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('carro', 28939.45))
console.log(criarProduto('Notebook', 3009.90))
console.log(criarProduto('Celular', 1939.23))