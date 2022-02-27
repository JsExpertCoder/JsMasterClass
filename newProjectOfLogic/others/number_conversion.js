
// [x] base para a [x] base retorna [x]
// 0b => binário
// ob => octal
// 0x => hexadecimal
console.log('TOSTRING')
console.log((0xA).toString(10))
console.log((0b1010).toString(16))
console.log((10).toString(8))
console.log((12).toString(2))
console.log((190).toString(16))
console.log((0xbe).toString(10))
console.log((0x3f2).toString(10))

console.log('PARSEINT')
// por padrão retoran o número pra base decimal
// se for um número de outra base, informa-se essa base

console.log(parseInt('11', 10)) // posso não pôr o [10] pois já retorna nessa base
console.log(parseInt('A', 16)) // [x] da base [x] quanto é na base decimal
console.log(parseInt('11', 2)) // [x] da base [x] quanto é na base decimal
console.log(parseInt('010', 8)) // [x] da base [x] quanto é na base decimal
