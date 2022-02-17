function media(nota1, nota2, nota3, cod){
    while(cod >= 0){

        if(nota1 > nota2 && nota1 > nota3){
            let mediaPonderada = (nota1 * 4 + nota2 * 3 + nota3 * 3)/10
            console.log(`A media ponderada do aluno ${cod} é: ${mediaPonderada}`)
                if(mediaPonderada >=5){
                    console.log(`Aprovado!`)
                }else console.log('Reprovado!')
        }else if(nota2 > nota1 && nota2 > nota3){
            let mediaPonderada = (nota2 * 4 + nota1 * 3 + nota3 * 3)/10
            console.log(`A media ponderada do aluno ${cod} é: ${mediaPonderada}`)
            if(mediaPonderada >=5){
                console.log(`Aprovado!`)
            }else console.log('Reprovado!')
        }else if(nota3 > nota1 && nota3 > nota2){
            let mediaPonderada = (nota3 * 4 + nota2 * 3 + nota2 * 3)/10
            console.log(`A media ponderada do aluno ${cod} é: ${mediaPonderada}`)
            if(mediaPonderada >=5){
                console.log(`Aprovado!`)
            }else console.log('Reprovado!')
        }
    }  
}

media(7,5,8, 2)