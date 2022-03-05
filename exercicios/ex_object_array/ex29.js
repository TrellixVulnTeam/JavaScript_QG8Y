
numeros = [10, 3, 58, 60, 2, 9, 8]
function segundoMaior(numeros) {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)
    return segundoMaior
    }
    
console.log(segundoMaior(numeros))