const escola = "Cadaskdl12salk"
console.log(escola.charAt(4)) /*Essa funcao vai buscar e imprimir o indice 4 da string escola*/

console.log(escola.charCodeAt(5)) /*Essa funcao vai buscar o item 5 da string e vai imprimir o valor dele na tabela ask*/

console.log(escola.indexOf('2'))/*Essa funcao vai buscar o caractere 2 na string e retornar sua respectiva posição*/

console.log(escola.substring(4, 7)) /*Essa funcao vai imprimir a string a partir do indice 4 até o indice 7 sem inclúir o indice 7*/

console.log('Escola'.concat(escola).concat("!")) /*Essa funcao vai concatenar as strings*/

console.log(escola.replace('k', 't')) /* Essa funcao vai buscar o caractere k e vai substituir por t */

console.log(escola.replace(/\w/g, 't')) /* Essa funcao vai substituir todos os caracteres por t */

console.log('Ana,Maria,Clara,Luana'.split(',')) /*Essa funcao vai pegar todas as palavras, colocar elas dentro de um array e fazer a separação por essas virgulas */
