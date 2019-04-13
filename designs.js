// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

// Your code goes here!
    event.preventDefault();

    const m = document.querySelector('#inputHeight').value;
    const n = document.querySelector('#inputWidth').value;
    const pixelTable = document.querySelector('#pixelCanvas');
    
    while (pixelTable.firstChild) {
        pixelTable.removeChild(pixelTable.firstChild);
    }

    for (let height = 0; height < m; height++) {
        const row = document.createElement('tr');
        for (let width = 0; width < n; width++) {
            const cell = document.createElement('td');
            cell.addEventListener('click', function () {
                const color = document.querySelector('input#colorPicker').value;
                cell.style.backgroundColor = color;
            });
            cell.addEventListener('dblclick', function () {
                cell.style.backgroundColor = 'white' ;
            });
            row.appendChild(cell);
        }
        pixelTable.appendChild(row)
    }


    console.log(`The size is ${m}*${n} and color is ${color}`);
}

const form = document.querySelector('form#sizePicker');
form.addEventListener('submit', makeGrid);