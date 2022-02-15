function Calculadora(num1, sinal, num2){
    switch (sinal){
        case '+':
            console.log(`${num1} ${sinal} ${num2} = ${num1 + num2}`)
            break
        case '-':
            console.log(`${num1} ${sinal} ${num2} = ${num1 - num2}`)
            break
        case '*':
            console.log(`${num1} ${sinal} ${num2} = ${num1 * num2}`)
            break
        case '/':
            console.log(`${num1} ${sinal} ${num2} = ${num1 / num2}`)
            break
        default: console.log('Erro!')
    }
}

Calculadora(2,'-', 3)