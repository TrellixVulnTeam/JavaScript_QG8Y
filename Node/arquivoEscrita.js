const fs = require('fs')
const produto ={
    nome: 'Celular',
    preco: 1490.99,
    desconto: 0.20
    //Eu quero pegar esse objeto e salvá-lo la no disco.
}
//mas para isso, tenho que transformar esse objeto em um texto, e para fazer isso, vou usar a função JSON.stringify. Ou seja, pega o objeto e tranforma pro formato json, com isso eu posso mandar persistir no disco
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})