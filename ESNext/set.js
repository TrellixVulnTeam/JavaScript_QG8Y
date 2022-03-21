//nao aceita repetiçao e nao é indexada
const times  = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') //sera ingnorado por repetiçao
console.log(times)

console.log(times.size)
console.log(times.has('vasco'))//dirá que é falso por estar minusculo
console.log(times.has('Vasco'))
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

console.log(' ')
const nomes = ['Raquel', 'Vanessa', 'Izabel', 'Luciana', 'Vanessa']
const nomesSet = new Set(nomes)
console.log(nomesSet)