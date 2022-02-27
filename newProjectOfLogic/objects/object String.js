// OBJECT STRING

let name = 'Michael'
/* 
    como vamos fazer manipulações então
    podemos instanciá-la já como um objecto
    ou não. sempre que não instanciamos a 
    variável como um objecto, e fazemos alguma
    manipulação o JS torna essa variável em um 
    objecto e faz a manipulação.

    exe: name.length
    de baixo dos panos: new String(nome).length 
*/

// OBJECT STRING
console.log('_________OBJECT STRING________')
let $_name = new String('FéliX')
let $_text = new String('Javascript React React Native')
// [valueOf()()] retorna o valor dentro do objecto
console.log($_name.valueOf()) 

// [toLowerCase()] joga a string pra caixa baixa
console.log($_name.toLowerCase())

// [toLowerCase()] joga a string pra caixa alta
console.log($_name.toUpperCase())

// [length()] retorna o tamanho da string
console.log($_name.length)

// [charAt()()] retorna um carácter específico da string
console.log($_text.charAt(11))

// [charCodeAt()()] retorna um elemento da string em unicode
console.log($_text.charCodeAt(9))

// [concat()()] concatena uma ou mais string
console.log($_text.concat(' and Electron'))

/*
 [fromCharCode()()] converte o valor unicode para carácter, pod-
 e-se informar vários valores unicode
 sendo um método estático, ele deve ser aplicado
 ao próprio objecto [String()]
*/
console.log(String.fromCharCode(1000, 2000, 100000, 114))

 /* 
    [indexOf()] retorna a posição da primeira ocorrência de 
    uma string ou letra, se não houver essa letra retorna (-1)
 */
console.log(`indexOf: ${$_text.indexOf('Electron')}`)

/* 
    [search()] retorna a posição da primeira ocorrência de 
    uma string ou letra
*/
console.log(`search: ${$_text.search('Java')}`)

/* 
    [match()] encontra uma expressão regular na string
*/
console.log(`match: ${$_text.match(/a/g)}`)

/*  
    [lastIndexOf()] retorna a posição da última ocorrência de 
     string ou letra, se não houver essa letra retorna (-1) 
*/
let $_txt = new String('Javascript React React Native and Electron')
console.log($_txt.lastIndexOf('R'))
console.log($_txt.lastIndexOf('React'))

// [replace()] substitui a primeira ocorrência de uma string pela outra
console.log($_txt.replace('React', 'Vue.js'))
// substitui todas as ocorrências de [a] para [A]
console.log($_txt.replace(/a/g, 'A'))

/* 
    [includes()] verifica se existe na string
    a palavra passada por parametro
*/
console.log(`includes: ${$_txt.includes('React Native')}`)

/* 
    [startsWith()] verifica se a string começa com a palavra
    passada por parametro
*/
console.log(`start with: ${$_txt.startsWith('Javascript')}`)

/* 
    [endsWith()] verifica se a string termina com a palavra
    passada por parametro
*/
console.log(`ends with: ${$_txt.endsWith('and Electron')}`)

/* 
    [localeCompare()] retorna -1 se a length da string passada 
    por parametro for maior que a testada, 0 se for igual, e 1 
    menor
*/
console.log(`localeCompare 1: ${'C++'.localeCompare('Ruby')}`)
console.log(`lacaleCompare 2: ${'Python'.localeCompare('Java')}`)
console.log(`localeCompare 3: ${'JavaScript'.localeCompare('JavaScript')}`)

/* 
    [subString()] extrai os carácteres entre os dois índices especificados
    e se o primeiro índice for maior que o último então ele inverte estes
    índices em forma cresecente
*/
console.log($_txt.valueOf())
console.log($_txt.substring(5, 8))

// apagando desde o último carácter
console.log($_txt.substring(0, $_txt.length - 1))


// usando em conjunto como o [lastIndexOf()]
console.log($_txt.substring($_txt.lastIndexOf(`R`), $_txt.lastIndexOf('e') - 7))

/* 
    [subStr()] extrai os carácteres entre o primeiro índice indicado e vai até 
    o último índice indicado
*/
console.log($_txt.substr(5, 8))

/* 
    [slice()] tem a mesma função que o [subString()], porém,
    se o primeiro índice for maior que o último então sá um erro
    , diferente do [subString()] que trata esse erro
*/
console.log(` slice() whithout error: ${$_txt.slice(0, 10)}`)

// gerando um erro no slice() com o [try catch]
try {
    /* 
        no [slice()], diferente do [subString()] o índice inicial
        não pode ser maior que o índice final, logo, ele gera um erro
    */
    throw console.log($_txt.slice(8, 0))
} catch (error) {
    console.log(error)
}
// pegando de [x] em diante
console.log(`slice 1: ${$_txt.slice(10)}`)
// pegando de trás pra frente
console.log(`slice 2: ${$_txt.slice(0, -31)}`)
// pegando apartir de trás
console.log(`slice 3: ${$_txt.slice(-8)}`)

/* 
    [split()] recorta a string com base num elemento específico
    e organiza os 'pedaços' em um [array]
*/

console.log(`\n splite ${$_txt.split(' ')[0]}`)

// usando com o [for()]
for (let index = 0; index < 6; index++) {
    console.log(`\n splite ${index} ${$_txt.split(' ')[index]}`)
}

/* 
    [padStart()] acrescente um carácter números/s ou string a
    uma string letra número/s até este conter [x] de length 
    só funciona em strings, se for um número tera de ser convertido
    para string, e se o valor a acrescentar for <= a string ele não
    acresenta
*/
// na string [script] acresenta [Java] no início até ter 20 de lenth
console.log(`padStart 1: ${'Script'.padStart(20, 'Java')}`)

// na string [script] acresenta [Java] início até ter 10 de lenth
console.log(`padStart 1: ${'Script'.padStart(10, 'Java')}`) // retorno: JavaScript

// na string [1010] acrescenta o [0] início até ter 32 de lenth
console.log(`padStart 3: ${('1010').padStart(32,0)}`)

// [padEns()] faz o mesmo que o padSart(), porém coloca no fim
console.log(`padEnd 1: ${'C'.padEnd(3, '+')}`)
console.log(`padEnd 2: ${'Hacker'.padEnd(9, '001')}`)

// [repeat()] repete algo [x] vezes
console.log(`repeat 1: ${'C'.concat('+'.repeat(2))}`)
console.log(`repeat 2: ${'C'.repeat(2)}`)
console.log(`repeat 3: ${'C'.concat('#'.repeat(1))}`)

// trim() retira os espaços no início e no fim
console.log(`trim 1:${' Self '.trim()}`)
// trimLef() retira os espaços no início
console.log(`trim 1:${' Self '.trimLeft()}`)
// trimRight() retira os espaços no fim
console.log(`trim 1:${' Self '.trimRight()}`)


/* 
    e por fim temos a [string HTML wrapper methods]
    que consiste em aplicar tags HTML em textos
*/
