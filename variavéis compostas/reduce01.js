/*Como o nome sugere, o reduce busca reduzir um array. Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor (de qualquer tipo), como por exemplo a soma de todos os elementos desse array. Lembrando que não ficamos presos apenas a números.*/
const alunos = [
    { nome: 'Joao', nota: 6.4,  bolsista: false},
    { nome: 'Luan', nota: 8.7,  bolsista: true},
    { nome: 'Maria', nota: 5.2,  bolsista: true},
    { nome: 'Marcos', nota: 3.4,  bolsista: false},
    { nome: 'Clara', nota: 9.5,  bolsista: true}
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
    /*Basicamente, o 0 seria o acumulador e a primeira nota seria o numero atual, com isso soma-se acumulador + atual. Ja na proxima rodada, soma-se a nota atual da anterior com a nota após ela e assim sucessivamente.*/
}, 0)
console.log(resultado)