const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}//versão antiga
const obj2 = {a, b, c}//versao atual
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 9.5

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    //maneira mais antiga:
    funcao1: function(){
        //...
    },
    
    //maneira atual e mais curta:
    funcao2(){
        //..
    }
}
console.log(obj5)

