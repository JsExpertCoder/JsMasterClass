/*
    {delete} é um objecto do JS que permite 
    apagar determinada propriedade de um outro objecto
 */

// criando o objecto {Person}
let Person = {
    name: 'Coder',
    dev: true
}
/*
    neste momento ainda existe a propriedade 'name', por
    isso eu posso acessá-la
*/
console.log(Person.name)

delete Person.name
/*
    agora eu já não posso acessar essa propriedade, pois 
    ela foi deletada usando o {delete}, resultando em 
    undefined
*/
console.log(Person.name)