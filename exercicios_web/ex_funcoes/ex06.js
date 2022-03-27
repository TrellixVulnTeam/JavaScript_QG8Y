function montanteComposto(c, i, t){

    let montComp = c*(1 + i)**t

    let mc = montComp.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return `Montante com juros compostos: ${mc}`
}
function montanteSimples(c, j){

    let MontSimp = c + j
    let ms = MontSimp.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return `Montante com juros simples: ${ms}`
}

c=3000
i=10/100
t=12
j=150

console.log(montanteComposto(c, i, t))
console.log(montanteSimples(c, j))
