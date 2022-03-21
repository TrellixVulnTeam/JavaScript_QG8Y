/*
    Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
*/
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}
/*
    Essa função recebe dois parametros e retorna uma promessa. Essa promessa eu coloquei um setTimeout só pra ele dar um delay como se fosse uma simulação de um tempo maior de processamento, então ele vai me retornar uma promessa, e quando essa promessa for atendida, ele vai chamar a função resolve que vai chamar a função then.
*/

falarDepoisDe(2, 'Luan conseguiu um emprego e bateu sua meta')
    .then(frase => frase.concat('!'))
    .then(outraFrase => console.log(outraFrase))
/*
    Quando voce retorna uma promise, ela tem uma funçao then, e essa função then é chamada quando voce resolve a promise passando o objeto desejado.
*/