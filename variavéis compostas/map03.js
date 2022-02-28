Array.prototype.map2 = function(callback){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}
const carrinho = [
    '{"nome":"Borracha", "preco": 4.50 }',
    '{"nome":"Caderno", "preco": 15.50 }',
    '{"nome":"Kit de Lapis", "preco": 6.50 }',
    '{"nome":"Caneta", "preco": 3.50 }'
]
//Retornar um array apenas com preços
const paraObetos = json => JSON.parse(json) //Passando as strings para objetos
const apenasPreco = produto =>produto.preco

let resultado = carrinho.map2(paraObetos).map2(apenasPreco)
console.log(resultado)