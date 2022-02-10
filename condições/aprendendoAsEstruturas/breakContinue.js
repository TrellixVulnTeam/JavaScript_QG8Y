const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i in nums){
    if(i == 5){
        break
        //o break nao funciona no bloco if e else. O que ele faz é parar a repetição do for
    }
    console.log(`${i} = ${nums[i]}`)
}
console.log('PROXIMO EXEMPLO')
for(let x in nums){
    if(x == 5){
        continue
        /*O continue vai interromper a repetião atual e vai para a proxima repetição*/
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log('PROXIMO EXEMPLO')
//O exemplo abaixo não deve ser usada por ser ultrapassado
externo: for(let a in nums){
    for(let b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}