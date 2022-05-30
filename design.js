// add event listener When form gets submitted and call makeGrid() 
document.querySelector("#sizePicker").addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
}, false);

function makeGrid() {
    // Define user input height and width.
    const pixelHeight = document.querySelector("#input_height").value;
    const pixelWidth = document.querySelector("#input_width").value;

    // Define table element.
    const pixelTable = document.querySelector("#pixel_canvas");

    // Clear the table when user re-submit height and width.
    // https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table#answer-44971572
    while (pixelTable.hasChildNodes()) {
        pixelTable.removeChild(pixelTable.lastChild);
    }

    // Loops dynamically to create the table based on user input.
    for (let row = 0; row < pixelHeight; row++) {
        let tr = document.createElement('tr');
        tr.id = 'row-' + row;
        pixelTable.appendChild(tr);
        for (let col = 0; col < pixelWidth; col++) {
            let td = document.createElement('td');
            td.id = 'row-' + row + '_cell-' + col;
            pixelTable.lastChild.appendChild(td);
        }
    }

    // Create new instances of the all document.querySelectorAll("td").
    let tableCells = Array.from(document.querySelectorAll("td"));
    // Each cell should have an event listener that sets the background color of the cell to the selected color.
    tableCells.forEach(function(cell) {
        cell.addEventListener("click", function() {
            this.style.backgroundColor = document.querySelector("#colorPicker").value;
        }, false);
    });
}