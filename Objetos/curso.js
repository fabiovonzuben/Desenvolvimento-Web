/*console.log('TESTE')
let qualquer = 'legal'
console.log(typeof qualquer)
const nome = 'Xandi'
const template =`
da bahia`
console.log(nome, template)*/

const x = 'global'

function fora(){
    const x = 'local'
    let dentro = n =>{
        return x
    }
    return dentro
}

let minhaFuncao = fora()
console.log(minhaFuncao())

class pessoa{

    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

let p1 = new pessoa('Fábio')
p1.falar()

const pessoa2 = nome => {
    return{
        falar: function() { 
            console.log(`Meu nome é ${nome}`)
    }
    }
}

let p2 = pessoa2('Fabio')
p2.falar()