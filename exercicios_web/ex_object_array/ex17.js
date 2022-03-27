function somaNumeros(numeros){
    let soma = 0
    for(let i in numeros){
        soma += numeros[i]
    }
    console.log(soma)
}
const elementos = [ 2, 4, 6, 8, 10]
somaNumeros(elementos)