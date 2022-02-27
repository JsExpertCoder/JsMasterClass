
// OBJECT NUMBER
console.log('_________OBJECT NUMBER________')
// converte mesmo sendo uma string
var n = new Number('120.9')

/* 
    retorna o maior valor que se pode armazenar
    no JS 
*/
console.log(Number.MAX_VALUE)

/* 
    retorna o menor valor que se pode armazenar
    no JS 
*/
console.log(Number.MIN_VALUE)

// retorna a própria referência NaN 
console.log(Number.NaN)
 
// retorna a própria referência
console.log(Number.NEGATIVE_INFINITY)

// retorna a própria referência
console.log(Number.POSITIVE_INFINITY)

// já conheces o toFixed()
var $_n =  new Number(10.239)

// retorna com 2 casas decimais
console.log($_n.toFixed(2))

// retorna sem casas decimais
console.log($_n.toFixed())

/* 
    completa com zero caso seja indicado
    um número de casas maiores ao existente
*/

// retorna a quantidade de dígitos pedidos
 var $_n2 = new Number(2390.234)
 console.log($_n2.toPrecision(5))

 /* 
    se for menor que o número, retorna em
    notação cintífica
 */

// retorna em notação científica
console.log($_n2.toExponential(3))
