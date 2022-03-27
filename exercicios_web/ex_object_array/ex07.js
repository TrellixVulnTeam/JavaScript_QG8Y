function entreOuNao(num, min, max, incluso = false){
    if(num >= min && num <=max){
        return incluso = true
    }else return false
}
console.log(entreOuNao(5, 2, 4))
