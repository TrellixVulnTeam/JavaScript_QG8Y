function esperar(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('vixxxx')

        }, tempo)
    })
}
function retornarValor(){
    return new Promise(resolve =>{
        setInterval(() => resolve(10), 5000)
    })
}
async function executar(){
    let valor = await retornarValor()

    await esperar(1500)
    console.log(`Async/Await ${valor}...`)

    await esperar(1500)
    console.log(`Async/Await ${valor +1}...`)

    await esperar(1500)
    console.log(`Async/Await ${valor +2}...`)

    return valor + 3
}
executar().then(console.log)