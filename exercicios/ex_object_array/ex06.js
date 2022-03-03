function inverso(valor){
    /*switch (valor){
        case  valor < 0:
            return valor * 1
            break
        case valor > 0:
            return valor * (-1)
            break
        case true:
            return false
            break
        case false:
            return true
            break
        default:
            return 'invalido'
    }*/

    if(valor < 0){
        return valor * 1
    }else if(valor > 0){
        return valor * (-1)
    }else if(valor == true){
        return false
    }else if(valor == false){
        return true
    }
}
console.log(inverso())