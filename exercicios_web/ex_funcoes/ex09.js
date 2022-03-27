function round(nota) {
    if(nota >= 38){
        if (nota % 5 != 0) {
            const arredondamento = Math.ceil(nota / 5) * 5
            if((arredondamento - nota) < 3){
                return `Sua nota era ${nota} mas foi arredondada para ${arredondamento}`;
            }else{
                return `Sua nota não foi arredondada. Portanto, permanecerá ${nota}`
            }
        }else{
            return `Sua nota é ${nota}`
        }
    }else{
        return `Você está reprovado com a nota ${nota}`
    }
}

var n = 41;
console.log(round(n)); 