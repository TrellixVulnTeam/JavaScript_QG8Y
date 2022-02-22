//Pessoa -> end. de memória -> {...} objeto
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

/*  pessoa -> novo endereço -> {...}
    pessoa = {nome: 'Ana'}
    isso vai dar erro pois pessoa é uma constante e isso faz com que ela não pode apontar para um novo endereço
*/
Object.freeze(pessoa) /*
    isso vai congelar o objeto pessoa e assim não pode ser mexido. Se eu tentar alterar o nome, criar ou deletar outro atributo, não vai ser alterado.
*/

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome
console.log(pessoa)
