class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo{
    /*extends é a forma que você tem no âmbito de sintaxe e classe de definir uma determinada classe tem outra classe como protótipo ou que uma determinada função gerada a partir daquela classe terá como protótipo uma outra função que será gerada a partir da classe Avo.*/
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        /*super é uma forma bastante comum de quem trabalha com Java que é uma forma de você chamar a função construtora ou construtor da super classe.*/
        this.profissao = profissao
    }
}
class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)