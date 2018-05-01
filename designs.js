// Select color input
var colorVal, gridHeightVal, gridWidthVal, grid;

// Select size input
$('#submitGrid').click(function(e){
  e.preventDefault(); 
  $("#colorPicker").val("#000000");
  // When size is submitted by the user, call makeGrid()
  makeGrid();
});

grid = $('#pixelCanvas');
function makeGrid() {
// Your code goes here!
  grid.empty(); //Reset the canvas
  gridHeightVal = $('#inputHeight').val();
  gridWidthVal = $('#inputWidth').val();
  colorVal = $('#colorPicker').val();
  //create canvas rows and cols
  for(let row=0; row < gridWidthVal; row++){
    grid.append(document.createElement('tr'));
    for( let col=0; col < gridHeightVal; col++){
      $('tr:last').append(document.createElement('td'));
    }
  }
}
$('#colorPicker').on('change', function(){
  colorVal = $('#colorPicker').val();
  console.log(colorVal);
});
grid.on('click','td', function(e){
  console.log("td clicked");
  $(e.target).css('background-color', colorVal);
})
//drag mouse and color
let drag = false;
grid.on('mouseup', function(){
  drag = false;
});
grid.on('mousedown', function(){
  drag = true;
});
grid.on('mousemove', 'td', function(e){
  if(drag) {
    $(e.target).css('background-color', colorVal);
  }
});