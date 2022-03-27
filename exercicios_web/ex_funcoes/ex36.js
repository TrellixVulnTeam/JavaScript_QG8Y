let vetorAdiciona = [6, 7, 8, 9, 10]
let mult = []
let mult2 = []
function multiplica(vetor, num){
    for(let i in vetor){
        mult.push(vetor[i] * num) 
    }
    console.log(`${mult}`)
}
function multiplica2(vetor2, num2){
    if(num2 > 5){
        for(let i in vetor2){
            mult2.push(vetor2[i] * num2) 
        }
        console.log(`${mult2}`)
    }
}

multiplica(vetorAdiciona, 4)
multiplica2(mult, 6)

