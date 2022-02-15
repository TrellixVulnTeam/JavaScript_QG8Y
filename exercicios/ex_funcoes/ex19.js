function Lanchonete(quantidade, plano){
    switch (plano){
        case 100:
            let atual = quantidade * 3
            
            let valor = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

            console.log(`${quantidade} Cachorro Quente = ${valor}`)
            break
        case 200:
            let antigo = quantidade * 5.50
            
            let preco = antigo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

            console.log(`${quantidade} Cheeseburguer = ${preco}`)
            break
        case 300:
            let antes = quantidade * 7.50
            
            let depois = antes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

            console.log(`${quantidade} Bauru = ${depois}`)
            break
        default: console.log('Erro!')
    }
}

Lanchonete(3, 300)