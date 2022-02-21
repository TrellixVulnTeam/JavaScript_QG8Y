let vetorInteiro = [19, 20, 16, 18, -1, -4, -3]
let i
let soma = 0
let media = 0
for(i in vetorInteiro){
    soma += vetorInteiro[i]
    media = soma/vetorInteiro.length
    
}
console.log(`A média é: ${media}`)