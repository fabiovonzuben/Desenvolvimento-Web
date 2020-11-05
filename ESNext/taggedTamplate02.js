function moedaReal (partes, ... valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join(' ')
}
const preco = 348.8
const parcela = 50

console.log(moedaReal `Tênis ${preco} ou 7x de ${parcela}`)