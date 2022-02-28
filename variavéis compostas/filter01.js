const produtos = [
    {nome: 'Notebook', preco: 5490, fragil: true},
    {nome: 'Ipad Pro', preco: 1200, fragil: true},
    {nome: 'Celular', preco: 3543, fragil: true},
    {nome: 'Mesa', preco: 2430, fragil: false},
    {nome: 'Cadeira', preco: 1120, fragil: false}
]
console.log(produtos.filter(function(p){
    return p.fragil == true && p.preco > 3000
}))

console.log(' ')

const caro = produto => produto.preco >= 1000
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))