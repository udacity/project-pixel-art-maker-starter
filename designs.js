// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var gridHeight = $('#inputHeight').val();
var gridWidth = $('#inputWeight').val();

$('#sizePicker').submit(function(evt) {
    evt.preventDefault();

    gridHeight = $('#inputHeight').val();
    gridWidth = $('#inputWeight').val();
    
    // Create grid
    makeGrid();

    // Assign event listeners to color cells
    $('td').click(function(e) {
        if ($(e.target).css('background-color') === 'rgba(0, 0, 0, 0)') {
            $(e.target).css('background-color', $('#colorPicker').val());
        } else {
            $(e.target).css('background-color', '');
        }
    });
});

function makeGrid() {
    $('#pixelCanvas').empty();

    var row = '';
    for (var i = 0; i < gridWidth; i++) {
        row += '<td></td>';
    }
    var table = '';
    for (var i = 0; i < gridHeight; i++) {
        table += '<tr>' + row + '</tr>';
    }
    
    $('#pixelCanvas').append(table);
}
