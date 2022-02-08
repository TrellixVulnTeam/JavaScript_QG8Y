function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor. opera em cima de bit a bit
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return{comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(false, true))