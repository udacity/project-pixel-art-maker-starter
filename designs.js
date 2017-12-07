// $(function() {
//   var app=(function() {
//
//
//     const inputHeight = $('#input_height');
//     const inputWidth = $('#input_width');
//     const table = $('#pixel_canvas');
//     const $tr = $('<tr></tr>');
//     const $td = $('<td></td>');
//     var height = inputHeight.on("change",() =>  inputHeight.val());
//     var width = inputHeight.on("change",() => inputWidth.val());
//     var color = colorPicker.on("change",() => colorPicker.val());
//
//     return {
//        bar: barc,
//        heigth: height,
//        paint: paint,
//     }
function makeGrid() {
table.html('');
colorPicker.change(()=>{color=colorPicker.val()});
   var height=$('#input_width').val();
   var width=$('#input_height').val();
   var $tr = $('<tr></tr>');
   var $td = $('<td></td>');
   var row = '';
   var td=''
        for (let i = 0; i < height; i++) {
          row += '<tr>'
          for (let j = 0; j < width; j++) {
              row+='<td></td>';
          }
          row+='</tr>'
        }
     table.append(row)
}

function paint(){
  $('td').on('contextmenu', function(e){
    e.preventDefault();
    $(this).css({background: 'transparent'});
    return false;
   });
 $("td").on('click',function(){
     $(this).css({background: color});
 });
 $(document).on('mousedown' ,function() {
   $("td").on('mouseover mouseleave',function(){
     $(this).css({background: color});
   });
 })
.on('mouseup', function() {
   $("td").off('mouseover mouseleave');
 });
}
//
//      function barc(){
//        console.log(colorPicker);
//      }
//   })();
//   app.bar();
//   console.log(app.color);
//     console.log(app.width);
//       $('body').click(()=>console.log(app.heigth));
//       app.paint();
//
// });
// Select color input


// colorPicker.change(()=>{color=colorPicker.val()});
// inputHeight.change(()=>{canvasHeight = inputHeight.val();});
// inputWidth.change(()=>{canvasWidth = inputWidth.val();})

// When size is submitted by the user, call makeGrid()
const colorPicker = $('#colorPicker');
 const table = $('#pixel_canvas');
var color = '#000';


       // $('td').mousedown(function() {
       // });
       //   $(this).css({background:"#333333"});



$('#submit').click(function (e) {
    e.preventDefault();
    makeGrid();
    paint();
});
