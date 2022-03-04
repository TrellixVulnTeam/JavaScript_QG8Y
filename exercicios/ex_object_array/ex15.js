function retornarParesEIndicesPares(numeros){
    let filtro = []
    for(let i = 0; i< numeros.length; i+=2){
        if(numeros[i] %2 == 0){
            filtro.push(numeros[i])
        }
    }
    console.log(filtro)
}


retornarParesEIndicesPares([2, 4, 3, 5, 6, 8, 3, 10, 4])