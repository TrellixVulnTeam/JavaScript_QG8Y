function diaUtil(dia){
    switch (dia){
        case 1:
            console.log('Domingo é fim de semana')
            break
        case 2:
            console.log('Segunda-feira é dia útil!')
            break
        case 3:
            console.log('Terça-feira é dia útil!')
            break
        case 4:
            console.log('Quarta-feira é dia útil')
            break
        case 5:
            console.log('Quinta-feira é dia útil')
            break
        case 6:
            console.log('Sexta-feira é dia útil')
            break
        case 7:
            console.log('Sabádo é im de semana')
            break
        default: console.log('Dia inválido')
    }
}

diaUtil(3)