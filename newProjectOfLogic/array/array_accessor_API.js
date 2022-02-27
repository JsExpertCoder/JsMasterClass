const languages = ["Python", "C", "C", "Java"]

console.log(languages.indexOf("Python")) // 0
console.log(languages.lastIndexOf("C")) // 2
console.log(languages.indexOf("JavaScript")) // -1

// retorna true se o elemento existir
console.log(languages.includes("Python")) // true
console.log(languages.includes("C")) // true
console.log(languages.includes("JavaScript")) // false 

const oo_Languages = ["Smalltalk", "C++", "Simula"]
const functional_languages = ["Haskell", "Scheme"]
const $languages = [].concat(functional_languages, oo_Languages)
console.log($languages)

// retorna partes do array de x até x - 1
console.log($languages.slice(0, 2))
console.log($languages.slice(2, 4))
console.log($languages.slice(1))

// converte o array em string e junta com base em um separador
console.log(languages.join(';'))
console.log(languages.join(','))
console.log(languages.join('-'))
console.log(languages.join(' '))




