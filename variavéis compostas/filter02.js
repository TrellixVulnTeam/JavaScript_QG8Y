Array.prototype.filter2 = function(callback){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    {nome: 'Notebook', preco: 5490, fragil: true},
    {nome: 'Ipad Pro', preco: 1200, fragil: true},
    {nome: 'Celular', preco: 3543, fragil: true},
    {nome: 'Mesa', preco: 2430, fragil: false},
    {nome: 'Cadeira', preco: 1120, fragil: false}
]
 
const caro = produto => produto.preco >= 1000
const fragil = produto => produto.fragil
console.log(produtos.filter2(caro).filter2(fragil))