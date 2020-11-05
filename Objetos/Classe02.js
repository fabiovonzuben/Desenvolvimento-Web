//Exemplo de herança em classe (mesma ideia do herança de objetos citada no herança2.js)

class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo { //extends é a forma de atribuir outra classe como prototipo, em objetos é o __proto__
    constructor(sobrenome, profissão= 'Professor'){
        super(sobrenome) // é a forma de chamar atributo da função construtora ou super classe
        this.profissão = profissão
    }
}

class Filho extends pai {
    constructor(){
        super('Silva') //atribui o valor a super classe que no caso é o sobrenome
    }
}

const filho = new Filho
console.log(filho)