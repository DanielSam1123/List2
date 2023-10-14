const selectedRow = null

function onFormSubmit() {
	const formData = readFormData()
	if (selectedRow == null) insertNewRecord(formData)
	else updateRecord(formData)
}

function readFormData() {
	const formData = {}
	formData['ID'] = document.getElementById('ID').value
	formData['name'] = document.getElementById('name').value
	formData['secondName'] = document.getElementById('secondName').value
	formData['birth'] = document.getElementById('birth').value
	formData['height'] = document.getElementById('height').value
	formData['weight'] = document.getElementById('weight').value
	formData['club'] = document.getElementById('club').value
	return formData
}

const insertNewRecord = data => {
	const table = document.getElementById('playersList').getElementsByTagName('tbody')[0]
	const newRow = table.insertRow(table.length)
	cell1 = newRow.insertCell(0)
	cell1.innerHTML = data.ID
	cell2 = newRow.insertCell(1)
	cell2.innerHTML = data.name
	cell3 = newRow.insertCell(2)
	cell3.innerHTML = data.secondName
	cell4 = newRow.insertCell(3)
	cell4.innerHTML = data.birth
	cell5 = newRow.insertCell(4)
	cell5.innerHTML = data.height
	cell6 = newRow.insertCell(5)
	cell6.innerHTML = data.weight
	cell7 = newRow.insertCell(6)
	cell7.innerHTML = data.club
	cell8 = newRow.insertCell(7)
	cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a> <a onClick="onDelete(this)">Delete</a>`
}

const resetForm = () => {
	document.getElementById('ID').value = ''
	document.getElementById('name').value = ''
	document.getElementById('secondName').value = ''
	document.getElementById('birth').value = ''
	document.getElementById('height').value = ''
	document.getElementById('weight').value = ''
	document.getElementById('club').value = ''
	selectedRow = null
}
const onEdit = td => {
	selectedRow = td.parentElement.parentElement
	document.getElementById('ID').value = selectedRow.cells[0].innerHTML
	document.getElementById('name').value = selectedRow.cells[1].innerHTML
	document.getElementById('secondName').value = selectedRow.cells[2].innerHTML
	document.getElementById('birth').value = selectedRow.cells[3].innerHTML
	document.getElementById('height').value = selectedRow.cells[4].innerHTML
	document.getElementById('weight').value = selectedRow.cells[5].innerHTML
	document.getElementById('club').value = selectedRow.cells[6].innerHTML
}

const updateRecord = formData => {
	selectedRow.cells[0].innerHTML = formData.ID
	selectedRow.cells[1].innerHTML = formData.name
	selectedRow.cells[2].innerHTML = formData.secondName
	selectedRow.cells[3].innerHTML = formData.birth
	selectedRow.cells[4].innerHTML = formData.height
	selectedRow.cells[5].innerHTML = formData.weight
	selectedRow.cells[6].innerHTML = formData.club
}

const onDelete = td => {
	if (confirm('Jestes pewny ze chcesz to usunac')) {
		row = td.parentElement.parentElement
		document.getElementById('playersList').deleteRow(row.rowIndex)
		resetForm()
	}
}
