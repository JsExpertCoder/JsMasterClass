/**
 * um proxy é capaz de intercetar diversos tipo de operações em um objecto alvo
 * existem métodos chamados traps, para diversos tipos de eventos:
 *  - getOwnPrototypeDescriptor:
 *  - preventExntensions:
 *  - defineProperty: 
 *  - deleteProperty: invocado quando um propiedade é deletada
 *  - getPrototypeOf:
 *  - setPrototypeOf:
 *  - isExtensible:
 *  - construct: 
 *  - ownKeys:
 *  - apply: 
 *  - set: invocado quando uma propiedade é difinida no objeto
 *  - get: invocada quando uma propiedade é acessada
 *  - has: 
 */

function createArray1() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0
            target.length++
            target[key] = value
        },
        get(target, key) {
            if (typeof key === 'string' && key.match(/\d+/)) {
                if (!(key in target)) {
                    throw `Property  ${key} not found.`
                }
            }
            return target[key]
        },
        deleteProperty(target, key) {
            if (key in target) {
                delete target[key]
                target.length--
            }
        }
    })
}
const languages1 = createArray1()
languages1[0] = "Python"
languages1[1] = "Ruby"
languages1[2] = "JavaScript"
console.log(languages1)
console.log(languages1.length)
delete languages1[1]
delete languages1[2]
delete languages1[3]
console.log(languages1)
console.log(languages1.length)

// Proxy com Reflect (usam o mesmo nome do Proxy)

const createArray2 = function (params) {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0
            target.length++
            // target[key] = value
            Reflect.set(target, key, value)
        },
        get(target, key) {
            if (typeof key === 'string' && key.match(/\d+/)) {
                // Reflect API
                if (!(Reflect.has(target, key))) {
                    throw `Property  ${key} not found.`
                }
            }
            // Reflect API
            return Reflect.get(target, key)
        },
        deleteProperty(target, key) {
            // Reflect API
            if (Reflect.has(target, key)) {
                target.length--
                Reflect.deleteProperty(target, key)
            }
        }
    })
}
try {
    let languages2 = createArray2()
    languages2[0] = "Java"
    languages2[1] = "C++"
    languages2[2] = "Kotlin"
    console.log(languages2)
    console.log(languages2.length)
    delete languages2[1]
    delete languages2[2]
    delete languages2[3]
    console.log(languages2)
    console.log(languages2.length)
    console.log(languages2[1])
} catch (error) {
    console.log(error)
}