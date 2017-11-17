let  input_rows;
let input_cols;
let input_color = "#000000";
/**@constructor
  *This function is used to create a table with different columns and rows length 
*/
function makeGrid() {
  var table = document.getElementById("pixel_canvas");
  table.innerHTML = "";
  while(table.rows.length > 0)
    table.deleteRow(0);
  input_rows = document.getElementById("input_height").value;
  input_cols = document.getElementById("input_width").value; 
  /**
    * Class constructor for loops specifying numbers of rows and colunms to create a grid.
  */
  for (var i = 0; i < input_rows; i++) {
    var row_elem = table.insertRow(i);
    row_elem.setAttribute("class", "row");
    for (var j = 0; j < input_cols; j++) {
      var cell= row_elem.insertCell(j);
        /**
          * Class constructor method. it attachs a click event to an element. 
          when the user clicks on the element, it outputs a background color to chose
        */
      cell.addEventListener('click', function(evt) {
        evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
        this.style.borderColor="#9ecaed";
        this.style.boxShadow="0 0 10px #9ecaed";
      });
    }
  }
}

document.getElementById("sizePicker").addEventListener("submit", function(evt) {
  evt.preventDefault();
  makeGrid();
});
