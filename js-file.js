let selectedGird =0; //num that user picks
var randomColor = Math.floor(Math.random()*16777215).toString(16);
function createGird(grid){
container.style.gridTemplateColumns = `repeat(${grid}, 1fr)` //these use grid to make rows and columns =
container.style.gridTemplateRows = `repeat(${grid}, 1fr)`    //what user chooses
let gridNum = grid * grid; //multiplying by self to get full amount
for(var i = 0; i< gridNum; i++){ //run amount times
const container = document.querySelector('#container');  //goes into container
const content = document.createElement('div');  //creates divs called content
content.classList.add('content'); //adds the content divs

//various style stuff
content.style.color = 'blue';
content.style.border = 'solid';
content.style.width = "20px"
content.style.height = "20px"
content.addEventListener('mouseover', mouseOver); //when mouse over goes to mouse over func

function mouseOver(){
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor); //testing
    content.setAttribute("style", `background-color: ${randomColor};`) //changes background color in styles
    }

container.appendChild(content);
}
}
createGird(16);
