const produtos = [
    {nome: 'Notebook', preco: 5490, fragil: true},
    {nome: 'Ipad Pro', preco: 1200, fragil: true},
    {nome: 'Celular', preco: 3543, fragil: true},
    {nome: 'Mesa', preco: 2430, fragil: false},
    {nome: 'Cadeira', preco: 1120, fragil: false}
]

//console.log(produtos.map(p => p.preco))
const resultado = produtos.map(p => p.preco).reduce(function
    (acumulador, atual){
        
        return acumulador + atual
        
}, 0)
console.log(resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
)


