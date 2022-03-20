//ES8 Object. values/ Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj)) //vai retornar um array com valores
console.log(Object.entries(obj)) // vai retornar um array de arrays com chave e valor

//Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(nome) {
        return `ola ${nome}`
    }
}
console.log(pessoa.nome, pessoa.ola('Luan'))

//class
class Animal {}
class cachorro extends Animal {
    falar(){
        return 'Au Au!'
    }
}
console.log(new cachorro().falar())