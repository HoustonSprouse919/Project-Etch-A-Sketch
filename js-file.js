let selectedGird =0;

function createGird(grid){
container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`
container.style.gridTemplateRows = `repeat(${grid}, 1fr)`
let gridNum = grid * grid;
for(var i = 0; i< gridNum; i++){
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = '';
content.style.color = 'blue';
content.style.border = 'solid';
content.style.width = "20px"
content.style.height = "20px"
content.addEventListener('mouseover', mouseOver);

function mouseOver(){
    console.log("working")
    content.setAttribute("style", "background-color:red;")
    }
    
container.appendChild(content);
}
}
createGird(16);
