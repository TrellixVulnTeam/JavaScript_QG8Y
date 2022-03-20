//let e const
{
    var a = 2 //pode ser vista e usada fora do escopo desse bloco
    let b = 3 //nao pode ser vista e nem usada fora do escopo desse bloco. Apenas dentro
    console.log(b)
}
console.log(a)
//console.log(b) vai dar erro

//Template String
const produto = 'ipad'
console.log(`${produto} é caro!`)

//Destructuring
const[l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 4]
console.log(x, y)

const {idade: i, nome} ={nome: 'Ana', idade: 9}
console.log(i, nome)

