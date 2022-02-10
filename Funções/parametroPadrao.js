//Estratégia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1 // Se nao tiver parametro pra a, define a com o valor 1
    b = b || 1
    c = c || 1
    return a + b + c

} 
console.log(soma1(), soma1(2), soma1(2, 3), soma1(2, 3, 4), soma1(0,0,0))

//Estratégias 2, 3 e 4 para gerar valor padrão
console.log('SEGUNDO EXEMPLO:')
function soma2(a, b, c){
    a = a !== undefined ? a : 1 //se a or diferente de undefined, coloca o valor dele em a. Se não, define como 1

    b = 1 in arguments ? b : 1 // se na chamada tiver o parametro 1, define o b com ele. se não, define o b com 1

    c = isNaN(c) ? 1 : c // se o parametro c for NaN, coloca 1 como padrao. se não, coloca o valor do parametro.

    //De todas acima, a mais segura é a do c
    return a + b + c

}
console.log(soma2(), soma2(2), soma2(2, 3), soma2(2, 3, 4), soma2(0,0,0))

//valor padrão do es2015
console.log('TERCEIRO EXEMPLO:')
function soma3(a=1, b=1, c=1){
    return a + b + c
    //Essa forma é a melhor de todas e mais recomendada
}
console.log(soma3(), soma3(2), soma3(2, 3), soma3(2, 3, 4), soma3(0,0,0))
