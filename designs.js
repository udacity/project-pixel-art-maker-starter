
let ht =document.getElementById("inputHeight");
let wd =document.getElementById("inputWidth");
let newTable=document.getElementById('pixelCanvas');
let size=document.getElementById('sizePicker');
let color= document.getElementById('colorPicker');

//submit button fuctionality
size.addEventListener('submit',function(event){
 event.preventDefault();
 clearGrid();
 makeGrid();
});

//makeGrid logic
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

//clearGrid logic
function clearGrid(){
  while(newTable.rows.length>0)
    {
      newTable.deleteRow(0);
    }
}

//Coloring pixel
newTable.addEventListener('click',function(event){
  if(event.target.nodeName==='TD')
  event.target.style.backgroundColor=color.value;
})
