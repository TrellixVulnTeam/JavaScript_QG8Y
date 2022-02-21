let inteiros = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

for(let i in vetorAdiciona){
    inteiros.push(vetorAdiciona[i])
}
console.log(`${inteiros}`)
