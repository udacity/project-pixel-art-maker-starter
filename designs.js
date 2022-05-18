const size = document.getElementById('sizePicker');
const canvas = document.getElementById("pixelCanvas");

function makeGrid() {
	const height = document.getElementById("inputHeight").value; // get height input
	const width = document.getElementById("inputWidth").value; // get width input

	for (let x = 0; x < height; x++) {
		const tr = canvas.insertRow(x); // Adds rows
		for (let y = 0; y < width; y++) {
			const td = tr.insertCell(y); // Adds each cell 

			td.addEventListener("click", evt => {
				var color = document.querySelector("#colorPicker").value;
				evt.target.style.backgroundColor = color; // Adds color when cell is clicked
			});

			td.addEventListener('dblclick', evt => {
				evt.target.style.backgroundColor = null; // Removes color when cell is double-clicked
			});
		}
	}
}
size.onclick = (evt) => {
	evt.preventDefault(); // Prevents the page from refreshing when sizes are submitted
	while (canvas.hasChildNodes()) {
		canvas.removeChild(canvas.lastChild);// clears any previous grid away
	}
	makeGrid(); // Calls makeGrid() when the sizes are submitted 
};