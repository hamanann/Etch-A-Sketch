const MAX_SIZE = 100;
const container = document.querySelector('.gridContainer');
const rainbowColors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
const grayscaleColors = ["#E5E5E5", "#CCCCCC", "#B2B2B2", "#999999", 
    "#7F7F7F", "#666666","#4C4C4C", "#333333", "#191919", "#000000"];
let currentColor = -1;
let currentMode = "grayscale";


function promptGridSize() {
    const size = +prompt(`Enter grid size (max size is ${MAX_SIZE}):`, 16);

    removeGrid();
    createGrid(size);
}

// removes grid by deleting all children of .container
function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

// creates square grid of specified size
function createGrid(size) {
    if (isNaN(size) || size < 1) {
        size = 16;
    } else if (size > MAX_SIZE){
        size = MAX_SIZE;
    }

    const singleSquareDimensions = (100.0 / size) + "%";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            addDiv(singleSquareDimensions, getPosition(i, j, size));
        }
    }
    
    // add hover-effect event listener to squares
    addHoverEffect();
}

// Adds a single div square of specified dimension to the grid container
function addDiv(dimensions, position) {
    const newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.classList.add('square');
    newDiv.style.width = dimensions;
    newDiv.style.height = dimensions;
    position.split(" ").forEach(p => newDiv.classList.add(p));
}

function getPosition(i, j, size) {
    let position;
    if (i === size - 1 && j === size - 1) {
        position = "bottom right";
    } else if (i === size - 1) {
        position = "bottom";
    } else if (j === size - 1) {
        position = "right";
    } else {
        position = "other";
    }
    return position;
}

function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', (e) => {
            // e.target.classList.add('passed');
            // if (currentMode === 'rainbow') {
                e.target.style.backgroundColor = nextColor();
            // } else if (currentMode === 'grayscale') {
            //     e.target.style.backgroundColor = makeDarker();
            // }
        });
    });
}

function nextColor() {
    currentColor = (currentColor + 1) % 7;
    return rainbowColors[currentColor];
}

// function makeDarker(square) {
//     let style = window.getComputedStyle(squa)
//     let appliedColor = square.style.getPropertyValue('background-color');
//     let appliedColorIndex  = grayscaleColors.findIndex(appliedColor);
//     if (appliedColorIndex === -1) {
//         return grayscaleColors[0];
//     } else if (appliedColorIndex < 9) {
//         return grayscaleColors[appliedColorIndex + 1]
//     } else {
//         return grayscaleColors[appliedColorIndex];
//     }
// }


// initial grid upon opening page
createGrid(16);

// resize button event listener
const promptButton = document.querySelector('button.resize');
promptButton.addEventListener('click', () => {
    promptGridSize();
});

const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', (e) => {
    currentMode = "rainbow";
    addHoverEffect();
});

const grayscaleButton = document.querySelector('.grayscale');
// grayscaleButton.addEventListener('click', () => {
//     currentMode = "grayscale";
//     addHoverEffect();
// });