const pessoa = {
    nome: 'Luan',
    idade: 20,
    peso: 63
}
console.log(Object.keys(pessoa))//vai pegar todas as chaves
console.log(Object.values(pessoa))//vai pegar todos os valores
console.log(Object.entries(pessoa))//vai pegar todas as chaves e valores.

//Percorrer o arrey entries:
Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

//Definindo uma propriedade:
Object.defineProperty(pessoa, 'dataNascimento', {
   enumerable: true,//VAI PODER SER LISTADA
   writable: false, //NÃO PODE SER MODIICADA
   value:'30/02/2032'
})
pessoa.dataNascimento = '31/2/2001'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))   

//Object.assing (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
//Ele vai criar um objeto criado pela concatenação de todos os patributos passados como parametros. 
console.log(obj)