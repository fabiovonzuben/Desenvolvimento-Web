const teste = {
    nome: 'Fábio',
    idade: '27',
    peso: '87'
}

const p2 = new Object

const treino = Object.create(teste, {
    nome: {value: 'Bia', writable: false, enumerable: true},
    idade: {value: '30', writable: true, enumerable: true}
}
)

console.log(teste.nome)
console.log(treino)
console.log(treino.idade)

teste.altura = 1.8
console.log(teste)
console.log(treino)