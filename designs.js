let gridTable = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let sizePickerForm = document.getElementById('sizePicker');

sizePickerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    resetGrid()
    makeGrid()
}, false);

let makeGrid = () => {
    for (let i=0; i<height.value; i++){
        const row = gridTable.insertRow(i);
        for (let j=0; j<width.value; j++){
            const cell = row.insertCell(j);
            cell.addEventListener('click', () => {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}

let resetGrid = () => {
    while (gridTable.rows.length > 0) {
        gridTable.deleteRow(0);
    }
}
