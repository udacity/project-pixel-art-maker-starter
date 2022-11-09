// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');

const pixelCanvas = document.getElementById('pixelCanvas');

document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
})

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Your code goes here!

    pixelCanvas.innerHTML = "";

    for (let i = 0; i < inputHeight.value; i++) {

        let newRow = pixelCanvas.insertRow();

        for (let j = 0; j < inputWidth.value; j++) {

            let newCell = newRow.insertCell();
            newCell.style.backgroundColor = "rgb(255,255, 255";

            newCell.addEventListener('click', function(){
                let hex = colorPicker.value;
                let rgbPicker = "rgb(" + ('0x' + hex[1] + hex[2] | 0) + ", " +
                                ('0x' + hex[3] + hex[4] | 0) + ", " + ('0x' + hex[5] + hex[6] | 0) + ")";
                if (newCell.style.backgroundColor != 'rgb(255, 255, 255)' &&
                    newCell.style.backgroundColor == rgbPicker)
                    newCell.style.backgroundColor = "rgb(255, 255, 255)";
                else
                    newCell.style.backgroundColor = colorPicker.value;
            } )
        }
    }


}
