const { promises } = require("fs");

function imprimirDepoisDe (segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //resolve é utilizado em caso de sucesso, reject em caso de erro
        }, segundos*1000)
    })
}

imprimirDepoisDe(3, 'Utilizando resolve').then(frase => frase.concat('!')).then(novaFrase => console.log(novaFrase))
//Para imprimir uma mensagem de erro é necessário utilizar o reject no lugar do resolve e o catch ao invés do then