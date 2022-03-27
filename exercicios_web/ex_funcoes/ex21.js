function clinica(idade){
        if(idade < 10){
            console.log(`Total a ser pago: R$ ${100 + 80}`)
        }else if(idade >=10 && idade <=30){
            console.log(`Total a ser pago: R$ ${100 + 50}`)
        }else if(idade >30 && idade <= 60){
            console.log(`Total a ser pago: R$ ${100 + 95}`)
        }else if(idade > 60){
            console.log(`Total a ser pago: R$ ${100 + 130}`)
        } 
}
clinica(39)