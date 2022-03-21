const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // vai dar undefined
console.log(tecnologias.get('react')) //maneira certa

console.log(' ')
const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [124, 'Números']
])
chavesVariadas.forEach((vl, ch) =>{
    console.log(ch, vl)
})

console.log(' ')
console.log(chavesVariadas.size) //quantos elementos tem no map
console.log(chavesVariadas.has(124))//se o item 124 esta presente ou n
chavesVariadas.delete(124)
console.log(chavesVariadas.has(124))
console.log(chavesVariadas.size)
chavesVariadas.set(124, 'a') // faz um objeto apontar para outro. porem, ela nao aceita repetição e isso faz com que apenas o ultimo seja imprimido
chavesVariadas.set(124, 'b')
chavesVariadas.set(124, 'c')
console.log(chavesVariadas)