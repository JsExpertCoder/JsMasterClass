/* 
    ZERO, NULL, NaN e STRING_VAZIA são inerentemente
    FALSE, todo o resto e inerentemente TRUE
    - Simon Willison
*/

/* 
    inicializando a variável com a função construtora new Boolean()
    mesmo que o parametro passado na função seje um false a variável
    ainda é avaliada como true, porque qualquer função construtora
    é um object, e sendo que ZERO, NULL, NaN e STRING_VAZIA são inerentemente
    false, e todo o resto e inerentemente TRUE, então o object também
    é true.
*/

console.log('_________OBJECT BOOLEAN________')
var b = new Boolean(0)
console.log(typeof(b.toString()))

/* 
    inicializando a variável com a função construtora new Boolean()
    mesmo que o parametro passado na função seje um false a variável
    ainda é avaliada como true, porque qualquer função construtora
    é um object, e sendo que ZERO, NULL, NaN e STRING_VAZIA são inerentemente
    false, e todo o resto é inerentemente true, então o object também
    é true.
*/