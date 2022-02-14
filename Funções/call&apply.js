function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 3890,
    desc: 0.15,
    getPreco
}
global.preco = 30
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro ={preco: 49350, desc: 0.20}
//Funçao call:
console.log(getPreco.call(carro))

//Função applay:
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
/*Quando eu chamo uma funçao tipo call, eu passo diretamente cada um dos parametros que serão passados para a função. Então, o primeiro parametro sempre será o contexto que pode ser null, carro, global, o proprio objeto etc; após isso, serão todos os parâmetros que ele vai passar pra função. Nesse caso acima, o contexto foi a const carro e os parametros foram o imposto e a moeda*/

console.log(getPreco.apply(carro, [0.17, '$']))
/*Ja na função applay, em vez de colocar todos os parametros diretamente, eu vou passar os parametros dento de um arrey. O primeiro parametro é o objeto que será usado como contexto de execução(carro) e depois vou ter um arrey com todos os parametros dentro(imposto e a moeda*)*/

