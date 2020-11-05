const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

//Adicionar
app.post('/produtos', (req, res, next) => {
        const produto = bancoDeDados.SalvarProdutos({
            nome: req.body.nome,
            preco: req.body.preco
        })
    res.send(produto) //JSON
})

//Editar
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.SalvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
res.send(produto) //JSON
})

//Excluir
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.edit)
    res.send(produto)
})


app.listen(porta, () =>{
    console.log(`Servidor escutando porta ${porta}.`)
})