//Função normal
let dobro = function(a){
    return 2 * a
}

//Função arrow
dobro = (a) => {
    return 2 * a
}

//Funçao arrow mais reduzida e especifica
dobro = a => 2 * a // retorno implícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}
ola = () => 'Olá'
console.log(ola())