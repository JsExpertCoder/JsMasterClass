// objeto que armazena um conjunto de chaves e valores
// que podem ser de qualquer tipo de dado

const information = new Map([['seconds', 1], ['minuts', 60], ['hours', 3600]])

// retorna a quantidade de elementos
console.log(information.size)

// adiciona um par de chave e valor
information.set('name', 'Gabriel Dechich')
information.set('age', 27)
information.set('area', 'game')

// itera sobre o mapa
information.forEach((value, key) => {
    console.log(key, value)
})

// retorna true se a chave existir
console.log(information.has('seconds'))
console.log(information.has('days'))

// retorna o valor de uma determinada chave
console.log(information.get('seconds'))
console.log(information.get('minuts'))
console.log(information.get('hours'))
console.log(information.get('name'))
console.log(information.get('age'))

// remove um par de chave o valor
information.delete('seconds')
information.delete('minuts')
console.log(information.delete('hours')) // true
console.log(information.delete('days')) // false

// -----------------------------------------
console.log(Array.from(information))
console.log(information.size)
// ---------------------------------------

// remove todos os elmentos
information.clear()
console.log(Array.from(information))
console.log(information.size)

/*
com os objcts se as chaves forem palavras reservadas serão logo
convertidas para strings, com os maps as chavess podem ser palavras
reservadas
*/
console.log('==================================')
const obj = {}
Object.defineProperty(obj, 10, {
    value: 'Number',
    enumerable: true,
    writable: true
})
Object.defineProperty(obj, '10', {
    value: 'String',
    enumerable: true,
    writable: true
})
Object.defineProperty(obj, true, {
    value: 'Boolean',
    enumerable: true,
    writable: true
})
Object.defineProperty(obj, 'true', {
    value: 'String',
    enumerable: true,
    writable: true
})
console.log(obj[10])
console.log(obj['10'])
console.log(obj[true])
console.log(obj['true'])
console.log(obj['true'])
console.log(obj)

const map = new Map()
map.set(10, 'Number')
map.set('10', 'String')
map.set(true, 'Boolean')
map.set('true', 'String')
console.log(map.get(10))
console.log(map.get('10'))
console.log(map.get(true))
console.log(map.get('true'))
console.log(map)