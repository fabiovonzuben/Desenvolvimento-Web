//é uma estrutura que não aceita repetição
const times = new Set()
times.add('Vasco').add('Flamengo').add('São Paulo').add('Vasco')
console.log(times)
console.log(times.has('Sao Paulo'))//a escrita tem que ser identica
times.delete('Flamengo')
console.log(times.size)

const nomes = ['Fabio', 'Mirele', 'Eduardo', 'Beatriz', 'Fabio']
const nomesSet = new Set(nomes) //exclui valores iguais do array
console.log(nomesSet)