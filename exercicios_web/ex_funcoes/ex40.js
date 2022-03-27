let notas = [9.6, 3.5, 6.9, 1.5, 5.8, 7.9, 8.7]

function conceitos(nota){
    for(let i in nota){
        if(nota[i] >= 0 && nota[i] < 5){
            console.log(`A nota ${nota[i]} está no Conteito D` )
        }else if(nota[i] >= 5 && nota[i] < 7){
            console.log(`A nota ${nota[i]} está no Conteito C` )
        }else if(nota[i] >= 7 && nota[i] < 9){
            console.log(`A nota ${nota[i]} está no Conteito B` )
        }else if(nota[i] >= 9 && nota[i] <= 10){
            console.log(`A nota ${nota[i]} está no Conteito A` )
        }
    }
}
conceitos(notas)
