function numeroAlatorio(min, max){
    const valor = Math.random() * (max- min) + min
    return Math.floor(valor)
}
let opcao = 0
while (opcao != -1){
    opcao = numeroAlatorio(-1, 10)
    console.log(`O numero gerado foi ${opcao}.`)
}
console.log('Fim!')