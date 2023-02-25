const notas = [6.7, 8.1, 3, 2, 4, 6]

for (let i in notas) {
    console.log(i, notas[i]) // pegar atribuitos de um indice
}

const pessoa = {
    nome: 'Camilla',
    idade: 27,
    peso: 65

}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`) // pegar atributos de um objeto
}
