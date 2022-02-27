const personPrototype = {
	getAge () {
		return (new Date()).getFullYear() -  this.year
	}
}

// função fábrica // retorna um novo objeto ao ser invocada diretamente
const CreatePerson = function (name, city, year) {
	person = {
		name,
		city,
		year
	}
	Object.setPrototypeOf(person, personPrototype)
	return person
}

const person1 = CreatePerson('Linus Torvads', 'Helsinki', 1969)
const person2 = CreatePerson('Bill Gate', 'Seattle', 1955)

console.log(person1)
console.log(person1.getAge())
console.log(person1.__proto__)
console.log(person2)
console.log(person2.getAge())
console.log(person2.__proto__)

// função construtora // retorna um novo objeto ao ser invocada pelo operador new

const Person = function (name, city, year) {
	this.name = name
	this.city = city
	this.year = year
}
Person.prototype.getAge = function () {
		return (new Date()).getFullYear() - this.year
	}
const person3 = new Person('Linus Torvads', 'Helsinki', 1969)
const person4 = new Person('Bill Gate', 'Seattle', 1955)

console.log(person3)
console.log(person3.__proto__)
console.log(person3.getAge())
console.log(person4)
console.log(person4.__proto__)
console.log(person4.getAge())

// algoritmo do operador new
const _new = function (fn, ...params) {
	const obj = {}
	fn.apply(obj, params)
	Object.setPrototypeOf(obj, fn.prototype)
	return obj
}

let person5 = _new(Person, 'Creusa', 'SP', 1990)

console.log(person5)
console.log(person5.getAge())
