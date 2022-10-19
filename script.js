function addDiv(dimensions) {
    const newDiv = document.createElement('div');
    const cont = document.querySelector('.container');
    cont.appendChild(newDiv);
    newDiv.classList.add('square');
    newDiv.style.width = dimensions + '%';
    newDiv.style.height = dimensions + '%';
}

function createGrid(size) {
    const dimensionPercentage = Math.floor(100.0 / size);
    for (let i = 0; i < size * size; i++) {
        addDiv(dimensionPercentage);
    }
}

createGrid(16);