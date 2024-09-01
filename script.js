let color = null;
let mousedown = false;

const body = document.getElementsByTagName("body")[0];
const colorBlocks = document.querySelectorAll("#sidebar > div");
const clearButton = document.querySelector("#sidebar button");
const main = document.getElementById("main");

// Dynamically create the grid of squares
const gridRows = 30;
const gridCols = 60;

for (let i = 0; i < gridRows * gridCols; i++) {
    const div = document.createElement('div');
    main.appendChild(div);
}

const fillBlocks = document.querySelectorAll("#main > div");

clearButton.addEventListener("click", function() {
    fillBlocks.forEach(fillBlock => {
        fillBlock.style.backgroundColor = "white";
    });
});

body.addEventListener("mousedown", function() {
    mousedown = true;
});

body.addEventListener("mouseup", function() {
    mousedown = false;
});

colorBlocks.forEach(colorBlock => {
    colorBlock.addEventListener("click", function(event) {
        color = event.target.style.backgroundColor;
    });
});

fillBlocks.forEach(fillBlock => {
    fillBlock.addEventListener("mousedown", function(event) {
        if (color !== null) event.target.style.backgroundColor = color;
    });
    fillBlock.addEventListener("mouseover", function(event) {
        if (mousedown && color !== null) event.target.style.backgroundColor = color;
    });
});