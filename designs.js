// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

	for (var i =0; i < height; i++) {
		var row = $("<tr></tr>").appendTo("table");
		for (var j = 0; j < width; j++) {
			$('<td></td>').text("test").appendTo("#pixelCanvas");
		}
	}

}

// Select color input


$("#colorPicker").change(function() {
	var color = $("#colorPicker").val();
	$("h2").css('color', color);
})

// Select size input

$("#sizePicker").submit(function(){
	height = $("#inputHeight").val();
	width = $("#inputWidth").val();
	makeGrid(height, width)
})
