function buscarPalavras(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
    //O método includes()determina se um array contém um elemento determinado, retornando  trueou  falseapropriadamente.
    }
    
console.log(buscarPalavras("pro", ["programacao", "areia", "profissional"]))
    