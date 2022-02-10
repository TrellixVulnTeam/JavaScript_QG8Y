function soma(){
    let soma = 0
    for(let i in arguments){
        soma += arguments[i]
        
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(4, 6.5, 8.2, 3.7, 9))
console.log(soma('Luan ', 'Alves'))

console.log(typeof(arguments))