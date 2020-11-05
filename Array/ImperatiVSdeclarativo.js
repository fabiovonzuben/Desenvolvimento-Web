const alunos = [
    {nome: "Julio", nota: 7.5},
    {nome: 'Maria', nota: 8.9}
]

//imperativo
let total1 =0
for(let i = 0; i<alunos.length; i++){
    total1+=alunos[i].nota
}
console.log(total1/alunos.length)

//declarativo
const nota = n => n.nota
const soma = (total, atual) => total+atual
console.log((alunos.map(nota).reduce(soma))/alunos.length)
