let comparaComThis = function (param) {
    console.log(this === param)
}
const obj = {}
comparaComThis(global)
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//Agora com arrow function
console.log('Agora com arrow function')
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

/*Resumindo, this de uma função arrow é um this associado a o this que a função foi escrita. Então não tem variação de forma alguma mesmo com o bind. Ja quando o this é trabalhado com uma função normal, muitas vezes ele não é aquilo que se espera que seja.*/