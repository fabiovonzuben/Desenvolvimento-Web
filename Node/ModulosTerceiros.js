//Não consegui instalar o lodesh pelo comando npm i lodash, 
//Encontrei uma solução no stackoverflow, utilizando o comando npm install snyk --save, o qual instalou diversas outras bibliotecas, entre elas o lodesh

const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000)