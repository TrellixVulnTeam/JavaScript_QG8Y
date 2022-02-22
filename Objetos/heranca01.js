const ferrari = {
    modelo: 'F40',
    velMax: 245
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)/*essa notação com .__proto__ serve para acessar algum atributo de Ferrari e eu não encontrar dentro de Ferrari ele vai procurar esse mesmo atributo dentro do meu protótipo que seria o meu objeto pai procurou lá achou, ele retorna o valor que ele viu do pai. Se ele não achou ele vai procurar no protótipo do protótipo do protótipo.*/
console.log(ferrari.__proto__=== Object.prototype)
console.log(volvo.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto (){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

/*  
    No primeiro momento foi que a gente entendeu aqui que um objeto em JavaScript. Ele tem uma referência para o seu protótipo e essa é a forma como o JavaScript define herança a partir da referência para um protótipo você tem uma aparência para um outro objeto e esse objeto tem atributos e comportamentos que podem ser acessados a partir do objeto filho você pode colocar um atributo que não existe no filho e ele vai procurar um Protoss que o pai não acha que o pai irá procurar no pai do pai vai percorrendo a cadeia de protótipos até encontrar aquele determinado atributo. Essa é uma forma de você ter o uso de você não ter que replicar os mesmos atributos e as mesmas funções em todos os objetos. Ele vai procurando uma cadeia de protótipos até achar a forma como você tem de dentro do objeto acessar o protótipo dele a partir do atributo dela. */