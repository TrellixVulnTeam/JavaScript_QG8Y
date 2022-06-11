const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}
function servidor(cb){
    watch('src//**/*.scss', ()=> gulp.series('appCSS')())
    watch('src//**/*.js', ()=> gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', ()=> gulp.series('appIMG')())
    watch('src//**/*.html', ()=> gulp.series('appHTML')()) 
    //sempre que o aruivo de um determinado tipo mudar, essa funçao vai acionar a task correta para ele
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}