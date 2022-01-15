let valores = [3, 1, 5, 9, 7]
let pos
/*Maneira tradicional
    for (pos = 0; pos < valores.length; pos++) {
        console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
        
    }
*/
//Maneira simplifícada:
for(pos in valores){
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}