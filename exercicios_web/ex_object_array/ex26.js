function buscarPalavras(palavras) {
    return palavras.replace(/[aeiouà-ú]/gi,'')
    //irá remover inclusive vogais acentuadas
}
    
console.log(buscarPalavras("abracadabra"))
    