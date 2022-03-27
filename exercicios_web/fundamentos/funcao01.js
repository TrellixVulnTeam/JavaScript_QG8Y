//function sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}
imprimirSoma(4,7)
imprimirSoma(4) //vai dar NaN
imprimirSoma(1, 2, 4, 5)// Vai escolher os dois primeiros e ingnorar o resto
imprimirSoma() //vai dar NaN

//function sem retorno

function soma(a, b = 5){
    return a + b
}

console.log(soma(4, 6))/*Por mais que o segundo parametro ja esteja definido la na função, eu fazendo isso ira alterar lá*/
console.log(soma(4))//como o segundo parametro ja esta definido, eu posso passar somente 1 dado