for (let letra of "Cod3r"){
    console.log(letra)
}

//Diferença entre for of e for in
console.log(' ')
const assuntoEcma = ['Map', 'Set', 'Promise']
for(let i in assuntoEcma){
    console.log(i) //vai imprimir apenas o indice, se eu quiser o conteudo, tenho que colocar assuntoEcma[i]
}
console.log(' ')
for(let i of assuntoEcma){
    console.log(i) // vai imprimir o conteudo dos indices
}

console.log(' ')
const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let i of assuntoMap){
    console.log(i)
}
console.log(' ')
for(let i of assuntoMap.keys()){
    console.log(i) //so as chaves
}

console.log(' ')
for(let i of assuntoMap.values()){
    console.log(i) //so os valores
}

console.log(' ')
for(let [ch, vl] of assuntoMap.entries()){
    console.log(ch, vl) //chave e valor
}

console.log(' ')
const s = new Set(['A', 'B', 'C'])
for(let i of s){
    console.log(i)
}