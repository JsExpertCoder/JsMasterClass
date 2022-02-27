/* 
    percorrer [array] ou [objectos]
*/

let a = new Array('mobile', 'desktop', 001)
let b = new Object()
b.skill = 'JS'
b.extraSkill = 'React Native'

// percorrendo o [array]
for (i in a) {
    console.log(a[i])
}
console.log('______________')
// acessando os valores das propriedades do [object]
for (var i in b) {
    console.log(b[i])
}

console.log('______________')
// acessando apenas os nomes das propriedades do [object] 
for (var i in b) {
    console.log(i)
}
// juntando
for (var i in b) {
    console.log(`${i}: ${b[i]}`)
}
