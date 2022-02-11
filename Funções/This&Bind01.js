const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
//Quando a funcao bind for chamada, sempre que o this for referenciado, ele será o objeto passado pra função bind