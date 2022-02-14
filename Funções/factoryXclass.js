class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Luan')
p1.falar()

const usuario = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = usuario('Luiza')
p2.falar()