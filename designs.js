// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

// Your code goes here!
    event.preventDefault();

    const m = document.querySelector('#inputHeight').value;
    const n = document.querySelector('#inputWidth').value;
    const color = document.querySelector('input#colorPicker').value;
    const pixelTable = document.querySelector('#pixelCanvas');

    
    console.log(`The size is ${m}*${n} and color is ${color}`);
}

const form = document.querySelector('form#sizePicker');
form.addEventListener('submit', makeGrid);