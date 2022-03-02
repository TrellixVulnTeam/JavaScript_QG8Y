const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.3,
    },{
        nome: 'Ana',
        nota: 9.7,
    }]
},{
    nome: 'Turma M2',
    alunos:[{
        nome: 'Maria',
        nota: 5.3,
    },{
        nome: 'Rebeca',
        nota: 7.2,
    }] 
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const nota1 = escola.map(getNotasDaTurma)
console.log(nota1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const nota2 = escola.flatMap(getNotasDaTurma)
console.log(nota2)