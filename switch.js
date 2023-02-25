const imprimirResultado = function(nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
        console.log('Quadro de honra')
        break
        case 7:
        case 6: 
        console.log('Aprovado')
        break
        case 4:
        case 0: 
        console.log('Reprovado')

    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)