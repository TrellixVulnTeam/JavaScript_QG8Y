//Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'SW4',
    marca: 'Toyota',
    valor: 300000,
    proprietario:{
        nome:'Luan Alves',
        idade: 18,
        endereco: {
            logradouro: 'Rua da baixa da égua',
            numero: 369,
        }

    },
    condutores_autorizados:[{
        nome: 'Daniely',
        idade: 23  
    },{
        nome: 'Tais',
        idade: 18
    }]
}
console.log(carro)