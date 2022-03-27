
numeros = [10, 3, 5, 6, 2, 9, 8]
const resultado = numeros.map(Number).reduce(function
    (acumulador, atual){
        
        return Math.min(acumulador, atual)
        
})
console.log(resultado)