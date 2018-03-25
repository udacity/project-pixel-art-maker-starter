// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



jQuery(document).ready(function() {
var color="#000";


function makeGrid(rw,col) {

$("#pixelCanvas").empty();
	//	$("#pixelCanvas").prepend(rw);
	for(var i=1; i<=rw; i++){
		
		var row="<tr id='r"+i+"' class='row'>";
		$("#pixelCanvas").append(row);
		for(var y=1; y<=col; y++){
			var cell="<td id='r"+i+"c"+y+"' class='cell'>";
			$("tr#r"+i).append(cell);			
		}
	}

}


function colorCell(id,color){
	$("#"+id).css("background",color);

}

$("#sizePicker").on("submit",function(e){
var rw = $("#inputHeight").val();
var col = $("#inputWidth").val();
color=$("#colorPicker").val();

makeGrid(rw,col);
console.log("row: "+rw+" col: "+col+" Color: "+color);
e.preventDefault();
}); //end of sizePicker


// $("#colorPicker").click(function(){
// 	color=$("#colorPicker").val();
// });


$("#pixelCanvas").on("click",".cell",function(){
var id=$(this).attr("id");
color = $("#colorPicker").val(); 
colorCell(id,color);
});



}); //end of ready();


	