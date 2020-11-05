const alunos = [
    {nome: "Fábio", nota: 10, bolsista: true},
    {nome: "Rogério", nota: 8, bolsista: true},
    {nome: "Ivan", nota: 9, bolsista: false},
    {nome: "Alan", nota: 10, bolsista: false},
]

//Desafio1: todos s alunos são bolsistas?
    //minha resolução
const desafio1 = alunos.map(s => s.bolsista).reduce(function(ac , valor){
   if(ac && valor){
        return true
    }else{
        return false
    }
})

console.log(desafio1)

    //resolução do professor
    const cond = (ac, valor) => ac&&valor
    const desafio11 = alunos.map(a => a.bolsista).reduce(cond)

    console.log(desafio11)

//Desafio 2: algum aluno é bolsista?
const cond2 = (ac, valor) => ac || valor
const desafio2 = alunos.map(a => a.bolsista).reduce(cond2)

console.log(desafio2)