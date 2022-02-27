// extraindo valores de arrays
const [Name, Author, Year] = 'C; Dennis Ritchie; 1972'.split(';')
const [ ,developer, timeLine] = 'JavaScript; Brendan Eich; 19795'.split(';')
console.log(Name, Author, Year);
console.log(developer, timeLine);

// definindo valor padrão
let language = 'Java; James Goslin'.split(';')
let [lang = '-', author_name = '-', time = '-'] = language
console.log(lang, author_name, time)

// extraindo valores de objetos
const lang_python = {
  name: 'Python',
  author: 'Guido Van',
  year: 1991
}
// é necessário referenciar as chaves das propriedades
const {name, author, year} = lang_python
console.log(name, author, year);

// podemos definir nomes próprios para as variáveis
const {name: $name, author: $author, year: $year} = lang_python
console.log($name, $author, $year)

// extraindo objetos dentro de outros objetos

let lang_C = {
  name: 'C',
  author: 'Dennis Ritchie',
  year: 1972,
  company: {
    name: 'Bell Labs'
  }
}
let {name: $_N, author: $_A, year: $_Y, company: {name: $_name}} = lang_C
console.log($_N, $_A, $_Y, $_name);

// aplicando nos parâmetros de uma função
const sum = function ([a, b]) {
  return a + b
}
console.log(sum([4, 4]));
const subtract = ({a: x, b: y}) => {
  return x - y
}
console.log(subtract({a: 5, b: 9}))
