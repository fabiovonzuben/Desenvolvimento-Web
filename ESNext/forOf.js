for (let letra of 'Fabio'){
    console.log(letra)
}

const assuntos = ['Map', 'Set', 'Promise']

for (let assunto of assuntos){  //o in retorna o indice o of o valor
    console.log(assunto)
}

const assuntosMap = new Map([
    ['map', {abordado: true}],
    ['set', {abordado: true}],
    ['promise', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}