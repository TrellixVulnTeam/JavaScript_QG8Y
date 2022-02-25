console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//Todos os 3 sao funções e tem o prototype em comum

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
    
    //split('') vai separar a string letra por letra.
    //reverse vai reverter a string
    //join('') vai juntar a string reversa letra por letra e colocar em uma nova string
}

console.log('Escola Coder'.reverse())

Array.prototype.first = function(){
    return this[0]
    //vai retornar o primeiro elemento do array
}
console.log([1, 2, 3, 4].first())
console.log(['a','b' ,'c' ,'d' ].first())