function caixa(valor){
    let nota1 = 100, cont1 = 0
    let nota2 = 50, cont2 = 0
    let nota3 = 20, cont3 = 0
    let nota4 = 10, cont4 = 0
    let nota5 = 5, cont5 = 0
    let nota6 = 1, cont6 = 0
    
    for(let i = valor; i >=0; i--){
        if(valor >= nota1){
            cont1++
            valor -= nota1
        }else if(valor >= nota2){
            cont2++
            valor -= nota2
        }else if(valor >= nota3){
            cont3++
            valor -= nota3
        }else if(valor >= nota4){
            cont4++
            valor -= nota4
        }else if(valor >= nota5){
            cont5++
            valor -= nota5
        }else if(valor >= nota6){
            cont6++
            valor -= nota6
        }      
    }
    console.log(`Ao todo foram ${cont1} notas de R$100,00;`) 
    console.log(`${cont2} notas de R$50,00;`)
    console.log(`${cont3} notas de R$20,00;`)
    console.log(`${cont4} notas de R$10,00;`)
    console.log(`${cont5} notas de R$5,00;`) 
    console.log(`${cont6} notas de R$1,00.`)
}
caixa(394315879909)