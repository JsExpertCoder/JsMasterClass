/*
	por meio das funções call e apply é possível invocar
	uma função passando o this por parâmetro
*/
const calculateArea1 = function () {
		return Math.PI * Math.pow(this.radius, 2)
	}
const circle1 = {
	radius: 10,
	calculateArea1
}
// normal
console.log(circle1.calculateArea1())
// call
console.log(calculateArea1.call(circle1))
// apply
console.log(calculateArea1.apply(circle1))

/*
	tanto o call como o apply recebem mais de um parêmetro
	o 1º é o objecto que beneficiará da função, do 2º em 
	diante entram como parâmetros da função a ser aplicada no 
	objecto a diferença é que no call os parâmetro são adicionados
	normalmente e no apply são adicionados dentro de um array
*/
console.log('__________________')

const calculateArea2 = function (fn) {
	if (fn) {
		return fn(Math.PI * (Math.pow(this.radius, 2)), 2)
	} else {
		return Math.PI * Math.pow(this.radius, 2)
	}
	}
const circle2 = {
	radius: 34,
	calculateArea2
}

// normal
console.log(circle2.calculateArea2(), 'normal')
// call (2ª param = Math.round)
console.log(calculateArea2.call(circle2, Math.round))
// apply (2ª param = Math.ceil)
console.log(calculateArea2.apply(circle2, [Math.floor]))

/*
	bind - permite encapsular o this dentro da função,
	retornando-a. Retorna a função
*/

console.log(typeof calculateArea2.bind(circle2, Math.ceil)())

// calculateAreaOfCircle = function (o bind retorna 1 função)
// a variável calculateAeraOfCircle
const calculateAreaForCircle = calculateArea2.bind(circle2)

// invaca a função retornada com o x parâmetro
console.log(calculateAreaForCircle())
