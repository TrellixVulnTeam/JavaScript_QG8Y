function ContarCaractere(letra, frase){
    frase.split('')
    let igual = 0
    for(let i in frase){
        if(letra == frase[i]){
            igual++
        }
    }
    return igual
}
console.log(ContarCaractere("e", "Conhece-te"))