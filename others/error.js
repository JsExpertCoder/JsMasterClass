/* 
    traz informações sobre um erro que 
    acabou de ocorrer.
    possue 2 propriedades e 1 método.
    [message] : detalhe do erro;
    [name] : tipo do erro;
    [toString()]: [message] + [name].

    [name] (tipos de erros):
        * EvalError      ---- erro usando eval();
        * RangeError     ---- número extrapolou o limite;
        * ReferenceError ---- referencia o valor não definida;
        * SintaxeError   ----  erros de sintaxe da linguangem;
        * TypeError      ---- operando diferente do esperado
        * URIError       ---- uso errado de funções URI.

*/

// criando um erro
const wrong = function() {
    try {
        var x = a
        var y = x * 10
        console.log(y)
    } catch (error) {
        console.log(`${error.name}: ${error.message}`)
        console.log(error.toString())
    }
} 
// wrong()
 
// na prática
var z = 1
try {
    if ( z < 10) {
        throw 'menor'
    }
    console.log(z)
} catch (error) {
    console.log(error.toString())
}

// or
try {
    console.log(x)
} catch (error) {
    console.log(error.toString())
}

const Reactangule = function (x, y) {
    this.x = x
    this.y = y
    this.getArea = () => {
        if (this.x > 0 && this.y > 0)
            return this.x * this.y
        else
            throw 'Invalid value for x and y'
    }
}
try{
    const rectangule = new Reactangule(-10, 2)
    console.log(rectangule.getArea())
} catch(e) {
    console.log(e) // 'Invalid value for x and y'
}