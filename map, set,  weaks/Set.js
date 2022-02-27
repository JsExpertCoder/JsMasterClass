/** Set é um objeto que armazena elementos únicos, que podem ser
 * de qualquer tipo de dado
 */
const charset = new Set(['Unicode', 'code-16'])
charset.add('ASCII')
charset.add('ISO')
charset.add('UTF-8')
console.log(Array.from(charset))
console.log(charset.size)
charset.forEach(function (charset) {
    console.log(charset)
})
console.log(charset.has('ASCII'))
console.log(charset.has('CP-1242'))
charset.delete('code-16')
console.log(charset.has('code-16'))
charset.clear()
console.log(charset)
console.log(charset.size)

// DIFERENÇA COM O ARRAY
// não permite elementos duplicados
let set = new Set()
set.add(10)
set.add(10)
set.add(10)
console.log(set) // 10
console.log(set.size) // 1

// eliminar a duplicação de elementos no array
let array = [10, 10, 10]
console.log(array)
console.log(array.length)
const set2 = new Set(array)
console.log(set2)
console.log(set2.size)
array = Array.from(set)
console.log(array)
console.log(array.length)
// ===================================
let array2 = [0, 0, 0, 1] 
console.log(array2)
console.log(array2.length)
const new_array = []
array2.forEach(function (element) {
    if (!new_array.includes(element)) 
        new_array.push(element)
})
array2 = new_array
console.log(array2)
console.log(array2.length)
console.log('===================')
let array3 = [3, 3, 3]
console.log(array3)
console.log(array3.length)
const obj = {}
array3.forEach(function (element) {
    obj[element] = undefined
})
array3 = Object.keys(obj)
console.log(array3)
console.log(array3.length)
