let line = (a) => {
    console.log(`________${a}________`)
}
(unicodeA_Z = function () {
    let index = 0
    let key00 = setTimeout(
        function () {
            console.log('timeOut excutado com sucesso!')
        }, 3000)
    let key01 = setInterval(() => {
        //console.log(key01._idleStart)
        console.log(`setInterval laço: ${++index}`)
        if (index == 3) {
            clearInterval(key01)
            console.log('Intervalo apagado!')
            line(1)
        }
    }, 1000)

    // personal script #01
    let string1 = 'abcdefghijklmnopqrstuvwxyz', letra = '', unicode = 0,
        string2 = string1.toUpperCase(), LETRA = '', UNICODE = 0
    
    // que comece o jogo!!
    for (let i in string1) {

        // percorrndo as letras minúsculas sem acento
        letra = string1[i]
        unicode = string1.charCodeAt(i)
        if (i == 0) {
            console.log(`String: ${string1} 
Letra:    Unicode:`)
        }
        console.log(`${letra}         ${unicode}`)

        }

        // percorrendo as letras maiúsculas sem acento
            for (let index in string2) {
                LETRA = string2[index]
                UNICODE = string2.charCodeAt(index)
                if (index == 0) {
                    console.log(`String: ${string2} 
        Letra:    Unicode:`)
                }
                console.log(`${LETRA}         ${UNICODE}`)
            }
        let string3 = 'áàâãéèêíìîóòôõúùû', string4 = string3.toUpperCase(),
        minusculaAcentuada = '', maiusculaAcentuada = '', 
        unicodeMinuscula = 0, unicodeMaiuscula = 0
    
        // percorrendo as vogais minúsculas acentuadas
        for (let count in string3) {
            minusculaAcentuada = string3[count]
            unicodeMinuscula = string3.charCodeAt(count)
            if (count == 0) {
                console.log(`String: ${string3} 
Letra:    Unicode:`)
                }
                console.log(`${minusculaAcentuada}         ${unicodeMinuscula}`)
            }

        // percorrendo as vogais maiúsculas acentuadas
        for (let key in string4) {
            maiusculaAcentuada = string4[key]
            unicodeMaiuscula = string4.charCodeAt(key)
            if (key == 0) {
                console.log(`String: ${string4} 
Letra:    Unicode:`)
                }
                console.log(`${maiusculaAcentuada}         ${unicodeMaiuscula}`)
            }

    }

)() 