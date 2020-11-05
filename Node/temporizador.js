const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 3', () =>{
    console.log('Executando tarefa!', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tarefa.')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, () =>{
    console.log('Executando tarefa 2!', new Date().getSeconds())
})
