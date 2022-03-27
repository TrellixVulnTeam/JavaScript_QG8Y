let numeros = [12, 10, 15, 14, 13, 18, 25, 1, 20, 4]
let cont1 = 0
let cont2 = 0
const dentro = []
const fora = []
let i
for (i in numeros){
    if(numeros[i] >= 10 && numeros[i] <=20){
        cont1++
        dentro.push(numeros[i])
    }else{
        cont2++
        fora.push(numeros[i])
    }
}
console.log(`Tem ${cont1} dentro do intervalo`)
console.log(`Dentro ${dentro}`)
console.log(`Tem ${cont2} dentro do intervalo`)
console.log(`Fora ${fora}`)
