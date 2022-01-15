var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundos = agora.getSeconds()
console.log(`São exatamente ${hora}:${minuto}:${segundos}`)
if(hora >= 5 && hora < 12){
    console.log('Esta de manhã')
}
else if(hora < 18){
    console.log('Esta de tarde')
}
else{
    console.log('Esta de noite')
}