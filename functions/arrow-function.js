const calculator = (fn) => {
	return (a, b) => {
		return fn(a, b)
	}
}

const subtrat = (a, b) => {
	return a - b
}

console.log(calculator(subtrat)(4, 3))

// sem chaves = retorno automático
const sun = (a, b) => a + b
console.log(calculator(sun)(2, 3))

// apenas um parâmetro = sem parênteses

const mult = a => a * 12
console.log(calculator(mult)(12))

// não possuem this
let personOne = {
	name: 'James Goslin',
	city: 'Alberta',
	year: 1955,
	getAge: () => {
		return (new Date).getFullYear() - this.year
	}
}
console.log(personOne)
console.log(personOne.getAge()) // NaN 

// não possue arguments
const div = () => {
	let total = 0
	for (argument in arguments) {
		total += arguments[argument]
	}
	return total
}
console.log(div(1, 2, 3, 4, 5, 6, 7, 8, 9))

// retornar um objecto sem o return
let createPerson = (name, city, year) => ({name: name, city: city, year: year}) 
let personTwo = createPerson('Alan Kay', 'Springfield', 1940)
console.log(personTwo)