const alunos = [
    {nome: "Fábio", nota: 10, bolsista: true},
    {nome: "Rogério", nota: 8, bolsista: true},
    {nome: "Ivan", nota: 9, bolsista: false},
    {nome: "Alan", nota: 10, bolsista: false},
]

const resultado = alunos.map(s=> s.nota).reduce(function(acumulado, valor){
    console.log(acumulado, valor)
    return acumulado+valor
})

console.log(resultado)