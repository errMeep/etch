const gridcontainer = document.querySelector("#gridContainer");
let gridMax = 256;

//Creates grids
for (let x = 0; x < gridMax; x++){
    tempDiv = document.createElement("div");
    tempDiv.classList.add("grid");
    gridcontainer.appendChild(tempDiv);
}
//contain every grid into allGrids array
allGrids = document.querySelectorAll(".grid");

//set gridMax


//function to replace class to grid hovered (plays hover animation)
function playTransition(e){
    this.classList.replace("grid", "gridHovered");
}

allGrids.forEach((grid) => {
    grid.addEventListener("mouseover", playTransition);
})
