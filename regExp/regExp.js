const line = function(index) {
    console.log(`____________${index}____________`)
}
const write = function(dados) {
    console.log(dados)
}
// forma tradicional (sem modificador)
var regex = new RegExp('javascript')
var string = 'JavaScript'
/* 
    testando se a RegExp foi encontrada, retornando um
    booleano.

    função [test()] verifica se o padrão ocorreu ou não
*/
console.log(regex.test(string)) // retorno: false (case-sensitive)

/* 
    RegExp são case-sensitive, para ignorar maiúsculas
    e minúsculas informam-se modificadores
*/
// literalmente (com o modificdor [i])
var RE = /javascript/i
console.log(RE.test(string)) // retorno: true

// forma tradicional (com modificador)
var regularExpe = new RegExp('React Native', 'i')
var txt = 'react native'
console.log(regularExpe.test(txt)) // retorno : true

// otimizando
line(5)
// forma literal
write(/javascript/i.test(string))

// forma tradicional
write(new RegExp('Javascript','i').test(string))

// [exex()] retorna a primeira ocorrência da RE
var dev = 'Programador Mobile programador Web Programador Desktop' 
line(6)
write(/programador/i.exec(dev)) // retorno: 'Programador'

/* 
    para que o [exec()] continue a pesquisa informa-se
    o modificador [g] de pesquisa contínua
*/
line(7)
write(/programador/ig.exec(dev))

/* 
    com o modificador [g] no [exec] ele continua a pesquisa
    mas retorna sempre a primeira ocorrência da RE, para 
    retornar todas as ocorrências usa-se o método [match()]
    da [String]
*/
line(8)
write(dev.match(/programador/ig))/* 
    na string [dev] encontra a RE [programador] ignora o case-sensitive [i] 
    e não para de pesquisar [g]
*/
// retorno: 'Programador', 'programador', 'Programador'

// METACARACTERES

/* 
    [.] procura qualquer caracter, com excessão de novas linhas
*/
line(9)
write(/./.test('METACARACTER[.]'))

/* 
    [w] procura qualquer caracter de [a-z] de [0-9] e [_]
*/
line(10)
write(/\w/.test('METACARACTER[w]'))

/* 
    [s] procura por [espaço] na string
*/
line(11)
write(/\s/.test('METACARACTER [w] '))

/* 
    [d] procura por [dígitos ou números] na string
*/
line(12)
write(/\d/.test('METACARACTER[d] 0101'))

/* 
    [^] procura de uma ocorrência no início da string
*/
line(13)
write(/^0101/.test('0101METACARACTER[^]'))

/* 
    [$] procura de uma ocorrência no fim da string
*/
line(14)
write(/0101$/.test('0101METACARACTER[$]0101'))
 
// verificando se existe dígito no final da string
line(15)
write(/\d$/.test('dígito no fim 876'))

// verificando se existe três dígito no final da string
line(16)
write(/\d\d\d$/.test('dígito no fim 876'))

/* 
    verificando se existe três dígito no início um traço e dois dígitos no final da string
*/
line(17)
write(/^\d\d\d-\d\d$/.test('009-45'))

// QUANTIFICADORES
line(18)
write(/\d*/.test('sem dígitos')) // [*] 0 ou mais
write(/\d+/.test('sem dígitos')) // [+] pelo menos 1 ou mais
write(/\d{2}/.test('dois dígitos 01')) // {x} total de vezes

// validação de data
line(19)
/* 
    dois dígitos no início, uma barra, dois dígitos no meio, uma barra e no mínimo 
    dois dígitos no máximo quatro dígitos no fim
*/
write(/^\d{2}\/\d{2}\/\d{2,4}$/.test('09/10/2039'))

// validação de emails
line(20)
write(/^\w+@\w+\.\w{2,3}/.test('coder@gmail.com'))
 
// CARACTERES OPCIONAIS
line(21)
// especificando um caractere opcional
console.log(/c[ae]u/.test('cau')) 
console.log(/c[ae]u/.test('ceu'))

// BUSCAS E SUBSTITUIÇÕES 
line(22)
write(dev.match(/programador/ig).length) // buscas
// quantas correspondências existem
write(dev.match(/programador/ig).length) // buscas
write(dev.replace(/programador/ig, 'Desenvolvedor')) // substituições
var ta = 'o rato roeu a roupa do rei de roma'
write(ta.replace(/r[a-z]/ig, 't'))

// substituição avançada
line(23)
var url = 'www.xti.com.br/clientes-2011.html'
var regularE = /www\.xti\.com\.br\/\w{2,}-\d{4}\.html/
regularE =  /(www\.xti\.com\.br)\/(\w{2,})-(\d{4})\.html/
write(url)
console.log(url.replace(regularE, 'https://$1/$3/$2.jsp'))

 


