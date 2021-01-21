// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const table = document.getElementById('pixelCanvas');

var rows = document.getElementById("inputHeight").value;
var cols = document.getElementById("inputWidth").value;

function makeGrid(rows, cols) {
    for (r=0; r<rows; r++) {
        var row = table.insertRow(0);
        table.insertRow(r);
        for (c=0; c<cols; c++)
            row.insertCell(0);
    };
};

makeGrid(10, 10);