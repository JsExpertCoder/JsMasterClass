/*
	JSON - JavaScript Object Notation, é um formato de intercâmbio de dados
	derivado da linguagem JavaScript que foi descoberto por Douglas Crockford
	e padronizado pela ECMA-404, serve para trocas de dados entre sistemas
										TIPOS DE DADOS QUe JSON SUPORTA
										 - Number
										 - String
										 - Boolean
										 - Object
										 - Array (Object)
										 - null
*/

// JSON.stringfy - converte um determinado tipo de dado para JSON 
// String retorna entre ' "" ' todo o resto retorna entre ''

console.log('______JSON.stringify_______')

let z = JSON.stringify(10), y  = JSON.stringify('JavaScript'),
  x = JSON.stringify(true), w = JSON.stringify(false)
  v = JSON.stringify({name: 'Self', paradigm: 'OO'})
  u = JSON.stringify([1,2,3,4,5,6,6,7,8,9])
  t = JSON.stringify(null)

console.log(`${z}: ${typeof z}`) // '10'
console.log(`${y}: ${typeof y}`) //  "JavaScript"
console.log(`${x}: ${typeof x}`) // 'true'
console.log(`${w}: ${typeof w}`) // 'false'
console.log(`${v}: ${typeof v}`) // '{"name":"Perl","paradigm":"OO"}'
console.log(`${u}: ${typeof u}`) // '[1,2,3,4,5,6,7,8,9]'
console.log(`${t}: ${typeof t}`) // 'null'

// JSON.parse -  converte de JSON para um determinado tipo de dado

console.log('______JSON.parse_______')

console.log(`${JSON.parse('10')}: ${typeof JSON.parse('10')}`) // 10
console.log(`${JSON.parse('"JavaScript"')}: ${typeof JSON.parse('"JavaScript"')}`) // "JavaScript"
console.log(`${JSON.parse('true')}: ${typeof JSON.parse('true')}`) // true
console.log(`${JSON.parse('false')}: ${typeof JSON.parse('false')}`) // false
//console.log(`${JSON.parse('{"name": "Self", "paradigm": "OO"}')}: ${typeof JSON.parse('{"name": "Perl", "paradigm": "OO"}')}`) // {name: 'Perl', paradigm: 'OO'}
//console.log(`${JSON.parse('[1,2,3,4,5,6,7,8,9]')}: ${typeof JSON.parse('[1,2,3,4,5,6,7,8,9]')}`) // [1,2,3,4,5,6,7,8,9]
console.log(JSON.parse('[1,2,3,4,5,6,6,7,8,9]'))
console.log(JSON.parse('{"name": "Self", "paradigm": "OO"}'))
console.log(`${JSON.parse('null')}: ${typeof JSON.parse('null')}`) // null

// comparar objectos usando JSON
const book1 = {
	name: 'Refactoring',
	author: 'Martin Fowler'
}

const book2 = {
	name: 'Refactoring',
	author: 'Martin Fowler'
}
console.log(JSON.stringify(book1) === JSON.stringify(book2)) 

// clonando objectos com JSON
const book3 = JSON.parse(JSON.stringify(book2))
console.log(book3 === book2)

