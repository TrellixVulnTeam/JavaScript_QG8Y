const pai = { nome:'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai) /*criou um objeto novo tendo como protótipo o objeto o pai que eu passei então em vez de ele criar já para o objeto ponto Prototype automaticamente ele já criou o objeto filha tem um protótipo o objeto pai. Então nesse caso eu posso por exemplo alterar o nome da filha para Anna e posso mostrar por exemplo no console o valor de filho ponto com o cabelo.*/

filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome:{value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome= 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
    /*hasOwnProperty uer dizer que ela tem aquela propriedade que pertence a ela. E aí você vai passar o nome da chave, se pertence eu vou simplesmente botar o nome da propriedade. Se não, vou colocar `por herança: e o nome da propriedade`.*/    
}