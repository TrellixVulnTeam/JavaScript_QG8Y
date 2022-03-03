function salario(horas, ganhoHora){
    let salarioTotal = horas * ganhoHora
    return `Você recebe ${salarioTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
}
console.log(salario(150, 40.5))