const [a, b, c, d] = [3, 5, 7, 9]
const soma = a + b + c + d
const subt = a - b - c - d
const mult = a * b * c * d
const divs = a / b / c / d

const modso = soma % 2
const modsu = subt % 2
const modmu = mult % 2
const moddi = divs % 2

console.log(`A soma de todos é ${soma} e o modulo é ${modso}`)
console.log(`A subtração de todos é ${subt} e o modulo é ${modsu}`)
console.log(`A multiplicação de todos é ${mult} e o modulo é ${modmu}`)
console.log(`A divsão de todos é ${divs} e o modulo é ${moddi}`)