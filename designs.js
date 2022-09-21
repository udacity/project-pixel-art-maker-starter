const sizePicker = document.getElementById("sizePicker");
// Select size input
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");

// Select color input
let color = document.getElementById("colorPicker");

const pixelCanvas = document.getElementById("pixelCanvas");

function clearGrid() {
  const allRows = document.querySelectorAll("tr");
  allRows.forEach((row) => {
    row.remove();
  });
}

function makeGrid(e) {
  e.preventDefault();

  clearGrid();

  const height = inputHeight.value;
  const width = inputWidth.value;
  for (let i = 1; i <= height; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= width; j++) {
      const column = document.createElement("td");
      column.id = "column-i-j";
      row.appendChild(column);
    }
    pixelCanvas.appendChild(row);
  }
}

sizePicker.addEventListener("submit", makeGrid);

pixelCanvas.addEventListener("click", function (e) {
  e.target.style.backgroundColor = color.value;
});