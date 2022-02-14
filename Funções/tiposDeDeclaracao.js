console.log(soma(3, 5))
//function declaration
function soma(x, y){
    return x + y
    /*No momento em que eu declaro a funçao dessa forma, eu posso chamar ela antes mesmo de declará-la*/
}

//function expression
const sub = function(x, y){
    return x - y
    /*No momento em que eu declaro a funçao dessa forma, eu não posso chamar ela antes de declará-la. Só posso chamar após a sua declaração*/
}
console.log(sub(3, 5))

//naned function expression
const mult = function mult(x, y){
    return x * y
    /*Assim como a anterior, eu não posso chamar essa funçao antes de declará-la*/
}
console.log(mult(3, 5))