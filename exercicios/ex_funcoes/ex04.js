function calculador(x, y){
     
    if((x/y) % 2 == 0){
        return `Divisao: ${x/y} e resto 0`
    }else{
        return `Divisao:$ {x/y} e resto 1`
    }
}
console.log(calculador(6,3))