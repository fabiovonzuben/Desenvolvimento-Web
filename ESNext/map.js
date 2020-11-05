//map é uma forma mais flexivel de manipular objetos, que não tem nada a ver com a função map para manipular array
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)// não funciona de forma direta como objeto, é necessário o get
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function(){}, 'função'],
    [{}, 'Objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')//o map não aceita repetição na chave, nesses casos o atributo é reescrito

console.log(chavesVariadas)
