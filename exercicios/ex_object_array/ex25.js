function buscarPalavras(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
    //O método includes()determina se um array contém um elemento determinado, retornando  true ou  false apropriadamente.
    }
    
console.log(buscarPalavras("pro", ["programacao", "areia", "profissional"]))
    