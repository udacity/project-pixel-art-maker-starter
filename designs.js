// Select color input
var color = $('#colorPicker');

var gridArea = $('#pixelCanvas');

// Select size input

var height = $('#inputHeight');

var width = $('#inputWeight');

// When size is submitted by the user, call makeGrid()

var subBtn = $('#submit');

// var resetBtn = $('#reset');

var x = "<tr class='canvasRow'></tr>";

var y = "<td class='canvasCol'></td>";



function makeGrid() {

// Your code goes here!

	$(".canvasRow:last").append(y);

	$(".canvasCol:last").on('click',function(e){

		selecteColor = $(color).val();

		$(this).css("background-color",selecteColor);		

	})

}



$("#inputHeight, #inputWeight").on('change',function(evt){

	console.log($(this).val());	

	if($(this).val() >25){

		$(subBtn).prop('disabled','true');

		$("#error").removeAttr('hidden');

		$("#error").text("Max allowable height/width value is 25.");

		$("#error").css("color","red");

	}else{

		$("#error").attr("hidden","true");

		$(subBtn).removeAttr('disabled');

	}	

});



$('#submit').on('click',function(evt){

	// evt.preventDefault();

	$(".canvasRow").remove();

	$(".canvasCol").remove();

	var col	= $(width).val();

	var row	= $(height).val();

	for (r = 0; r<row; r++){

		$(gridArea).append(x);

		for(c = 0; c<col; c++){

			makeGrid();

		}

	}

	console.log(col,row,$(color).val());

});

/*

$('#reset').on('click',function(evt){

	$(".canvasRow").remove();

	$(".canvasCol").remove();

});

*/
