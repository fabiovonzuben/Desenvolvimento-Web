const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//OutgoingMessage.prototype.getHeader()
//OutgoingMessage.prototype.setHeader()

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (entrada, resposta) =>{
    console.log(entrada.body)
    resposta.send('<h1>Parabéns lek!!!</h1>')
})

app.post('/usuarios/:id', (entrada, resposta) =>{
    console.log(entrada.params.id)
    console.log(entrada.body)
    resposta.send('<h1>Parabéns lek, conseguiu denovo!!!</h1>')
})

app.listen(3030)

//http server .
// http-server -y 9090
//node servidor.js