function MeuObjeto () {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__) /* quando você cria um objeto a partir de uma função construtora usando o new. O protótipo desse objeto automaticamente aponta para a função que você criou, ponto Prototype. Então esse teste aqui já deixou bem claro isso.*/

MeuObjeto.prototype.nome = 'Luan'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome ='Brenda'
obj3.falar()

//Resumendo a loucura..
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)