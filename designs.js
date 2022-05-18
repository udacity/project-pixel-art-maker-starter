const size = document.getElementById('sizePicker');
const canvas = document.getElementById("pixelCanvas");

function makeGrid() {
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;

  for (let x = 0; x < height; x++) {
    const tr = canvas.insertRow(x);
    for (let y = 0; y < width; y++) {
      const td = tr.insertCell(y);
      
      td.addEventListener("click", evt => {
        var color = document.querySelector("#colorPicker").value; 
        evt.target.style.backgroundColor = color; // Adds color when cell is clicked
      });
    
      td.addEventListener('dblclick', evt => {
        evt.target.style.backgroundColor = null; // Removes color when cell is double-clicked
      });
    }
  }
}
size.onclick = (evt) => {
  evt.preventDefault();
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
}
  makeGrid();
};
