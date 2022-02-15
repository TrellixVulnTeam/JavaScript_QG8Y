function Bhaskara(a, b, c){
    const delta = b * b - 4 * a * c
    if(!a || !b || !c){
        console.log('Insira os valores de a, b e c')
    }else if( delta < 0){
        console.log('O valor de delta deve ser maior que 0')
    }else{
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)
        console.log(`x1 = ${x1.toFixed(2)} e x2 = ${x2.toFixed(2)}`)
    }
}

Bhaskara(2, 4, -8)
