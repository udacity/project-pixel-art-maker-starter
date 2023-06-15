// Select color input
const tableColor = document.getElementById('inputColor');
// Select size input
const tableHeight = document.getElementById('inputHeight');
const tableWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var myTable = document.getElementById('pixelCanvas');
  for (let i = 0; i < tableHeight.value; i++) {
    const row = myTable.insertRow(0);
    for (let j = 0; j < tableWidth.value; j++) {
      const cell = row.insertCell(0);
      cell.innerHTML = "";
      cell.style.border = '1px solid gray';
      cell.style.width = '40px';
      cell.style.height = '40px';
    }
  }
}

// Your code goes here!
const form = document.getElementById('sizePicker');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
  console.log("Making Grid, baby!");
});

function addColor(event) {
  if (event.target.tagName === 'TD') {
    var color = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = color;
    event.preventDefault();
  }
}

const colorThis = document.getElementById('pixelCanvas');
colorThis.addEventListener('click', addColor);
