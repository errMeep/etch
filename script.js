const gridcontainer = document.querySelector("#gridContainer");
let gridMax = 256;


for (let x = 0; x < gridMax; x++){
    tempDiv = document.createElement("div");
    tempDiv.classList.add("grid");
    gridcontainer.appendChild(tempDiv);
}

allGrids = document.querySelectorAll(".grid");

function playTransition(e){
    this.classList.replace("grid", "gridHovered");
}

allGrids.forEach((grid) => {
    grid.addEventListener("mouseover", playTransition);
})
