function funcionarOuNao (valor, chanceErro){
    return new Promise((resolve, reject) => {
        try{
            con.log('l')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }else{
                resolve(valor)
            }  
        } catch(e){
            reject(e)
        }
        
    })
}
funcionarOuNao('Testando..', 0.1)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err =>console.log(`Erro esp.: ${err}`)
    )
    .catch(err => console.log(`${err} `))
    .then(() => console.log('fim!'))