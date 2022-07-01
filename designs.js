// Select color input
// Select size input
// debugger;
// When size is submitted by the user, call makeGrid()

// REFERENCES
// https://stackoverflow.com/questions/14643617/create-table-using-javascript
// https://stackoverflow.com/questions/27044956/javascript-change-the-color-of-current-element-by-clck

const height = document.getElementById("inputHeight").value;
const width = document.getElementById("inputWidth").value;
const color = document.getElementById("colorPicker").value;
const submit = document.querySelectorAll('input[type=submit]')

function makeGrid() {
console.log("Height:" + height + " width:" + width + " Color: ");
  addTable();
  console.log('The heading was clicked!');
}

function respondToTheClick(evt) {
    // console.log('A paragraph was clicked: ' + evt.target.textContent);
    // evt.target.style.backgroundColor = "green";
    evt.target.style.backgroundColor = color;
  }

function addTable() {
  var myTableDiv = document.getElementById("pixelCanvas");

  var table = document.createElement('TABLE');
  table.border = '2';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  // for (var i = 0; i < height; i++) {
  for (var i = 0; i < 10; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    // for (var j = 0; j < width; j++) {
    for (var j = 0; j < 10; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode("   "));
      tr.appendChild(td);
    }
  }
  myTableDiv.addEventListener('click', respondToTheClick);
  myTableDiv.appendChild(table);
}


submit[0].addEventListener('click', makeGrid());

// Chapter code snippet for reference 

// const myCustomDiv = document.createElement('div');

// function respondToTheClick(evt) {
//     console.log('A paragraph was clicked: ' + evt.target.textContent);
// }

// for (let i = 1; i <= 200; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;

//     myCustomDiv.appendChild(newElement);
// }

// document.body.appendChild(myCustomDiv);

// myCustomDiv.addEventListener('click', respondToTheClick);
