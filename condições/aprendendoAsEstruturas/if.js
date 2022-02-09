function soBoaNoticia(nota){
    if(nota >=7){
       console.log(`Aprovado com ${nota}`) 
    }
}

soBoaNoticia(7.1)
soBoaNoticia(4.3)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`${valor} é verdade!`)
    }
}
seForVerdadeEuFalo(null == undefined)
seForVerdadeEuFalo(0 == null)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(2)