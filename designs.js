//Assigning elements to global variables
let gridTable = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let sizePickerForm = document.getElementById('sizePicker');
let fillButton = document.querySelector('.fill-button');


let makeGrid = (event) => {
    event.preventDefault()
    //Deletes grid if it exists
    if(gridTable.rows.length > 0){
        while(gridTable.rows.length > 0){
            gridTable.deleteRow(0);
        }
    }
    //Creates table rows and columns
    for (let i=0; i<height.value; i++){
        const row = gridTable.insertRow(i);
        for (let j=0; j<width.value; j++){
            const cell = row.insertCell(j);
            //Adds event listener to each cell and 
            //changes the background color to selected color when triggered
            cell.addEventListener('click', () => {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
//Triggers madeGrid function when form is submitted
sizePickerForm.addEventListener('submit', makeGrid);

//Event Listener for the Fill Button(Changes whole table to selected color)
fillButton.addEventListener('click', () => {
    gridTable.querySelectorAll('td').forEach( td => td.style.backgroundColor = color.value);
});