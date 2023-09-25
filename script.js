const allNation = [
	{ club: 'Real Madrid ' },
	
]

const headTable = (table, data) => {
	let thead = table.createTHead()
	let row = thead.insertRow()

	for (let key of data) {
		let th = document.createElement('th')
		let text = document.createTextNode(key)
		th.appendChild(text)
		row.appendChild(th)
	}
}

const tableNow = (table, data) => {
	for (let element of data) {
		let row = table.insertRow()
		for (key in element) {
			let cell = row.insertCell()
			let text = document.createTextNode(element[key])
			cell.appendChild(text)
		}
	}
}

let table = document.querySelector('table')
let data = Object.keys(allNation[0])
headTable(table, data)
tableNow(table, allNation)
