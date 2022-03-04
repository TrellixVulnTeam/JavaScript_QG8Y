
const elementos = ['a', 2, true, 'm', 3, 5, false ]

console.log(elementos.filter(function(e){
    return typeof e == 'number'
}))

