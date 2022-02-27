/* 
  variável implícita que faz referência ao objecto 
  responsável pela sua invocação.
  qual é o objecto que invoca a função.
*/

let f = {
    name: 'wCode',
    n: 6,
    position: 0,
    /* 
        o método [write] irá escrever o valor da propriedade
        [name], como estamos ainda dentro do objecto teremos
        que fazer referência à esta pripriedade com o {this}
    */
    write: function() {
        this.position = this.n
        return this.name
    }
}
console.log(f.write())
console.log(f)

/* 
    todo o arquivo está dentro do objecto [window] por padrão
    logo podemos acessar esse objecto e fazer referência às
    suas propriedades, como o [document], e dessa propriedade
    acessar outras.
*/
console.log(this.document)

const rectangle = {
    x: 10,
    y: 2,
    calculateArea1: function () {
        return this.x * this.y
    },
    // method notation
    calculateArea2() {
        return this.x * this.y
    }
}
console.log(rectangle.calculateArea1())

// outra forma

const calculateArea3 = function () {
    return this.x * this.y
}
const rectangle1 = {
    x: 20,
    y: 3,
    calculateArea3
}
console.log(rectangle1.calculateArea3())







