// Select color input
const table = document.querySelector('#pixelCanvas');
const colorSelect = document.querySelector('#colorPicker');

colorSelect.addEventListener('change', function () {
    let vSelectColor = colorSelect.value;
//    console.log('The value of the new Color is ' + vSelectColor);
});

// Select size input
const form = document.querySelector('#sizePicker');
const sizePicker = document.querySelector('#sizePicker');
const sizeInputs = sizePicker.querySelectorAll('input');

// When size is submitted by the user, call makeGrid()

function changeTheColor(elem) {
    let vSelectColor = colorSelect.value;
    elem.target.bgColor = vSelectColor;
//    console.log('An Element was clicked. color'+ vSelectColor);
}

// Clean Table for a new setting

function cleanTable(){
  let lengthR =  table.rows.length;
  for (oldRow = 0; oldRow < lengthR; oldRow++){
    table.deleteRow(-1);
  }
}

// clean old and create new table

function makeGrid(heightSize, widthSize ) {
//  console.log('WE should start draw matrix with  ' + heightSize + ' and ' + widthSize);
  cleanTable();
  for (row = 0 ; row < heightSize ; row++){
    let actRow = table.insertRow(row);
    for (cell = 0 ; cell < widthSize ; cell++){
      let actCell = actRow.insertCell(cell);
      // Append a text node to the cell
      let newText = document.createTextNode(' ');
      actCell.appendChild(newText);
    }
  }}

// Event Listener for the form

form.addEventListener('submit', function (eve) {
  eve.preventDefault();
  let heightSize = sizeInputs[0].value;
  let widthSize = sizeInputs[1].value;
  makeGrid(  heightSize, widthSize );
//  console.log('I have called makeGrid ');
});

// Your code - only the EventListener for the pixelmaker

table.addEventListener('click', changeTheColor);
