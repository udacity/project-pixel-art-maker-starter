let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");
let canvas = document.getElementById("pixel_canvas");

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(event){
    event.preventDefault();

    makeGrid();
};

function makeGrid() {
    for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

{
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}


function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}
