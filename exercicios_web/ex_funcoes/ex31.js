let vetorInteiro = [19, 20, 16, 18, -1, -4, -3]
let i
let cont = 0
for(i in vetorInteiro){
    if(vetorInteiro[i] < 0){
        cont++
    }
}
console.log(`Tem ${cont} numeros negativos`)