function anoBisiesto(ano){
    if(ano % 4 == 0){
        return true
    }
    else{
        return false
    }
}
console.log(anoBisiesto(2024))