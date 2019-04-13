// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

// Your code goes here!
    event.preventDefault();
}

const form = document.querySelector('form#sizePicker');
form.addEventListener('submit', makeGrid);