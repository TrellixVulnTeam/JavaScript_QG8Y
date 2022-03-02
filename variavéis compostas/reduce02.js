const alunos = [
    { nome: 'Joao', nota: 6.4,  bolsista: false},
    { nome: 'Luan', nota: 8.7,  bolsista: false},
    { nome: 'Maria', nota: 5.2,  bolsista: true},
    { nome: 'Marcos', nota: 3.4,  bolsista: false},
    { nome: 'Clara', nota: 9.5,  bolsista: false}

]
//Desafio 1: Todos os alunos sao bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
//Desafio 2: Algum aluno é bolsista?
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))