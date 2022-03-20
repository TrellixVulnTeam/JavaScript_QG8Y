const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 0', function(){
    console.log('Executando Tarefa 1', new Date().getSeconds())
})//essa função vai executar a cada 5 segundos, de qualquer minuto, as 9 horas, de qualquer mes de qualquer ano aos domingos. 
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando a Tarefa 1!')
}, 20000) //Essa função vai cancelar a função anterior depois de 20 segundos de execução do codigo

const regra = new schedule.RecurrenceRule() // Essa função é basicamente igual a outra
regra.dayOfWeek = [new schedule.Range(0, 6)] //vai executar de domingo a sabado
regra.hour = 9 //sempre as nove horas
regra.second = 30 // sempre no segundo 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})