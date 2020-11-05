const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa']
pilotos.pop() //retira o último valor do array
pilotos.push('Verstappen') // adiciona o valor na última posição
pilotos.shift() //remove o primeiro
pilotos.unshift('Hamiltos') // adiciona na primeira posição

const algunsPilotos = pilotos.slice(2) //recorta parte do array começando do índice indicado até o índice anterior indicado depois da vírgula
const outrosPilotos = pilotos.slice(0,3)
console.log(pilotos)
console.log(algunsPilotos)
console.log(outrosPilotos)