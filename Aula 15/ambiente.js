// aula de array

let num = [5,8,9,3]

console.log(num) // aparece com colchetes
console.log(`array é ${num}`) // sem colchetes

num[3] = 6 // substitui no index 3
num[4] = 2 // adiciona index
console.log(num)

num.push(7) // adiciona no fim do array
console.log(num)

console.log(num.length) // aparece qntos elementos tem
// length não é metodo, é um atributo

num[10] = 0
console.log(num) // printa [ 5, 8, 9, 6, 2, 7, <4 empty items>, 0 ]

num.sort() // ordena os elementos
console.log(num)

// printando cada elemento separado (aparece indices vazios tbm)
for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem valor/conteudo ${num[i]}`)
}

// mesmo o de cima porém não mostra os indices vazios
for (let i in num) {
    console.log(`A posição ${i} tem valor/conteudo ${num[i]}`)
}

console.log(num.indexOf(5)) // vai procurar o conteúdo com '5'e mostrar o indice
console.log(num.indexOf(4)) // como não possui conteudo '4' vai printar -1

let pos4 = num.indexOf(4)
if (pos4 == -1) {
    console.log('valor não encontrado')
} else {
    console.log(`está na posição ${pos4}`)
}
