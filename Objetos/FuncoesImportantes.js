const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true, //será enumerado/aparecerá na lista de chaves do objeto pessoa
    writable: false, //não poderá ser reescrito/modificado
    value: '01/08/2020'
})

pessoa.dataNasc = '18/08/2020'
console.log(pessoa.dataNasc)
console.log(Object.keys(pessoa))

//Object assign (ECMAScript 2016)
const destino = {a:1}
const o1 = {b:5, c:2}
const o2 = {a:7, d:7}
const obj = Object.assign(destino, o1, o2)

Object.freeze(obj) // congela o objeto, não permitindo alterações
obj.c = 1234
console.log(obj)
