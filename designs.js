var input_rows;
var input_cols;
var input_color = "#000000";

function makeGrid() {
  var table = document.getElementById("pixel_canvas");
  table.innerHTML = "";
  while(table.rows.length > 0)
    table.deleteRow(0);
  input_rows = document.getElementById("input_height").value;
  input_cols = document.getElementById("input_width").value;
  for (var i = 0; i < input_rows; i++) {
    var row_elem = table.insertRow(i);
    row_elem.setAttribute("class", "row");
    for (var j = 0; j < input_cols; j++) {
      var cell= row_elem.insertCell(j);
      cell.addEventListener('click', function(evt) {
        evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
        this.style.borderColor="#9ecaed";
        this.style.boxShadow="0 0 10px #9ecaed";
      });
    }
  }
  return false;
}

document.getElementById("sizePicker").addEventListener("submit", function(evt) {
  evt.preventDefault();
  makeGrid();
});
