
let ht =document.getElementById("inputHeight");
let wd =document.getElementById("inputWidth");
let newTable=document.getElementById('pixelCanvas');
let size=document.getElementById('sizePicker');
let color= document.getElementById('colorPicker');

size.addEventListener('submit',function(event){
 event.preventDefault();
 makeGrid();
});
function makeGrid() {
  for(let i=0;i<ht.value;i++)
    {
      const row=newTable.insertRow(i);
      for(let j=0;j<wd.value;j++)
        {
          const cell=row.insertCell(j);
        }
    }
}
