/* 
    criar um escopo pra um bloco de código
*/

let car = {
    marca: 'Nissan',
    potencia: {
        cavalos: 350,
        velocidade: '180 Km/h'
    }
}
/* 
    acessando uma propriedade que está dentro 
    de outra propriedade sem o [with]
*/
 console.log(car.potencia.velocidade)
 console.log(car.potencia.cavalos)
 /* 
    acessando uma propriedade que está dentro 
    de outra propriedade com o [with]
*/
console.log('______________________')
with (car.potencia) {
    console.log(velocidade)
    console.log(cavalos)
}