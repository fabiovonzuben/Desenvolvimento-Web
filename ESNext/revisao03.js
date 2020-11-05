//object.values / object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notação literal
const nome = 'Fabio'
const pessoa = {
    nome,
    falar(){
        return 'oi galera!'
    }
}
console.log(pessoa.nome, pessoa.falar())

//classe
class animal {}
class cachorro extends animal{
    falar(){
    return 'auuuuu'
    }
}
console.log(new cachorro().falar())