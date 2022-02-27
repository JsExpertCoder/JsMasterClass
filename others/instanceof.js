/* 
    {instanceof} indica se o objecto foi construido por
    um determinada função construtora
 */
 let dev = new String()

 console.log(dev instanceof String)
 console.log(dev instanceof Number)
 console.log('----------------------')

 // algoritmo do instanceOf

 const _instanceof = function (obj, fn) {
 		if (obj === null) return false
 		if (obj === fn.prototype) return true
 		return _instanceof(obj.__proto__ , fn)
 }
console.log(_instanceof(dev, String))
console.log(_instanceof(dev, Date))