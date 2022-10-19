const MAX_SIZE = 100;
const container = document.querySelector('.container');

// Adds a single div square of specified dimension to the grid container
function addDiv(dimensions) {
    const newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.classList.add('square');
    newDiv.style.width = dimensions;
    newDiv.style.height = dimensions;
}

// creates square grid of specified size
function createGrid(size) {
    if (isNaN(size)) {
        size = 16;
    } else if (size > MAX_SIZE){
        size = MAX_SIZE;
    }

    const gridSquareDimensions = (100.0 / size) + "%";
    for (let i = 0; i < size * size; i++) {
        addDiv(gridSquareDimensions);
    }
    
    // add hover-effect event listener to squares
    addHoverEffect();
}

function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('passed');
        });
    });
}


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

// initial grid upon opening page
createGrid(16);

// resize button event listener
const promptButton = document.querySelector('button.prompt');
promptButton.addEventListener('click', () => {
    promtGridSize();
});