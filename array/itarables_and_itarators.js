const classicLanguages = ["Fortran", "Lisp", "COBOL"]
for (const language of classicLanguages) {
    console.log(language)
}

const modernLanguages = ["Python", "Ruby", "JavaScript"]
let languages = [...classicLanguages, ...modernLanguages]
console.log(languages)

const mapLanguages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]])
console.log([...mapLanguages])
for (let [language, year] of mapLanguages) {
    console.log("%s => %d", language, year)
}
const setLanguages = new Set(["Java", "C++", "MySql"])
console.log([...setLanguages])

const language = "Kotlin"
// iterar a string
for (let char of language) {
    console.log(char)
}
// cada elemento da string = cada elemento arary
const arrayChar = [...language]
console.log(arrayChar)

// symbol.itarator of array and string
const iterator = modernLanguages[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())

// symbol.iterator of map and set
const newIterator1 = mapLanguages[Symbol.iterator]()
const newIterator2 = mapLanguages.entries()
const newIterator3 = mapLanguages.keys()
const newIterator4 = mapLanguages.values()
console.log(newIterator1.next())
console.log(newIterator2.next())
console.log(newIterator3.next())
console.log(newIterator4.next())

// criando próprio iterator
function createIterable(...array) {
    return {
        [Symbol.iterator]() {
            let i = 0
            return {
                next() {
                    if (i < array.length) {
                        return {
                            value: array[i++],
                            done: false
                        }
                    } else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            }
        }
    }

}
const $iterator = createIterable("PHP", "SQL", "Vue.Js")
// console.log($iterator.next())
// console.log($iterator.next())
// console.log($iterator.next())
// console.log($iterator.next())
console.log([...$iterator])