
// Select color input
var color = document.getElementById("colorPicker");
console.log(color);

// Select size input
var size = document.getElementById("sizePicker");

// sizePicker.addEventListener("submit", function(event) {
//   event.preventDefault();
//   makeGrid();
// });

// Set grid vars
var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight").value;
console.log(height);
var width = document.getElementById("inputWidth").value;
console.log(width);
var table = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
var submit = document.querySelector("Input[type='submit']");
submit.addEventListener("click", makeGrid());
var width = inputWidth.value;
var height = inputHeight.value;

function makeGrid(width, height) {
  for (var i = 0; i < height; i++) {
    var row = document.createElement("tr");
    table.appendChild(row);
    for (var j = 0; j < width; j++) {
      var clm = document.createElement("td");
      table.appendChild(clm);
    }
  }
}

//call function
makeGrid((height, width));
