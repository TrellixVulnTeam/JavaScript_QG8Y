function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }
}
console.log(area(10, 2))
console.log(area(13, 42))
console.log(area(10))
console.log(area(10, 5, 5, 2))
console.log(area())