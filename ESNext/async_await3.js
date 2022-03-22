function gerarNumerosEntre(min, max, numeroProibido){
    if(min > max){
        [max, min] = [min, max]
        
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numeroProibido.includes(aleatorio)){
            reject('Numero repetido')
        }else{
            resolve(aleatorio)
        }
    })
}
async function gerarMegaSena(quntNumeros, tentativas = 1){
    try{
        const numeros = []
        for(let _ of Array(quntNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e){
        if(tentativas > 10){
            throw "Poxa, voce ja antingiu o numero maximo de tentativas"
        }else{
            return gerarMegaSena(quntNumeros, tentativas + 1)
        }
    }
}
gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)