// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');

const submit = document.querySelectorAll('input[type=submit]')

submit.addEventListener('click', makeGrid());


function makeGrid() {
// Your code goes here!

  console.log('The heading was clicked!');

}
