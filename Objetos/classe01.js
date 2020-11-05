class lancamento {
    constructor(nome = 'genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addlancamentos(...lancamentos){
        lancamentos.forEach(l=>this.lancamentos.push(l))
    }
    sumário(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l=>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento ('salario', 45000)
const contaDeLuz = new lancamento('luz', -270)

const contas = new cicloFinanceiro(08, 2021)
contas.addlancamentos(salario, contaDeLuz)
console.log(contas.sumário())

//fazer exercicios
class apagar {
    constructor(ref, valor){
        this.conta = ref
        this.valor = valor
        this.contas = []
    }
    adcContas(...apagar){
        apagar.forEach(cnt=>this.contas.push(cnt))
    }
    somarc(){
        let cont = 0
        this.contas.forEach(c=>{
            cont+=c.valor
        })
        return cont
    }
}

const energia = new apagar('energia', 300)
const agua = new apagar('água', 120)
agua.adcContas

console.log(agua.somarc())