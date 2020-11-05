//Processa o template dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const cidade = 'Limeira'
const estado = "SP"
console.log(tag `${cidade} fica no estado de ${estado}`)