function triangulo(x, y, z){
    if(x == y && x == z){
        return 'Equilátero'
    }else if(x == y || x == z || y == z){
        return 'Isósceles'
    }else if(x != y && y != z && x != z){
        return 'Escaleno'
    }
}
console.log(triangulo(2,2,2))