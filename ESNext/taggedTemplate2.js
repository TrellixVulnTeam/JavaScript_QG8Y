function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor , indice)=>{
        valor = isNaN(valor) ? valor :` ${valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 29.99
const parcela = 11
console.log(real `1x de ${preco} ou 3x de ${parcela}.`)