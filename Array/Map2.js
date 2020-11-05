const carrinho = [
    '{"nome": "Lápis", "preço": 3.80}',
    '{"nome": "Caneta", "preço": 5.80}'
]

// transformar em arrays apenas de preço

const paraObj = json => JSON.parse(json)
const apenasPreço = produto => produto.preço 

const resultado = carrinho.map(paraObj).map(apenasPreço)

console.log(resultado)