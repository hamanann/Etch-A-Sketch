const MAX_SIZE = 100;
const container = document.querySelector('.container');

function promtGridSize() {
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
    if (isNaN(size)) {
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
            e.target.classList.add('passed');
        });
    });
}


// initial grid upon opening page
createGrid(16);

// resize button event listener
const promptButton = document.querySelector('button.prompt');
promptButton.addEventListener('click', () => {
    promtGridSize();
});