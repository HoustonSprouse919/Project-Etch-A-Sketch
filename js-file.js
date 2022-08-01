let selectedGird =0;
function createGird(grid){
let gridNum = grid * grid;
for(var i = 0; i< gridNum; i++){
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = '';
content.style.color = 'blue';
content.style.border = 'solid';
content.style.width = "10px"
content.style.height = "10px"
container.appendChild(content);
}
}
createGird(16);