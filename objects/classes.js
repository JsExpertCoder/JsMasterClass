/** As classes são um tipo especial de funções que atuam como um
 * template para a criação de objetos, não ssofrem hosting 
 */
// class declaration
class Class1 {}

// class expression
const class2 = class {}

// instanciando a class
const variable = new class2('instanciation')
console.log(Class1)
console.log(variable)

/** São formadas por 3 tipod de membros: constructor
 * prototype, methods e statics methods
 */

/** constructor é invocado no momento da instanciação da class
 * e serve para inicializar um determinado objeto.
 * 
 * prototype methods dependem de um instância para serem invocados
 * 
 * static methods não dependem de um instância para seren invocados
*/
class Shape{
    toString() {
        return `area: ${this.calculateArea()}`
    }
}
class Square1 extends Shape{
    constructor(side) {
        super()
        this.side = side
    }
    // ptrototype methods
    calculateArea() {
        return Math.pow(this.side, 2)
    }
    toString() {
        return `side: ${this.side} area: ${super.toString()}`
    }
    // static method
   static fromArea(side) {
        return new Square1(Math.sqrt(side))
    }
}

const square1 = Square1.fromArea(16)
console.log(square1)
console.log(square1.toString())
console.log(square1.calculateArea())

// criar hierarquia de class com o extends
class Circle extends Shape{
    constructor (radius) {
        super()
        this.radius = radius
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    toString() {
        return `radius: ${this.radius} area: ${super.toString()}`
    }
    static fromArea(area) {
        return new Circle(Math.sqrt(area / Math.PI))
    }
}
const circle = Circle.fromArea(314.1592653589793)
console.log(circle)
console.log(circle.toString())
console.log(circle.calculateArea())



// relação com as funções construtoras
const Square2 = function (side) {
    this.side = side
}
// prototype methods
Square2.prototype.calculateArea = function () {
    return Math.pow(this.side, 2)
}
Square2.prototype.toString = function () {
    return `side: ${this.side} area: ${this.calculateArea()}`
}
// static methods
Square2.fromArea = function (area) {
    return new Square2(Math.sqrt(area))
}

const square2 = Square2.fromArea(25)
console.log(square2)
console.log(square2.toString())
console.log(square2.calculateArea())