const numeros = [12, 10, 15, 14, 13, 18, 25, 1, 20, 4]
let cont1 = 0
let cont2 = 0
for(let i = 0; i<=numeros.length; i++){
    if(i >= 10 && i<=20){
        cont1++
        
    }else{
        cont2++
    }
}
console.log(`Temos ${cont1} numeros dentro do intervalo e ${cont2} fora!`)
