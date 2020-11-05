//Funções arrow
const soma = (a, b) => a+b  //quando não abre bloco ele assume o return implicitamente, se abrir bloco tem chamar o return 

//Arrow function (this)
const lexico1 = () => console.log(this=== exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function texto (padrao = 'node') {
    console.log(padrao)
}
texto()
texto('Sou mais forte')

//Operador rest
function total(...numero){
    let soma = 0
    numero.forEach(n => soma += n)
    return soma
}

console.log(total(2, 4, 7))