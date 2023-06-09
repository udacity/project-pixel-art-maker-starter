// Select color input
const tableColor = document.getElementById('inputColor');
// Select size input
const tableHeight = document.getElementById('inputHeight');
const tableWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
var myTable = document.getElementByld('pixelCanvas');
  for (let i = 0; i<tableHeight.value; i++){
    myTable.insertRow(0);
    const row = document.querySelector('tr');
    for (let j=0; j<tableWidth.value; j++){
      row.insertCell(0);
      const cell = document.querySelector('td');
      cell.innerHTML = ";
      cell.style.border = '1px solid gray';
      cell.style.width = '40px';
      cell.style.height = '40px';
    }
  }
};
// Your code goes here!

const form = document.getElementById('sizePicker');

form.addEventListener('submit', function(event)){
  event.preventDefault();
  makeGrid();
  console.log("Making Grid, baby!")
};
                      
function addColor(event){
  if(event.target.tagName === 'td'){
    var color = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = color;
    event.preventDefault();
  }
};

const colorThis = document.getElementById('pixelCanvas');

colorThis.addEventListener('click', addColor);

