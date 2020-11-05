//operador ... rest(juntar)/spread(espalhar)
const cadastro = {nome: 'Fabio', idade: 27}
const clone = {ativo: true, ...cadastro}
console.log(clone)

const alunos = ['Fabio', 'Lucas', 'Mirele']
const familia = [...alunos, 'Beatriz', 'Livia', 'Eduardo']
console.log(familia)