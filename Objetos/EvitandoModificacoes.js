//Object.preventExtesions: Ele vai previnir e não vai permitir que o objeto seja extendido. Ou seja, vai por um limite na quantidade de atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto))//Veriica se é extensivel ou não

produto.nome = 'Borracha' //Pode alterar
produto.descricao = 'Borracha escolar' //Não pode adicionar
delete produto.tag //Pode remover
console.log(produto)

//Object.seal: não consegue adicionar atributos, nem remover, mas consegue modificar
const pessoa = {nome: 'Juliana', idade: 30}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))//Veriica se esta selado ou não

pessoa.idade = 29 //Pode alterar
pessoa.descricao = 'Borracha escolar' //Não pode adicionar
delete pessoa.nome //Não pode remover
console.log(pessoa)


