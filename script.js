function addDiv(dimensions) {
    const newDiv = document.createElement('div');
    const cont = document.querySelector('.container');
    cont.appendChild(newDiv);
    newDiv.classList.add('square');
    newDiv.style.width = dimensions + '%';
    newDiv.style.height = dimensions + '%';
}

function createGrid(size) {
    const dimensionPercentage = 100.0 / size;
    for (let i = 0; i < size * size; i++) {
        addDiv(dimensionPercentage);
    }
}


function promtGridSize() {
    const size = +prompt("Enter grid size (max size is 100):", 16);
    if (isNaN(size)) {
        createGrid(16);
    } else if (size > 100){
        createGrid(100);
    } else {
        createGrid(size);
    }
}

promtGridSize();