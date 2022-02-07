//Armazenando uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(3, 7)

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(5, 7))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 7))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!')