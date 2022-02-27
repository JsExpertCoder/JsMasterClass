/**
 * são objctos responsáveis por modelar comportamento assíncrono
 * permitindo o seu tratamento de uma forma mais fácil e direta
 * Para criar uma basta instanciá-la, executando a função resolve
 * em caso de sucesso, sendo tratado pot meio de then.
 * 
 * em caso de fracasso, afunção reject deve ser executada, sendo
 * tratada por meio de catch
 * 
 * Podemos executar várias promises ao mesmo tempo, retornando após
 * todas terem sucesso usando Promise.all
 * 
 * Podemos executar várias promise ao mesmo tempo, mas retornando após a 
 * primeira ter sucesso usando Promise.race
 */
function sum(a, b, callback) {
    setTimeout(function () {
        callback(a + b)
    }, 1000)
}
sum(2, 2, function (a) {
    sum(4, 4, function (b) {
        sum(a, b, function (result) {
            console.log(result)
        })
    })
})
// simple promise
function subtrat(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(a - b)
        }, 1000)
    })
}
subtrat(8, 4).then(function (a) {
    subtrat(4, 2).then(function (b) {
        subtrat(a, b).then(function (result) {
            console.log(result)
        })
    })
})

// promise with reject
function mult(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject('Invalid input in mult function!')
        setTimeout(function () {
            resolve(a * b)
        }, 1000)
    })
}
mult(4).then(function (a) {
    mult(2).then(function (b) {
        mult(a).then(function (result) {
            console.log(result)
        }).catch(function(e){
            console.log(e)
        })
    }).catch(function(e){
        console.log(e)
    })
}).catch((e) =>{
    console.log(e)
})

// promise with reject com encadeamento (apenas um catch responsável pelos erros)
function div(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject('Invalid input in div function!')
        setTimeout(function () {
            resolve(a / b)
        }, 1000)
    })
}
div(4, 4).then(function (a) {
    return div(2).then(function (b) {
        return div(a).then(function (result) {
            console.log(result)
        })
    })
}).catch((e) =>{
    console.log("2 main "+e)
})


// promise with reject com encadeamento (apenas um catch responsável pelos erros)
// and Promise.all
function completePromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject('Invalid input in completPromise function!')
        setTimeout(function () {
            resolve(a / b + 10)
        }, 1000)
    })
}
console.time('completePromise')
Promise.all([
    completePromise(2, 2),
    completePromise(4, 4)
]).then(function (values) {
    const [a, b] = values
    return completePromise(a, b).then((result) => {
        console.log(result)
        console.timeEnd('completePromise')
    })
}).catch((e) =>{
    console.log(e)
})

// promise with reject com encadeamento (apenas um catch responsável pelos erros)
// and Promise.race
function otherCompletePromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject('Invalid input in otherCompletPromise function!')
        setTimeout(function () {
            resolve(a * b / 4 + 10)
        }, Math.random() * 1000)
    })
}
console.time('OtherCompletePromise')
Promise.race([
    otherCompletePromise(2, 2),
    otherCompletePromise(4, 4)
]).then(function (value) {
    return otherCompletePromise(value, value).then((result) => {
        console.log("value:" , value)
        console.log(result)
        console.timeEnd('OtherCompletePromise')
    })
}).catch((e) =>{
    console.log(e)
})
