// temporalozador que não se repete

window.onkeydown = function (event) {
    if ('Enter' == event.code.replace(/key/i,' ')) {
      let chave =   setTimeout( function() {
            alert(event.code.replace(/key/i,' '))
        }, 2000)
    }
    clearTimeout(chave)
}

// temporalizador que se repete

window.onload = function() {
    setInterval(() => {
        loop()
    }, 
    1000);
}
let p = document.createElement('p')
console.log(p)
document.body.appendChild(p) 
p.innerHTML = '00:00:00'

let loop = function () {
    let time = new Date()
    let hora = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    p.innerHTML = hora
}
