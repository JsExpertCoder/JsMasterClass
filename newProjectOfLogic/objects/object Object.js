/* 
    um objecto é uma coleção dinâmica de propriedades
    definidas por chave, que podem ser do tipo String 
    ou Symbol, e valores que podem ser de qualquer tipo
    de dado

 é possível criar objectos de várias formas:
  1 - pela notação literal
  2 - função construtora
  3 - método create da Object API
*/
// FUNÇÃO CONSTRUTORA
	const objectWithConstructFunction = new Object()
// CREATE OF OBJECT API
	const objectWithObjectAPI = Object.create({})

// NOTAÇÃO LITERAL
let book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    language: 'English',
    available: true
}
console.log(book)

/* 
 alterando os valores das chaves com variáveis
 externas
*/
let titulo = 'Clean Code', autor = 'Robert C. Martin',
páginas = 464, língua = 'English', disponível = true
console.log('__________________________')
book = {
    title: titulo,
    author: autor,
    pages: páginas,
    language: língua,
    available: disponível
}
console.log(book)

/* 
    é possível criar uma variável externa e usá-la 
    como nome da chave e o valor da variável
    externa será o valor da chave.
*/
const mobile = 'React Native', deskTop = 'Electron',
game = 'Unity'
let technology = {
    mobile,
    deskTop,
    game
}
console.log('_______________')
console.log(technology)

// nomes das chaves podem ser números ou palavras
// reservadas
let reservedWordAndNumber = {
	10: 'number as propriety',
	while: 'reservedWord as propriety',
	let : 'reservedWord as propriety',
	90 : 10 === 10
}
console.log(reservedWordAndNumber)

// DINAMISMO

/*
	definir chaves em tempo de execução:
	o valor dentro da variável externa será a chave gerada em 
	tempo de execução
*/
const key1 = 'Name'
const key2 = 'Age'
const key3 = 'City'
const key4 = 'Skill'
const developer = {
	[key1]: 'Félix',
	[key2]: '24',
	[key3]: 'USA',
	[key4]: 'Mobile'
}
console.log(developer)

// é possível atribuir chaves e valore aos objectos por meio da sua referência.
const pen = {}
let color = 'blue', ink = 'available ink', altura = 'height'
pen.color = color,
pen[ink] = '67%'
pen[altura] = 15
pen.width = 2
console.log(pen)

// consulta de propriedades
console.log('_______consult of propriety______')
console.log(book.title)
console.log(book.pages)
console.log(book.author)
console.log(book.available)
console.log('_______________')
for (let key in book) {
	console.log(`${key}: ${book[key]}`)
}
// cópia de objectos
console.log('___________book 2________')
const book2 = {}
console.log(book2)
for (let key in book) {
	// book2[key.replace(/a/ig, 4)] = book[key]
	book2[key] = book[key]
}
console.log(book2)