function media(numeros){
    let media = 0
    for(let i in numeros){
        media += numeros[i]
    }
     
    console.log(media/numeros.length)
}
media([2, 4, 5, 7, 8, 1])