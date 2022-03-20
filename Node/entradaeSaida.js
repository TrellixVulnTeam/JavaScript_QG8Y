const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)
if(anonimo){
    process.stdout.write('Fala anonimo\n') //Aqui vai imprimir no Terminal, como se fosse um printf em C
    process.exit() // vai finalizar
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data=>{ //O evento data vai acontecer quando o usuario clicar enter
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    }) //Essa função vai ler o nome do usuario, transformar em string, retirar o \n e tranformar em '' e vai imprimir o nome
}


//Lembrando que para eecutar esse codigo, vai no terminal e digita node entradaeSaida.js -a
// o -a é opcional