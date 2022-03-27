function contarPalavras(frase){
    const palavras = frase.split(' ')
    return palavras.length
}
console.log(contarPalavras('Era uma vez'))