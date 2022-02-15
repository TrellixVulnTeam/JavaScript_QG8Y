function fatorial(numero){
    let calcular = 1
    for(let i = numero; i > 1; i--){
        calcular *= i
    }
    return calcular
}
console.log(fatorial(10))