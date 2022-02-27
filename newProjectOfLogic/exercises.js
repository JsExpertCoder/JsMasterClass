const tableInfo = 'create table author (id number, name string, age number, city string, state s tring, country string)'
const regexp = /create table (\w+) (\(id number, name string, age number, city string, state s tring, country string\))/
const tableName = regexp.exec(tableInfo)[1]
let columns = regexp.exec(tableInfo)[2]
columns = columns.split(', ')
console.log(tableName)
console.log(columns)