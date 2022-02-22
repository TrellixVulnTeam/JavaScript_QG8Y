// Cadeia de protótipos (prototypr chain)
Object.prototype.attr0 = '0'//Mas isso é errado então deve ser evitado
const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B', attr2:'G'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1) //como ele não tem o atributo1, ele vai procurar no pai e como nao tem, ele vai procurar no avo

console.log(filho.attr0) //É como o professor disse, ele vai procurar até encontrar. Então, mesmo se não tiver no avo, se encontrar ele retorna.

console.log(filho.attr2) // Mesmo tendo outro attr2 na linha 4, ele so vai retornar o primeiro que ele ve que no caso é o da linha dele mesmo, a 5

//Outro exemplo

const carro = {
    velAtual: 0,
    velMax: 400,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 245
}
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro) /*essa funcao serve para estabelecer a relação entre Ferrari carro ou seja que a Ferrari tem carro como seu protótipo. E esse método também é um método especificado pela linguagem você pode usar ele onde suporta JavaScript. */
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(120)
console.log(volvo.status())

ferrari.acelerarMais(420)
console.log(ferrari.status())