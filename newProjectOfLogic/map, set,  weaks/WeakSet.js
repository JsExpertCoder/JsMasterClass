/*
    WeakSet é um objeto, similar ao set, que permite apenas valores
    do tipo Object e mantém um referência de forma fraca,
    sendo volátil e não iterável. permite:
    - add
    - has
    - delete
*/
const ws1 = new WeakSet()
const obj1 = {}
const obj2 = {}
ws1.add(obj1)
ws1.add(obj2)
ws1.delete(obj2)
console.log(ws1.has(obj1))
console.log(ws1.has(obj2))
console.log(ws1)
const circles = new WeakSet()
function Circle (radius) {
    circles.add(this)
    this.radius = radius
}
Circle.prototype.calculateArea = function(){
    if (!circles.has(this)) throw 'Invalid object'
    return Math.PI * Math.pow(this.radius, 2)
}
const circle1 = new Circle(10)
const circle2 = {
    radius: 5
}
console.log(circle1.calculateArea())
console.log(circle1.calculateArea.call(circle2))