
// ARRAY INDEXADO SIMPLES
function writeLine() {
    console.log('_______________')
}
function writeData(data) {
    return (
        console.log(data)
    )
}

let names = new Array('Omar', 'Sly') // sintaxe tradicional
let country = [
    'Brasil', 'China', 'Brasil', 'canadá' 
] // sintaxe literal
/* 
    let names = []
    names[0] = 'Omar'
    names[1] = 'Sly'

for (let index = 0; index < names.length; index++) {
    console.log(names[index])
}
*/
// OTHER FORM
for (var index in names) {
    console.log(names[index])
}

// [length] retorna a quantidade de elementos no array
writeLine()
writeData(country.length)
/* 
    todos os objectos são um array, logo uma String é um array
*/

let test = 'eu sou um array, mesmo sendo um tipo primitivo'
writeLine()
writeData(test.length)
writeData(test[7])
// percorrendo a string 'test'
for (let index = 0; index < test.length; index++) {
    console.log(test[index])
}

// [reverse()] inverte a ordem do array
writeLine()
writeData('reverse: ' +country.reverse())

// [sort()] ordena o array alfabeticamente

//writeData('sort: ' +country.sort())
writeLine()
country.sort( function (a, b) {
    return a.localeCompare(b)
    //return (a <= b) ? -1 : 1
})
console.log('new sort')
console.log(country)
writeLine()
const languages = [
    {
        name: 'Python',
        year: 1991
    },
    {
        name: 'C',
        year: 1972
    },
    {
        name: 'Java',
        year: 1995
    }
]
// retorno = -1 ou 0 os elementos ficam onde estão
// retorno = 1 os elementos são ordenados

languages.sort(function (a, b) {
    return a.year - b.year
})
console.log('Year sorted')
console.log(languages)

languages.sort(function (a, b) {
    return (a.name <= b.name) ? -1 : 1
    //return a.name.localeCompare(b.name)
})
console.log('Name sorted')
console.log(languages)


 
// ordenando números
const numbers = [1,2,3,6,7,8,10,5,6,1,2,20,100,78,0]
writeLine()
console.log(numbers)

numbers.sort( (a, b) => {
    return a - b
})
console.log(numbers)

// [fill()] preenche os elementos de acordo com a 
// posição de início e fim
writeLine()
const lang = []
for (i in languages) {
    lang[i] = languages[i].name
}
console.log(lang)
lang.fill('JavaScript')
console.log(lang) // preenche todo o array com 'JavaScript'
lang.fill('Python', 1) // preencha da posição 1 pra frente
console.log(lang)
lang.fill('Java', 2)
console.log(lang)
writeLine()
/* 
    [splice()] apartir do índice X remova esse índice e mais
    X elementos e adiciona X elementos apartir dos índices removidos
 */
writeData('splice: 0, 2 SA: '+country.splice(0,2,'South África', 'angola'))
writeData(country)
// dá apenas pra remover uma posição específica também
writeData('splice 0, 1: ' + country.splice(0, 1))
writeData(country)

// [push()] adiciona elemento no fim do array e retorna a nova length do array
writeData(country.push('Brasil'))
writeData(country.push('Holanda'))
writeData(country)

// [pop()] remove o último elemento do array e retorna-o
writeData(country.pop())
writeData(country)

// [unshift()] adiciona elemento no início do array e retorna a nova length do array
writeData(country.unshift('Angola'))
writeData(country)

// [shift()] remove o primeiro elemento do array e retorna-o
writeData(country.shift())
writeData(country)