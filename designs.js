// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const submit = document.getElementById('submitButton');
const color = document.getElementById("colorPicker");


function formSubmit(event) {
	event.preventDefault();
	const rows = document.getElementById("inputHeight").value;
    const cols = document.getElementById("inputWidth").value;
    makeGrid(rows, cols);
    return false;
}

function makeGrid(rows, cols) {
	const table = document.getElementById('pixelCanvas');
    for (r=0; r<rows; r++) {
        var row = table.insertRow(r);
        for (c=0; c<cols; c++) {
        	var cell = row.insertCell(c);
            // cell.textContent = r+":"+c;
            cell.addEventListener("click", respondToClick)
        }
    };
};

function respondToClick(e) {
    console.log("A cell was clicked: "+e.target.textContent)
}
