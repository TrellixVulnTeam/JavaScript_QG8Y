const gulp = require('gulp')
const {series, parallel} = require('gulp') //fazer varias tarefas em sequencia ou em paralelo

const antes1 = cb =>{
    console.log('Tarefa Antes1!')
    return cb()
}

const antes2 = cb =>{
    console.log('Tarefa Antes2!')
    return cb()
}

function copiar(cb){
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])//vai pegar os arquivos

    //a definiçao acima pode ser substituida por gulp.src('pastaA/**/*.txt') isso quer dizer que qualquer arquivo txt dentro da pasta, vai ser selecionado.
    
    .pipe(gulp.dest('pastaB'))//A funcao .pipe faz transformações nos arquivos selecionados acima. Nesse caso, ela vai pega-los e coloca-los numa pasta criada por ela mesma, a pastaB
    return cb()
}

const fim = cb =>{
    console.log('Tarefa fim!')
    return cb()
}
module.exports.default = series(
    parallel(antes1,
    antes2),
    copiar,
    fim,
)