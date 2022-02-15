function Calculadora(salario, plano){
    switch (plano){
        case 'A':
            let atual = salario + (10/100)
            
            let aumento = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

            console.log(`${salario} + 10% = ${aumento}`)
            break
        case 'B':
            let antigo = salario + (15/100)
            
            let novo = antigo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

            console.log(`${salario} + 15% = ${novo}`)
            break
        case 'C':
            let antes = salario + (20/100)
            
            let depois = antes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

            console.log(`${salario} + 20% = ${depois}`)
            break
        default: console.log('Erro!')
    }
}

Calculadora(100,'A')