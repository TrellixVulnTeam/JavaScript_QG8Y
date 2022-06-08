const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    gulp.src('src/**/*.js')
    .pipe(babel({
        Comments: false, //vai tirar os comentarios
        presets: ["env"] //busca a versão mais nova de js possivel no ncodigo
    }))// vai pegar tudo o que tiver mais de novo em js nos codigos js e vai transformar em uma versao mais antiga e compativel

    .pipe(uglify())//vai minificar os codigos selecionados 
    .on('error', err=> console.log(err))//caso aconteca algum evento ate aqui, nesse caso o evento é um erro, aciona a função que imprime o erro
    .pipe(concat('codigo.min.js'))//vai concatenar os codigos em um unico codigo
    .pipe(gulp.dest('build/js'))
    return cb()
}

exports.default = series(padrao)