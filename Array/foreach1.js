const aprovados = ['Ágata', 'Jéssica', 'Bruno', 'Fábio', 'Ricardo', 'Roberto']

aprovados.forEach(function(indice, nome, array){
    console.log(`${indice} ${nome}`)
    console.log(`${array}`)
})

aprovados.forEach((ikl,nome) => console.log(`${nome}`))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)