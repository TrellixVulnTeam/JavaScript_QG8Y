setTimeout(function(){
    console.log('Executando callback 1..')
    setTimeout(function(){
        console.log('Executando callback 2..')
        setTimeout(function(){
            console.log('Executando callback 3..')
        }, 4000)
    }, 3000)
}, 2000)

function esperar(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando ...')
            resolve('vixxxx')

        }, tempo)
    })
}
esperar()
    .then(() => esperar())
    .then(esperar)