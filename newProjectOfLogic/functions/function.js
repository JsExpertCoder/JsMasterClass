
// DECLARATIVA OU DECLATAÇÃO DE FUNÇÃO

function somar (x,y) {
    /* 
        com o [return] se a função ser chamada não será
        executada nenhima acção, teremos de chamá-la
        em um [console] ou [alert]
    */
    return x + y
}
console.log(somar(45,334))

// ANÔNIMA

let subtrair = new Function('x', 'y', 
    'console.log(x - y)')

subtrair(976,874)

// LITERAL OU EXPRESSÃO DE FUNÇÃO

let multiplicar = function (x, y) {
    return ( 
     console.log( x * y) 
    )
}

multiplicar(23,67)

// as function declaration sofrem o hosting as function expression
// não.
/*
    as funções podem ser atribuídas a uma variável passadas
    por parâmetro ou retornadas de uma outra função
*/

// retornando uma função

const sun = (x, y) => {
    return x + y
}

const subtract = (x, y) => {
    return x - y
} 

const calculator = (fn) => {
    return function (a, b) {
        return fn(a, b)
    }
}

console.log(calculator(sun)(2, 2))
console.log(calculator(subtract)(2, 2))

// invocando com menos ou mais parâmetro
let newSun = function (a = 0, b = 0) { 
    // a = 0 caso undefinded b = 0 caso undefined
    return a + b
}
console.log(newSun(2, 2)) // 4
console.log(newSun(5)) // 5
console.log(newSun(1, 2, 3)) // 3

// arguments
let newSun1 = function () {
    let total = 0 
    for (let item in arguments) {
        total += arguments[item]
    }
    return console.log(total)
}
newSun1(1, 2, 3, 4, 5, 6, 7, 8, 9)

// rest parameter

const newSubtract = function (...x) {
    let total = 0
    for (param of x) {
        total -= param
    }
    return total
}
console.log(newSubtract(1, 2, 3, 4, 5, 6, 7, 8, 9))

// o rest parameter deve ser sempre o último dos parâmetro
const newSubtract1 = (a = 0, b = 0, ...x) => {
    let total = a + b
    for (EachParam of x) {
        total -= EachParam
    }
    return total
}
console.log(newSubtract1(5, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9))