//operador de desestruturação
const pessoa ={
    nome: 'Luan',
    idade: 20,
    peso: 64,
    endereco:{
        logradouro: 'Rua Maria Gurgel',
        numero: 8,
       
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(nome, idade)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)