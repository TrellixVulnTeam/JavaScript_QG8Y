{ 
    { 
        { 
            { 
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)
/*Quando uma variavel var esta dentro de um bloco que não é uma função, ela pode ser vista tanto dentro quanto fora do seu bloco*/

function teste(){
    var local = 123
}
teste()
console.log(local)
/*Ja nesse caso vai dar erro. Pois, quando se define uma variavel dentro de uma função, o escopo dessa variavel não estará visivel fora dessa função*/