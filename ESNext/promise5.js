function gerarNumerosEntre(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
        
    }
    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo * 1000)
        
    })
}
function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 20, 5),
        gerarNumerosEntre(21, 40, 4),
        gerarNumerosEntre(41, 60, 3),
        gerarNumerosEntre(61, 80, 2),
        gerarNumerosEntre(81, 100, 1)
    ])
}
//gerarVariosNumeros().then(numeros => console.log(numeros))

console.log('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        
        console.timeEnd('promise')
    })