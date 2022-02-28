const aprovados = ['Luan', 'Maria', 'Elma', 'Marcos']
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
    //para cada indice, eu vou passa a função calback que ira imprimir o indice +1 e o nome do aprovado
})

console.log(' ')
aprovados.forEach(nome => console.log(nome))

console.log(' ')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)