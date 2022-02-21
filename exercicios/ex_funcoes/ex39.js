function trocaDeVetores(vet1, vet2){
    if(vet1 == vet2){
        console.log('Eles já são iguais!')
    }else{
        console.log(`Vetor 1 antes ${vet1}`)
        console.log(`Vetor 2 antes ${vet2}`)
        for(let i in vet1){
            vet2[i] = vet1[i]
        }console.log(`Vetor 1 depois ${vet1}`)
        console.log(`Vetor 2 depois ${vet2}`)
    }
}
let vetor1 = [2, 4, 6, 9]
let vetor2 = [8, 2, 3, 7]
trocaDeVetores(vetor1, vetor2)