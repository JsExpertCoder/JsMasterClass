/*
    usa-se o {in} para verificar se uma determinada pro-
    priedade existe em um objecto, resultando em um valor
    booleano
*/

let Computer = {
    memory: 'DDR3',
    HD: 500
}

console.log('memory' in Computer)
console.log('-----------------------------')
console.log('color' in Computer)

