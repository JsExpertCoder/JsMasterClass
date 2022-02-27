import Parser from "./Parser.mjs"
import DataBaseError from "./DataBaseError.mjs"

export default class DataBase {
    constructor() {
        this.tables = {}
        this.parser = new Parser()
    }
    createTable(parsedStatement) {
        // gerando colunas e nomes da tabela   
        let [, tableName, columns] = parsedStatement
        columns = columns.split(', ')
        // computando o nome da tabela
        this.tables[tableName] = {
            columns: {},
            data: []
        }
        // organizando as colunas dinamicamente
        columns.forEach((column) => {
            let [name, type] = column.split(' ')
            this.tables[tableName].columns[name] = type
        })
    }
    select(parsedStatement) {
        let [, columns, tableName, whereClause] = parsedStatement
        columns = columns.split(', ')
        let rows = this.tables[tableName].data
        if (whereClause) {
            const [columnWhere, valueWhere] = whereClause.split(' = ')
            rows = rows.filter((row) => {
                return row[columnWhere] === valueWhere
            })
        }
        rows = rows.map((row) => {
            let selectedColumn = {}
            columns.forEach((column, i) => {
                selectedColumn[column] = row[column]
            })
            return selectedColumn
        })
        return rows
    }
    insert(parsedStatement) {
        let [, tableName, columns, values] = parsedStatement
        columns = columns.split(', '); values = values.split(', ')
        const row = {}
        for (let i = 0; i < columns.length; i++) {
            row[columns[i]] = values[i]
        }
        this.tables[tableName].data.push(row)
    }
    delete(parsedStatement) {
        let [, tableName, whereClause] = parsedStatement
        if (whereClause) {
            let [columnWhere, valueWhere] = whereClause.split(' = ')
            this.tables[tableName].data = this.tables[tableName].data.filter((row) => {
                return row[columnWhere] !== valueWhere
            })
        } else {
            this.tables[tableName].data = []
        }
    }
    execute(statement) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = this.parser.parse(statement)
                if (result) {
                    resolve(this[result.command](result.parsedStatement))
                }
                let message = `Syntax Error:  "${statement}"`
                reject(new DataBaseError(statement, message))
            }, 1000);
        })
    }
}