/*
	[Object.assign()] faz a cópia das propriedades dos objectos passados
	 por parâmetro para o objecto alvo que é retornado, podendo fazer a
	 cópia de diversos objectos. se no objecto alvo existir uma propriedade
	 com o mesmo nome da chave do objecto a ser copiado, a chave
	 do objecto alvo é substituída. caso contrário ela é mantida e são 
	 passadas todas as outra chaves que o objecto alvo não possui
*/
const React = {
	paradigm: 'OO And Functional',
	'JS-Framework': false,
	easy_to_learn: true
}
const JavaScript = Object.create({})
Object.assign(JavaScript,
	// 1º objecto a ser copiado para o objecto JavaScript
	{
	  name: 'JavaScript',
		year: 1995,
	},
	// 2º objecto a ser copiado para o objecto JavaScript
	{
		paradigm: 'OO',
		'JS-Framework': true
	}

)
console.log(JavaScript) 
// RETORNO
/*
	{
  name: 'JavaScript',
  year: 1995,
  paradigm: 'OO',
  'JS-Framework': true
}
*/


// 3º objecto a ser copiado para o objecto JavaScript
Object.assign(JavaScript, React)
console.log(JavaScript)
// RETORNO
/*
{
  name: 'JavaScript',
  year: 1995,
  paradigm: 'OO And Functional',
  'JS-Framework': false,
  easy_to_learn: true
}
*/

// 4º objecto a ser copiado para o objecto JavaScript
let otherInfo = {
	author: 'Brendan Eich',
	influncedBy: 'Java Scheme Self and Perl'
}
Object.assign(JavaScript, otherInfo)
console.log(JavaScript)

// RETORNO
/*
{
  name: 'JavaScript',
  year: 1995,
  paradigm: 'OO And Functional',
  'JS-Framework': false,
  easy_to_learn: true,
  author: 'Brendan Eich',
  influncedBy: 'Java, Scheme, Selg and Perl'
}
*/

//	[Object.keys()] retorna as chaves das propriedades do objecto
console.log(Object.keys(JavaScript))

//	[Object.values()] retorna as valores das propriedades do objecto
console.log(Object.values(JavaScript))

/*
	[Object.entries()] retorna as propriedades do objecto em pares de 
 	chave e valor armazenado-os em um array
*/
console.log(Object.entries(JavaScript))
let entries = Object.entries(JavaScript) // array
console.log(entries[0][1])
console.log('______entries with forEach______')
entries.forEach( (key, value) => {
	console.log(`property: ${key} 
index: ${value} `)
})
console.log('______entries with forEach and replace______')
entries.forEach( (key, value) => {
	console.log(`property: ${(key.toString()).replace(/,/ig, ' value: ')}`)
})

/*
	[Object.is()] compara dois objectos, considerando os tipos de dados,
	de forma similar ou operador ===, se comparares dois objectos com nomes diferentes
	e propriedades iguais retorna false, porém podes usar para substituir o operador
	===
*/
console.log(Object.is(NaN, NaN))
let a = '1', b = 1
console.log(a === b)
console.log(Object.is(a, b))

/* 
	defineProperty: permite definir propriedades ao objecto mas sem nunhum
	método abaixo não conseguimos ver ou trabalhar com essas propiedades
*/

let simpleObject = {}
Object.defineProperty(simpleObject, 'name', {
	value: 'React',
})
//console.log(simpleObject.name)
console.log(simpleObject)
// configurable: permite que um determinada propriedade seja apagada ou configurada
delete simpleObject.name 

/*
	a propriedade [name] não será deletada porqueo objecto [simpleObject]
	não é [configurable]
*/

console.log(simpleObject.name) // ainda consigo acesar essa proprieade
let configurableObject = {}
Object.defineProperty(configurableObject, 'developer', {
	value: true,
	configurable: true
})
// consigo acessar a ppropiedade [developer]
console.log(configurableObject.developer) // retorno: true
delete configurableObject.developer
// não consigo acessar a propriedade [developer] porque o configurable permite deletar
console.log(configurableObject.developer) // retorno: undefined

// com o configurable posso setar outras propiedades ao objecto
Object.defineProperty(configurableObject, 'age', {
	value: 21,
})
console.log(configurableObject.age)
console.log(configurableObject.developer) // já foi apagada

// enumerable:  permite que uma determinada propriedade seja enumerada ou exibida
let enumerableObject = {}
Object.defineProperty(enumerableObject, 'name', {
	value: 'Native',
	enumerable: true
})
console.log(enumerableObject)
// value: define o valor de uma determinada propriedade

// writable: permite que um detrmienada propriedade tenha o seu valor modificado
let newObject3 = {}
Object.defineProperty(newObject3, 'name', {
	value: 'newObject3',
	enumerable: true,
	writable: true
})
newObject3.name = 'ECMAScript' // altera a propriedade [name] do objecto
console.log(newObject3)

// complete object
let completeObject = {}
Object.defineProperty(completeObject, 'name', {
	value: 'Félix',
	configurable: true,
	enumerable: true,
	writable: true
})
// altera [name]
Object.defineProperty(completeObject, 'name', {
	value: 'Coder'
})

console.log(Object.entries(completeObject))

/* 
	[preventExtensions()] - impede que o objecto tenha novas propriedades, mas 
	permite modificar ou remover as propriedades existentes
*/
let preventExtensionsObject = {
	name: 'JavaScript',
	year: 1995,
	paradigm: 'OO and Functional',
	isCool: true,
	latestVersion: 6.0
}
Object.preventExtensions(preventExtensionsObject)
// verificando se é extensível (false)
console.log(Object.isExtensible(preventExtensionsObject))

// [preventExtensions()] permite modificar uma propriedade
preventExtensionsObject.name = 'ECMAScript 6'

// [preventExtensions()] permite remover um propriedade
delete preventExtensionsObject.year

console.log('------PreventExtensions---------')
console.log(preventExtensionsObject)

// [preventExtensions()] não permite criar novas propriedades
preventExtensionsObject.author = 'Brendan Eich'
console.log(preventExtensionsObject) // retorna sem propriedade [author]

/* 
	[seal()] impede que o objecto tenha novas propriedades ou apague
	propriedades existintes, mas permite modificar propiedades existentes
*/

let sealObject = {}
Object.assign(sealObject, preventExtensionsObject)

Object.seal(sealObject)
// [seal()] permite modificar propriedades existentes
sealObject.latestVersion = 7

// [seal()] não permite novas propriedades
sealObject.author = 'Brendan Eich'

// [seal()] não permite apagar uma propriedade existente
delete sealObject.name

console.log('---------seal-------')
console.log(Object.isSealed(sealObject))
console.log(sealObject)

/* 
	[freeze()] impede que o objecto tenha novas propriedades, apague ou
	modifique propriedades existentes
*/

let freezeObject = {}
Object.assign(freezeObject, {
	name: 'JavaScript',
	year: 1995,
	paradigm: 'OO and Functional',
	isCool: true,
	latestVersion: 6.0
})
Object.freeze(freezeObject)
console.log('----------freeze--------')

// [freeze()] impede que o objecto tenha novas propriedades 
freezeObject.author = 'Brendan Eich'
// [freeze()] não permite apagar propriedades existentes
delete freezeObject.year
// [freeze()] não permite modificar propriedades existentes
freezeObject.isCool = false
console.log(`iS Frozen: ${Object.isFrozen(freezeObject)}`)
console.log(freezeObject)
