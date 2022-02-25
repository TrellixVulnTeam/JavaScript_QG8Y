function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}
const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//Simulando o new
function novo(f, ...params){
    const obj1 = {}
    obj1.__proto__ = f.prototype
    f.apply(obj1, params)
    return obj1
}
const aula3 =  novo(Aula, 'Bem vindo', 123)
const aula4 =  novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)