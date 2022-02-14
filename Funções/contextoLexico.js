const valor = 'Global'
function minhaFuncao(){
    console.log(valor)
}
function exec(){
    const valor = 'Local'
    minhaFuncao()
}
exec()
/*
    Apesar de acharmos que por estar dentro da funçao exec, a chamada de minhaFuncao iria executar o valor = 'Local', isso não aconteceu porque a funçao carrega consigo o local aonde ela foi definida. Então, ela iria procurar a const valor no contexto lexico aonde ela foi definida. Dessa forma, ela iria achar a const valor = 'Global'
*/