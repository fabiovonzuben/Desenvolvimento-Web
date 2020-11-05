Array.prototype.forEach2 = function(callback){
    for (let i=0; i<this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Ágata', 'Jéssica', 'Bruno', 'Fábio', 'Ricardo', 'Roberto']

aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice} ${nome}`)
    console.log(`${array}`)
})

const teste = [1, 2, 3]

function brincs(){
    const ary = []
    let res = 0
    this.ary.forEach(l => {
        res = l*2
        ary.push
    })
}

console.log(teste.brincs())