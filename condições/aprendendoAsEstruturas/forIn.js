const notas = [2.5, 4.6, 8.9, 7.8, 9.9, 10]
for(let i in notas){
    console.log(i, notas[i])
}
const pessoa ={
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 20,
    peso: 65
}
for(let i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
}