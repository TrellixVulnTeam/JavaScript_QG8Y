function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
}    

const carro = {
    modelo: 'SW4',
    marca: 'Toyota',
    valor: 300000,
}
console.log(removerPropriedade({a: 1, b: 2}, "a"))