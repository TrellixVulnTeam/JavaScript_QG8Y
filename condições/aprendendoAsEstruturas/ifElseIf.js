Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log(`Quadro de honra com ${nota}!`)
    }else if (nota.entre(7, 8.99)){
        console.log(`Aprovado com ${nota}!`)
    }else if(nota.entre(3, 6.99)){
        console.log(`Recuperação com ${nota}!`)
    }else if(nota.entre(0, 2.99)){
        console.log(`Reprovado com ${nota}!`)
    }else{
        console.log('nota invalida!')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado(7)
imprimirResultado(1.2)