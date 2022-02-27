const write = function(dados) {
    console.log(dados)
}
// 1ª FORM TO CREATE OBJECT DATE()
let dateOne = new Date()
write(`Date 1 = ${dateOne}`)

// 2ª FORM TO CREATE OBJECT DATE() 
/* 
    informando a quantidade de milisegundos,e será retornada
    a data de 1/jan/1970, com milisegundos positivos ela vai
    percorrer uma data futura em relação a 1/Jan/1970
    com milissegundos positivos ela vai percorrer um data
    futura em relação a 1/Jan/1970
*/
let dateTwo = new Date(9896097)
write(`Date 2 = ${dateTwo}`)
dateTwo = new Date(-2323477)
write(`Date 2.1 = ${dateTwo}`)

// 3ª FORM TO CREATE OBJECT DATE()
/* 
    informando uma string que tem a data
     desejada
*/

let dateThre = new Date('Oct/28/2021 16:34:56')
write(`Date 3 = ${dateThre}`)

// 4ª FORM TO CREATE OBJECT DATE()
/* 
    informando a data usando diretamente números, o ano 
    mês são obrigatórios.
*/
// incomplete
let dateFour = new Date(2021,9)
write(`Date 4 = ${dateFour}`)

// complete
dateFour = new Date(2021, 9, 28, 11, 04, 23, 2000)
write(`Date 4.1 = ${dateFour}`)

// methods
console.log('__________________')
write(dateOne.getHours())
// greenwich
write(dateOne.getUTCHours())

// [getDate()] retorna o dia do mês
write(dateOne.getDate())

// [getDay()] retorna o dia da semana
write(dateOne.getDay())
let diaSemana = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
]
console.log(`Today is ${diaSemana[dateOne.getDay()]}`)