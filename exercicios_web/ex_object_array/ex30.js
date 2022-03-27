const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        const chave = 0,
            valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}

console.log(recerberMelhorEstudante(
    {Luan: [10, 5.7, 7.8, 9.8]},
    {Luana: [6, 3.9, 5.2, 6.8]},
    {Lana: [4.9, 9.7, 5.9, 8.2]},
    {Lara: [7.3, 3.6, 2.4, 4.1]},
    {Luisa: [10, 3.5, 8.0, 5.7]}
))