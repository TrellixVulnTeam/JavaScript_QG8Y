const numeros = []
for(let i = 1; i <= 100; i++){
    numeros.push(i)
}
console.log(numeros)
console.log('Numeros pares')
const numerosPares = numeros.filter(num => num %2 == 0)
console.log(numerosPares)

console.log('Numeros impares')
const numerosImpares = numeros.filter(num => num %2 != 0)
console.log(numerosImpares)