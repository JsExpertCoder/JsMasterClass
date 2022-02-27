let obj2 = [
    {
        name: 'fabio',
        age: 12,
        id: 1
    },
    {
        name: 'maria',
        age: 13,
        id: 2
    },
    {
        name: 'joao',
        age: 14,
        id: 3
    }
]
let column = 'name, age'.split(', ')
let obj3 = obj2.map(obj2_element => {
    let obj = {}
    column.forEach((obj_element) => {
        obj[obj_element] = obj2_element[obj_element]
    })
    return obj
})

const filtedElements = obj2.filter((obj) => {
    //delete obj.id === 1
    return obj.id == 1
})
obj2 = filtedElements
//console.log(JSON.stringify(filtedElements, undefined, ' '))
console.log(JSON.stringify(obj2, undefined, ' '))
console.log('____________________________________')
const commands = new Map()
commands.set('createTable', /create table (\w+) \((.+)\)/)
commands.set('select', /select (.+) from ([a-z]+)(?: where (.+))?/)
commands.set('insert', /insert into (\w+) \((.+)\) values \((.+)\)/)
commands.set('delete', /delete from ([a-z]+)(?: where (.+))?/)
const parse = function (statement) {
    for ([command, regExp] of commands) {
        if (regExp.test(statement)) {
            return {
                command,
                parsedStatement: statement.match(regExp)
            }
        }
    }
}
// for ([command, regexp] of commands) {
//     const parsedStatement = statement.match(regexp)
//     if (parsedStatement) {
//         return {
//             command,
//             parsedStatement
//         }
//     }
// }
console.log(JSON.stringify(parse('create table author (id number, name string, age number, city string, state string, country string)'), undefined, ' '))
class x{
	parse(statement) {
		const commands = new Map()
		commands.set('createTable', /create table (\w+) \((.+)\)/)
		commands.set('select', /select (.+) from ([a-z]+)(?: where (.+))?/)
		commands.set('insert', /insert into (\w+) \((.+)\) values \((.+)\)/)
		commands.set('delete', /delete from ([a-z]+)(?: where (.+))?/)
		for (let [command, regexp] of commands) {
			const parsedStatement = statement.match(regexp)
			if (parsedStatement) {
				return {
					command,
					parsedStatement
				}
			}
		}
	}
}
let s = new x
 console.log(s.parse('create table author (id number, name string, age number, city string, state string, country string)'))
 console.log('______________________________________________')
const createProxyObj = () => {
    return new Proxy({}, {
        set: function(target, key, value) {
            target.length = target.length || 0
            target.length++
            Reflect.set(target, key, value)
        },
        get(target, key){
            if (!(Reflect.has(target, key))) return `${key} is not defined`
           return  Reflect.get(target, key)
        },
        deleteProperty(target, key){
            if (Reflect.has(target, key)) {
                Reflect.deleteProperty(target, key)
                target.length--
            }
        }
    })
}
let myProxy = createProxyObj()
myProxy.one = 1
myProxy.two = 2
myProxy.three = 3
myProxy.four = myProxy.four
console.log(myProxy)
console.log(myProxy.one)
console.log(myProxy.two)
console.log(myProxy.three)
console.log('length: ', myProxy.length)
console.log(myProxy.thre)
delete myProxy.one
delete myProxy.two
console.log(myProxy)