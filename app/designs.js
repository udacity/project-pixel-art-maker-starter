$(function() {
  var app = (function() {
    const $table = $('#pixel_canvas');
    const $gridButton = $('#grid');
    const $backgroundPicker = $('#bgColor');
    const $inputHeight = $('#input_height');
    const $inputWidth = $('#input_width');
    const $colorPicker = $('#colorPicker');
    const $eraserButton = $('#eraser');
    const $zoom = $('#zoom');
    const $canvas = $('#canvas');
    const $fa = $('.fa');

    var initialize = false;

    return {
      init
    }

    function makeGrid() {
      let height = $inputHeight.val();
      let width = $inputWidth.val();
      let row = '';
      $table.html('');
      for (let i = 0; i < height; i++) {
        row += '<tr>';
        for (let j = 0; j < width; j++) {
          row += '<td class="grid"></td>';
        }
        row += '</tr>';
      }
      $table.append(row);
    }

    function paint() {
      const $td = $('td');
      var color = $colorPicker.val();
      var colorBackup = color;
      var isEraser = false;
      isEraser = !isEraser;
      $colorPicker.on('change', () => color = $colorPicker.val());
      $eraserButton.on('click', () => {
        $table.css({
          cursor: 'pointer'
        });
        isEraser = !isEraser;
        return isEraser ? color = colorBackup : color = 'transparent';
      });
      $td.on('contextmenu', function(e) {
        e.preventDefault();
        $(this).css({
          background: 'transparent'
        });
        return false;
      });
      $td.on('click', function() {
        $(this).css({
          background: color
        });
      });
      $(document).on('mousedown', function() {
          $td.on('mouseover mouseleave', function() {
            $(this).css({
              background: color
            });
          });
        })
        .on('mouseup', function() {
          $td.off('mouseover mouseleave');
        });
    }

    function changeBackground() {
      let bgColor = $backgroundPicker.val('#FCFCFC');
      $backgroundPicker.on('change', () => {
        bgColor = $backgroundPicker.val()
        $table.css({
          background: bgColor
        })
      });
    }

    function toggleGrid() {
      const $td = $('td');
      $gridButton.on('click', () => $td.toggleClass('grid'));
    }

    function zoom() {
      $zoom.on('click', () => {
        $table.addClass('zoom');
    });
    }
    function activateIcon(){
      $fa.on('click', function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
      })
    }
    function init() {
      if (initialize) {
        return;
      }
      initialize = true;
      activateIcon();
      changeBackground();
      $('#submit').click(function(e) {
        e.preventDefault();
        makeGrid();
        zoom();
        paint();
        $canvas.show(2000);
        toggleGrid();

      });
    }
  })();

  app.init()
});
