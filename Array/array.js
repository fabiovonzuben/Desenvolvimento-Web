console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados[2])

aprovados= ['Bia', 'Carlos', 'Ana']
aprovados[3] = 'Paulo'
aprovados.push ('Abila')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

aprovados.splice(1, 0, 'Fábio')
console.log(aprovados)

