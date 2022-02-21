function numerosImpares(inicio, fim){
    let vet = []
    if(fim < inicio){
        console.log('Erro!')
    }else{
        for(let i = inicio; i <= fim; i++){
            if(i %2 != 0){
                vet.push(i)
            }
        } console.log(vet)
    }
}
numerosImpares(1, 100)