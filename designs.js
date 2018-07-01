// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



// Your code goes here!
$(document).ready(function(){
  $('#sizePicker').submit(function makeGrid(grid){
    $('table tr').remove();
    var rows=$('#input_height').val();        
    var columns=$('#input_width').val();
      for(var i=1;i<=rows;i++){
        $('table').append('<tr></tr>');
       for(var j=1;j<=columns; j++){
         $('tr:last').append('<td></td>');
         $('td').attr("class",'cells');
            grid.preventDefault();
            $('.cells').click(function(event){
              var paint=$('#colorPicker'),val();
              $(event.target).css('background-color',paint);
    
            }
            }
});
       }
       }  
  
  
/*make grid*/
//function makeGrid(x,y) {
  //$('tr').remove();
    //for(var a=1; a<=x;a++){
      //$('#pixelCanvas').append('<tr id=table' +a+ '></tr>;
       //for (var b=1; b<=y;b++){
        //$('#table'+a).append('<td></td>');
 //   }
 // }
//});

  /*colors*/
//  $('td').click9function addColor(){
  //  color=$('#colorPicker').val();
    
    //if($(this).attr('style')){
      //$(this).removeAttr('style');
   // } else{
     // $(this).attr('style','background-color:'+color);
    //}
  //});
//}

     
