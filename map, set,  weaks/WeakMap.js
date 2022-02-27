/*
    WeakMap é um objeto, similar ao Map, que permite apenas as
    chaves do tipo Object e mantém um referência de forma fraca,
    sendo volátil e não iterável. permite:
    - has
    - set
    - get
    - delete
*/
const wm1 = new WeakMap()
const obj1 = {}
const obj2 = {}
// aceita apenas chaves do tipo Object
wm1.set(obj1, 'obj1')
wm1.set(obj2, 'obj2')

console.log(wm1.has(obj1))
console.log(wm1.has(obj2))

wm1.delete(obj1)
console.log(wm1.get(obj1))
console.log(wm1.get(obj2))
console.log(wm1)

// =================================================
const rectangle1 = {
    x: 2, y: 5
}
const rectangle2 = {
    x: 5, y: 3
}
const areas = new WeakMap()
function calculateArea(rectangle) {
    if (areas.has(rectangle)) {
        console.log('Using cache...')
        return areas.get(rectangle)
    }
    area = rectangle.x * rectangle.y
    areas.set(rectangle, area)
    console.log('New data...')
    return area
}
console.log(calculateArea(rectangle1))
console.log(calculateArea(rectangle2))
console.log(calculateArea(rectangle1))
console.log(calculateArea(rectangle2))