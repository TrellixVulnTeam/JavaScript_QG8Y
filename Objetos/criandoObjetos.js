//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funçoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caderno', 30.99, 0.15)
const p2 = new Produto('Notebook', 3000.00, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
