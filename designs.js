let gridTable = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let sizePickerForm = document.getElementById('sizePicker');
let eraseMode = document.querySelector('.erase-mode');
let drawMode = document.querySelector('.draw-mode');
let fillButton = document.querySelector('.fill-button');


//Function to create grid
let makeGrid = (event) => {
    event.preventDefault()
    //Deletes old table
    if(gridTable.rows.length > 0){
        while(gridTable.rows.length > 0){
            gridTable.deleteRow(0);
        }
    }
    //Creates table
    for (let i=0; i < height.value; i++){
        const row = gridTable.insertRow(i);
        for (let j=0; j < width.value; j++){
            const cell = row.insertCell(j);
            cell.addEventListener('mousedown', e =>  {
                e.target.style.backgroundColor = color.value;
            });
        }
    }
}
//Adding Listener for the submit input on form.
sizePickerForm.addEventListener('submit', makeGrid);

let down = false;

gridTable.addEventListener('mousedown', (e) => {
	down = true;
	gridTable.addEventListener('mouseup', () => {
		down = false;
	});
    gridTable.addEventListener('mouseleave', () => {
        down = false;
     });

    gridTable.addEventListener('mouseover', e => {
  	    if (down) {
            if (e.target.tagName === 'TD') {
                e.target.style.backgroundColor = color.value;
            }
        }
    });
});

pixelCanvas.addEventListener('dblclick', e => {
    e.target.style.backgroundColor = null;
});

eraseMode.addEventListener('click', () => {
    gridTable.addEventListener('mousedown', (e) => {
        down = true;
        gridTable.addEventListener('mouseup', () => {
            down = false;
        });
        gridTable.addEventListener('mouseleave', () => {
            down = false;
        });

        gridTable.addEventListener('mouseover', e => {
            if (down) {
                if (e.target.tagName === 'TD') {
                    e.target.style.backgroundColor = null;
                }
            }
        });
    });
    pixelCanvas.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = null;
    });
  });

drawMode.addEventListener('click', () => {
    gridTable.addEventListener('mousedown', (e) => {
            down = true;
            gridTable.addEventListener('mouseup', () => {
                down = false;
            });
            gridTable.addEventListener('mouseleave', () => {
                down = false;
            });
            gridTable.addEventListener('mouseover', e => {
                if (down) {
                    if (e.target.tagName === 'TD') {
                        e.target.style.backgroundColor = color.value;
                    }
                }
            });
    });
    gridTable.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = color.value;
    });
  });

  fillButton.addEventListener('click', () => {
    gridTable.querySelectorAll('td').forEach( td => td.style.backgroundColor = color.value);
  });