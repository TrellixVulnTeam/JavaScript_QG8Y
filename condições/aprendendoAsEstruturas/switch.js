const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log(`Quadro de honra com ${nota}!`)
            //caso seja 9 ou 10, como o 10 não tem sentença, ele irá imprimir a sentença do 9.
            break
        case 8: case 7:
            console.log(`Aprovado com ${nota}!`)
            break
        case 6: case 5: case 4:
            console.log(`Recuperação com ${nota}!`)
            break
        case 3: case 2: case 1: case 0:
            console.log(`Reprovado com ${nota}!`)
            break
        default:
            console.log('nota invalida!')
        
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado(7)
imprimirResultado(1.2)