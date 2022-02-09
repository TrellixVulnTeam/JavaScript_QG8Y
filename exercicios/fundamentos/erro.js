function tratarErroELancar(erro){
    throw new Error('Algo inesperado aconteceu. Verifique seu codigo e tente novamente!')
}

function imprimirNomeGritando(obj){
    /*O try vai verificar se ocorreu um erro ou não. caso ocorra, o catch é acionado e rapidamente invoca a função contendo o throw que irá lançar o erro para o usuário*/
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('Final')
        //Ocorrendo bem ou não o codigo, o finally é executado do mesmo jeito.
    }  
}

const obj = { nome: 'Luan'}
imprimirNomeGritando(obj)