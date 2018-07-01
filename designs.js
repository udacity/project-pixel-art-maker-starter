$(document).ready(function(){
	
$('#sizePicker').submit(function makeGrid(grid){
	var rows =$('#inputHeight').val();
	var cols=$('#inputWidth').val();
	for (var i=1; i<=rows; i++){
		$('table').append('<tr></tr>');
	for (var j=1; j<=cols; j++){
		$('tr:last').append('<td></td>');
		$('td').attr('class','cells');
	}
	}
	grid.preventDefault(); 

$('.cells').click(function(event){
var	paint=$('#colorPicker').val();
$(event.target).css('background-color'.paint);
});
});
});
