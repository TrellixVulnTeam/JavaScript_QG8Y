function sorteio(numero){
    let sorteado = Math.floor(Math.random() * 10)
    if(numero == sorteado){
        console.log('Parabéns! Você acertou!')
    }else console.log(`Você errou, o numero era ${sorteado}`)
}
sorteio(1)