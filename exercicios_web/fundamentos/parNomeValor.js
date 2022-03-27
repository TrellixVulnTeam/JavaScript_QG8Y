//par nome / valor
const saudacao = 'Opa' //contexto léxico 1
function exec(){
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente ={
    nome: 'Luan',
    idade: 20,
    peso: 64,
    endereco:{
        logradouro: 'Rua Maria Gurgel',
        numero: 8,
        bairro: 'centro',
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)