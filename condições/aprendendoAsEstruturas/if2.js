function teste1(num){
    if(num > 7)
        console.log(num)
        console.log('Final')
    /*Como o bloco nao esta entre chaves, somente a primeira sentença faz parte da condição if. A outra sera executada da mesma forma*/
}
teste1(9)
teste1(5)

function teste2(num){
    if(num > 7) ; {
        console.log(num);
    }
    /*Como tem aquele ponto e virgula, tudo que esta entre chaves não pertence ao if. Entao, estes serao executados independente do resultado da condição. Portanto, deve-se evitar o ponto e virgula no bloco if*/
}
teste2(6)
teste2(9)