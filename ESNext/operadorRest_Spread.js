// operador ...rest(juntar)/spread(espalhar)
//usar rest com parametro de função


//usar spread com objeto:
const funcionario = {nome:'Joao', salario: 1234.89}
const clone = {ativo: true, ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Maria']
const grupoFinal = ['Ana', ...grupoA, 'Luiz']
console.log(grupoFinal)