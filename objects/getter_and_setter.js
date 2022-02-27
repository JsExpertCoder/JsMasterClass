/*
	as funções do tipo getter e setter servem para intercetar
	o acesso as propriedades de um determinado objecto
*/
const rectangle = {
	// função setter (x_value)
	set x_value(x) {
		if (x > 0) {
			// chave do objeto (_x)
			this._x = x
		} else {
			console.log('Invalid value for x')
		}
	}
	,
	// função setter (y_value)
	set y_value(y) {
		if (y > 0) {
			// chave do objeto (_y)
			this._y = y
		} else {
			console.log('Invalid value for y')
		}
	},
	get calculateArea () {
		if (this._x > 0 && this._y > 0) {
			return this._x * this._y
		} else {
			return 'Error!'
		}
	}
}
rectangle.x_value = 10
rectangle.y_value = 2
console.log(rectangle.calculateArea)

/*
	por meio da operação defineProperty da Object API
	também é possível definir funções do tipo getter
	e setter
*/
const rectangle1 = {}
Object.defineProperty(rectangle1, 'x_value', {
	set (x) {
		x >= 0 ? this._x = x : console.log('Invalid value for x')
	}
})
Object.defineProperty(rectangle1, 'y_value', {
	set (y) {
		y >= 0 ? this._y = y : console.log('Invalid value for y')
	}
})
Object.defineProperty(rectangle1, 'area', {
	get () {
		if (this._x >= 0  && this._y >= 0) {
			return this._x * this._y
		} else {
			return 'Error!'
		}
	}
})
rectangle1.x_value = -90
rectangle1.y_value = -9
console.log(rectangle1.area)
