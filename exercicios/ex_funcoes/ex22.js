function anuidade(mes, capital){
    const mensalidade = []
    let M = 0
    let taxa = 5/100

    for(let i = 1; i <= 12; i++){
        M = capital*(1 + taxa)**i
        let f = M.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        mensalidade.push(f) 
    }

    
    console.log(mensalidade[mes])

}
anuidade(10, 2000)

