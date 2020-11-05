const produtos = [
    {nome: 'notebook', preço: 4999, fragil: false},
    {nome: 'iPad', preço: 3499, fragil: true},
    {nome: 'Copo de Vidro', preço: 15, fragil: true},
    {nome: 'Copo de Plástico', preço: 10, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preço>500
}))

const caro = e => e.preço>500
const fragil = e => e.fragil

console.log(produtos.filter(caro).filter(fragil))