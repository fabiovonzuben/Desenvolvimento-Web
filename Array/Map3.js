Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Lápis", "preço": 3.80}',
    '{"nome": "Caneta", "preço": 5.80}'
]

// transformar em arrays apenas de preço

const paraObj = json => JSON.parse(json)
const apenasPreço = produto => produto.preço 

const resultado = carrinho.map2(paraObj).map2(apenasPreço)

console.log(resultado)