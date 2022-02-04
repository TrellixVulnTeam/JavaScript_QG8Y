let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)
isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)
//Verdadeiros
console.log(!! 3)
console.log(!! -1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!! (isAtivo = true))

//Falsos
console.log(!!0)
console.log(!!'')
console.log(!! null)
console.log(!! NaN)
console.log(!! undefined)
console.log(!!  (isAtivo = false))

let palavra = ''
console.log(palavra || 'Desconhecido')