function rand({min = 0, max = 100}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({ max: 50, min: 0}))
console.log(rand({min:1}))
console.log(rand({}))
