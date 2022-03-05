function quantidade(num, numeros){
    let novoArray = []
    for(let i in numeros){
        if(String(numeros[i]).length == num){
            novoArray.push(numeros[i])
        }
    }
     console.log(novoArray)
}
quantidade(2, [2, 32, 54, 1, 9])