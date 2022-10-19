const MAX_SIZE = 60;

function addDiv(dimensions) {
    const container = document.querySelector('.container');
    const newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.classList.add('square');
    newDiv.style.width = dimensions + '%';
    newDiv.style.height = dimensions + '%';
}

function createGrid(size) {
    const dimensionPercentage = 100.0 / size;
    for (let i = 0; i < size * size; i++) {
        addDiv(dimensionPercentage);
    }
    
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

    if (isNaN(size)) {
        createGrid(16);
    } else if (size > MAX_SIZE){
        createGrid(MAX_SIZE);
    } else {
        createGrid(size);
    }
}

function removeGrid() {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

createGrid(16);

const promptButton = document.querySelector('button.prompt');
promptButton.addEventListener('click', () => {
    promtGridSize();
});