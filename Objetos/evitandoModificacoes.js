//Object.preventExtensions / não premite adicionar atributos ao  objeto
const produto = Object.preventExtensions({
    nome: 'lápis', preco: 1.99, tag: 'promoção'
})
console.log('Extensivo:', Object.isExtensible(produto))
produto.desc = 20
delete produto.tag
produto.nome = 'borracha'
console.log(produto)

//Object.seal / não permite adicionar nem excluir, apenas modificar
const pessoa = {nome: 'Juliana', idade:'29'}
Object.seal(pessoa)
pessoa.altura = 1.78
pessoa.nome = 'Xandi'
delete pessoa.nome
console.log(pessoa)

//Object.freeza / seal + preventExtensions, não pode alterar, excluir e editar