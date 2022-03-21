let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Barbara', 'Clara', 'Karol'])
})
p
    .then(valor => valor[0])// vai pegar a 1ª palavra
    .then(primeiraL => primeiraL[0]) //Vai pegar a 1ª letra da palavra
    .then(letra => letra.toLowerCase())// Vai transformar a letra em minuscula
    .then(letraMinuscula => console.log(letraMinuscula))