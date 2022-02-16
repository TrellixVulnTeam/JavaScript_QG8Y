function media(nota1, nota2, nota3, cod){
    while(cod >= 0){
        let mediaPonderada = (nota1 * 4 + nota2 * 3 + nota3 * 3)/10
        console.log(`A media ponderada do aluno ${cod} é: ${mediaPonderada}`)
        if(mediaPonderada >=5){
            console.log(`Aprovado!`)
        }else console.log('Reprovado!')
    }  
}