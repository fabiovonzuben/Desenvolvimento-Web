const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = e => e.pais == 'China'
const mulher = e => e.genero == 'F'
const menorSalario = (func, funcAtual) =>{
    return func.salario<funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    console.log(funcionarios.filter(chineses).filter(mulher).reduce(menorSalario))
})




