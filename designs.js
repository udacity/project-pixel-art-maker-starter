// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

	idCount = 1;

	for (var i =0; i < height; i++) {
		var row = $("<tr></tr>").appendTo("#pixelCanvas");
		for (var j = 0; j < width; j++) {
			$('<td></td>').text(" ").addClass("cell").attr("id",idCount).appendTo(row);
			idCount++;
		}
	}

}

// Select color input

color = "#ffffff"

$("#colorPicker").change(function() {
	color = $("#colorPicker").val();
	
})

// Select size input

$("#sizePicker").submit(function(event){
	event.preventDefault();

	if ($("#pixelCanvas").children().length >= 1) {
		$("#pixelCanvas").empty();
	}

	height = $("#inputHeight").val();
	width = $("#inputWidth").val();
	makeGrid(height, width)
	
})

$("#pixelCanvas").click(function(event) {
        var cellToColor = event.target.id;
        $('#' + cellToColor).css("background-color", color);
})