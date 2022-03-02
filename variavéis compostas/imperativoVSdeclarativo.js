const alunos = [
    { nome: 'Joao', nota: 6.4},
    { nome: 'Luan', nota: 8.7},
    { nome: 'Maria', nota: 5.2},
]
//Imperativo
let total1 = 0
for(let i = 0; i< alunos.length; i++){
    total1 += alunos[i].nota
}
console.log((total1 / alunos.length).toFixed(2))

//Declarativo
const getNota = aluno => aluno.nota
const soma =(total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log((total2 / alunos.length).toFixed(2))

/*A Programação Imperativa se baseia em especificar os passos que um programa deve seguir para alcançar um estado desejado. Pelo fato de permitir o uso de procedimentos como estruturação, também é conhecido como Procedural.*/

/*Já a Programação declarativa é um paradigma de programação baseado em programação funcional, programação lógica ou programação restritiva. Um programa se diz declarativo quando descreve o que ele faz e não como seus procedimentos funcionam. Na programação declarativa, não há a ideia de estado do programa, como ocorre na programação imperativa.*/