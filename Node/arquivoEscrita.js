const fs = require('fs')

const produto = {
    nome: "notebook",
    preco: 2400,
    desconto: 0.1
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
} )