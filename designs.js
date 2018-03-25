// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(rw,col) {

$("#pixelCanvas").empty();
	//	$("#pixelCanvas").prepend(rw);
	for(var i=1; i<=rw; i++){
		
		var row="<tr id='r"+i+"'>";
		$("#pixelCanvas").append(row);
		for(var y=1; y<=col; y++){
			var cell="<td id='r"+i+"c"+y+"'>";
			$("tr#r"+i).append(cell);			
		}
	}

		

	

// Your code goes here!

}

jQuery(document).ready(function() {


	$("#sizePicker").on("submit",function(e){
var rw = $("#inputHeight").val();
var col = $("#inputWidth").val();
		makeGrid(rw,col);
		e.preventDefault();
}); //end of sizePicker

	
}); //end of ready();


	