const DataBaseError = function (statement, message) {
	this.statement = statement
	this.message = message
}

const Parser = function (statement) {
	const commands = new Map()
	commands.set('createTable', /create table (\w+) \((.+)\)/)
	commands.set('select', /select (.+) from ([a-z]+)(?: where (.+))?/)
	commands.set('insert', /insert into (\w+) \((.+)\) values \((.+)\)/)
	commands.set('delete', /delete from ([a-z]+)(?: where (.+))?/)
	this.parse = function (statement) {
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

let dataBase = {
	tables: {},
	parser: new Parser(),
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
	},
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
	},
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
	},
	insert(parsedStatement) {
		let [, tableName, columns, values] = parsedStatement
		columns = columns.split(', '); values = values.split(', ')
		const row = {}
		for (let i = 0; i < columns.length; i++) {
			row[columns[i]] = values[i]
		}
		this.tables[tableName].data.push(row)
	},
	delete(parsedStatement) {
		let [, tableName, whereClause] = parsedStatement
		if (whereClause) {
			[columnWhere, valueWhere] = whereClause.split(' = ')
			this.tables[tableName].data = this.tables[tableName].data.filter((row) => {
				return row[columnWhere] !== valueWhere
			})
		} else {
			this.tables[tableName].data = []
		}
	},
	execute(statement) {
		const result = this.parser.parse(statement)
		if (result) return this[result.command](result.parsedStatement)
		console.log(result)
		let message = `Syntax Error:  "${statement}"`
		throw new DataBaseError(statement, message)
	}
}
try {
	dataBase.execute('create table author (id number, name string, age number, city string, state string, country string)')
	dataBase.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
	dataBase.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
	dataBase.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
	dataBase.execute("delete from author where id = 2")
	console.log(JSON.stringify(dataBase.execute("select id, name, age from author"), undefined, ' '))
} catch (e) {
	console.log(e.message)
}