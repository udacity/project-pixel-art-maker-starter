// $(function() {
//   var app=(function() {
//
//     const colorPicker = $('#colorPicker');
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
//     function makeGrid(){
//       for (let row = 0; row <= height; row++) {
//         table.append($tr);
//         for (let column = 0; column <= width; column++) {
//             $tr.append($td);
//         }
//       }
//     }
//     function paint(){
//       $('td').on('mousedown',function(){
//         $(this).css('backgroundColor','red');
//       });
//       console.log($(this).bind())
//     }
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

let color = '#000';
let canvasWidth = 1;
let canvasHeight = 1;
// colorPicker.change(()=>{color=colorPicker.val()});
// inputHeight.change(()=>{canvasHeight = inputHeight.val();});
// inputWidth.change(()=>{canvasWidth = inputWidth.val();})

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
   const table = document.querySelector('#pixel_canvas');
   var height=2;
   var width=2;
  var $tr = $('<tr></tr>');
  var $td = $('<td></td>');
        for (let row = 0; row <= 2; row++) {
          row = table.insertRow(0)
          for (let column = 0; column <= 2; column++) {
              row.insertCell(1);
          }
        }

}

$('#submit').click(function (e) {
    e.preventDefault();
    makeGrid();
});
