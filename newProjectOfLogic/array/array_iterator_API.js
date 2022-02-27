// ARRAY INDEXADO MULTIDIMENSIONAL

let $pessoas = [
    [
        'Walter'
    ],
    [
        'Mobile'
    ],
    [
        19
    ]
]

// OTHER FORM TO CREATE
let devS = new Array(
    new Array(
        'Félix',
        new Array(
            ['React'], // OTHER ARRAY
            ['React Native'] // OTHER ARRAY
        )
    ),
    new Array(
        'Mobile',
        ['Rubik', 'JS']
    )
    // quantos for necessários
)
for (let index in devS) {
    let i = 0
    console.log(devS[index][index])
}
for (let index in $pessoas) {
    let i = 0
    console.log($pessoas[index][i])
}

// ARRAY ASSOCIATIVO 
let cursos = {
    mobile:'React Native',
    desktop: 'Electron',
    web: 'Javascript'
}
console.log(cursos.mobile)
//  OTHER FORM
console.log(cursos['desktop'])

// FUNÇÕES  EM ARRAY

let $array = [
    'React native', 'Javascript puro',
    'React', 'Electron', 10
]
console.log('----------------FOREACH-----------------')
// [forEach] percorre o array normamente
$array.forEach(function (element, index) {
    console.log(element)
})

console.log('----------------FILTER-----------------')
/* 
    [filter()] retorna um novo array contento somente os elementos
    que retornaram true na função passada por parâmetro
*/
let editors = ['atom', 'sublime', 'visual studio Code']
function filterArray (elem, ind, obj) {
    return elem.indexOf('a') >= 0
}
console.log(editors.filter(filterArray))

const newThree = editors.filter( (editor) => {
    return editor.indexOf('a') >= 0
})
console.log(newThree)

const frameworks = [
    {
        name: 'Angular.js',
        contributors: 1548
    },
    {
        name: 'Ember.js',
        contributors: 746
    },
    {
        name: 'Vue.js',
        contributors: 240
    }
]

const lessThan100 = frameworks.filter((framework) => {
    return framework.contributors < 1000
})
console.log(lessThan100)

/* 
    [find()] retorna o primeiro elemento que retornou true na 
    função passada por parâmetro
*/
console.log('----------------FIND-----------------')
const find_elem = frameworks.find( (result) => {
    return result.name === 'Angular.js'
})
console.log(find_elem)


console.log('----------------SOME-----------------')
/* 
    [some()] retorna true se 1 ou mais elementos retornam true na
    função passada por parâmetro
*/
let $arrayTwo = [
    true, 
    false,
    'string'
]
function arrayElementsTwo (element, index, object) {
    return (
     // typeof element == 'string'

     typeof element == 'boolean'
        /* 
            pelo menos um elemento do array é do tipo
            primitivo boolean, retornando em true
        */

     // typeof element == 'number'
    )
}
console.log($arrayTwo.some(arrayElementsTwo))

let some_elem = frameworks.some((framework) => {
    return framework.name.includes('js') // existe 'js' no name
    //return framework.name.indexOf('js') > 0
})
console.log(some_elem)
/* 
    [every()] retorna true se todos os elementos retornam true 
    na função passada por parâmetro
*/
console.log('----------------EVERY-----------------')
function arrayElements (element, index, object) {
    return (
        /* 
            nem todos elementos do array são do tipo
            primitivo string, logo retornará em false
        */
        typeof element == 'string'
     // typeof element == 'boolean'
     // typeof element == 'number'
    )
}
console.log($array.every(arrayElements))

let every_elem = frameworks.every((framework) => {
   return framework.contributors > 1000
})
console.log(every_elem)

/* 
    [map()] retorna um novo array com base no retorno da função
    passada por parâmetro
*/
console.log('----------------MAP-----------------')
const numbers = [
    1,2,34,5,767
]
function mapArray (elemen, indx, objc) {
    return elemen *= 11
}

function mapArrayTwo (elemen, indx, objc) {
    return elemen = `${elemen.toUpperCase()} map`
}

console.log(numbers.map(mapArray))
console.log(editors.map(mapArrayTwo))

console.log('----------------OTHER MAP-----------------')
let novo = numbers.map((number) => {
    console.log(number)
    number += 1
    return number
})
console.log(novo)

frameworks_name = frameworks.map((framework) => {
    return framework.name
})
console.log(frameworks_name)

/* 
    [map()] retorna um novo valor com base no retorno da função
    passada por parâmetro
*/
console.log('----------------REDUCE-----------------')
let total_of_contributors = frameworks.reduce( (total, framework) => {
    return total + framework.contributors
}, 0)
console.log(total_of_contributors)


