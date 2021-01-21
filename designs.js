let gridTable = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let sizePickerForm = document.getElementById('sizePicker');

let makeGrid = (event) => {
    event.preventDefault()
    if(gridTable.rows.length > 0){
        while(gridTable.rows.length > 0){
            gridTable.deleteRow(0);
        }
    }

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

sizePickerForm.addEventListener('submit', makeGrid);