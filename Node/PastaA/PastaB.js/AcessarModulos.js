const moduloA = require('../../ModuloA')   //pode passar o caminho relativo clicando com o botão direito sobre o arquivo que deseja inserir, copy path (C:\Users\lucas\Documents\Cursos\Curso Web\curso.js\Node\ModuloA.js)
console.log(moduloA.ola)

//const saudacao = require('saudacao')   //nesse exemplo ele criou uma pasta chamada saudacao dentro da pasta node modules, e dentro da pasta criou um arquivo chamado indexof, dessa forma o require busca diretamente a pasta indexof do modulo requirido.

const c = require('./PastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)