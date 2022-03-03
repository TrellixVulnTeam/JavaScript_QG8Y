const valores = [1, 3, 5, 6]


function primeiroUltimo(valores){
    let selecao = []
    selecao.push(valores[0])
    selecao.push(valores[valores.length -1])

    console.log(selecao)
}
primeiroUltimo(valores)