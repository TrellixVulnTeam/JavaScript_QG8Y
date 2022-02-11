const notas= [7.7, 7.8, 5.6, 9.8, 2.9, 6.5, 4.6]
//Sem callback
const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
    /*o filter vai filtrar todas as notas do array notas, e as que forem menor que 7, serao adicionadas ao array notasBaixas. Esta funcao serve pra retornar se a nota é menor(verdadeiro) ou nao(falso) que 7 */
})
console.log(notasBaixas2)

const notasAltas = notas.filter(nota => nota > 7)
console.log(notasAltas)